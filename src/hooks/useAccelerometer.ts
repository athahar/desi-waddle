// hooks/useAccelerometer.ts
import { useEffect, useRef } from 'react';
import { Accelerometer } from 'expo-sensors';
import * as Haptics from 'expo-haptics';

type Dir = 'down' | 'up';
type State = 'NEUTRAL' | 'WAIT_NEUTRAL' | 'ARMED_DOWN' | 'ARMED_UP' | 'TRIGGERED';

/**
 * Heads-up tilt detection with state machine:
 *  - Tilt DOWN (face toward ground)  => CORRECT
 *  - Tilt UP   (face toward sky)     => PASS
 *
 * State machine prevents repeated triggers:
 *  1. (Optional) WAIT_NEUTRAL: Requires neutral pose before accepting tilts
 *  2. Requires moving from NEUTRAL → ARMED → TRIGGER
 *  3. Requires holding the angle (dwell) before firing
 *  4. Locks out repeats until you return to neutral
 *
 * This prevents "machine-gun" triggers and false starts from horizontal positioning.
 */
export function useAccelerometer(
  onTiltDown: () => void, // CORRECT
  onTiltUp: () => void,   // PASS
  cfg: {
    enable?: boolean;

    // neutral gating (prevents false triggers at start)
    requireNeutralFirst?: boolean;  // require forehead position before accepting tilts
    neutralThresh?: number;         // |z| <= this counts as neutral (vertical)
    neutralDwellMs?: number;        // must hold neutral this long

    // main hysteresis
    armThresh?: number;             // |z| >= this arms
    dwellMs?: number;               // hold in the armed direction before firing
    cooldownMs?: number;            // lockout after trigger
    interval?: number;              // sensor polling interval

    // optional callbacks
    onNeutralReadyChange?: (ready: boolean) => void; // UI update when neutral detected
    playHapticOnReady?: boolean;    // haptic feedback when neutral position achieved
  } = {}
) {
  const {
    enable = true,
    requireNeutralFirst = true,
    neutralThresh = 0.25,
    neutralDwellMs = 600,
    armThresh = 0.55,
    dwellMs = 250,
    cooldownMs = 800,
    interval = 100,
    onNeutralReadyChange,
    playHapticOnReady = true,
  } = cfg;

  const state = useRef<State>(requireNeutralFirst ? 'WAIT_NEUTRAL' : 'NEUTRAL');
  const neutralSince = useRef<number>(0);
  const neutralReady = useRef<boolean>(!requireNeutralFirst);
  const armedDir = useRef<Dir | null>(null);
  const armedAt = useRef<number>(0);
  const lastTriggerAt = useRef<number>(0);

  // Update UI callback when ready state changes
  const setNeutralReady = async (val: boolean) => {
    if (neutralReady.current !== val) {
      neutralReady.current = val;
      onNeutralReadyChange?.(val);

      // Haptic feedback when ready position achieved
      if (val && playHapticOnReady) {
        try {
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        } catch (error) {
          if (__DEV__) {
            console.log('Haptics error (non-critical):', error);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (!enable) return;

    const sub = Accelerometer.addListener(({ z }) => {
      const now = Date.now();
      const absZ = Math.abs(z);

      // ---- Phase 1: Require initial neutral pose (forehead position) ----
      if (!neutralReady.current) {
        if (absZ <= neutralThresh) {
          if (!neutralSince.current) neutralSince.current = now;
          if (now - neutralSince.current >= neutralDwellMs) {
            setNeutralReady(true);
            state.current = 'NEUTRAL';
          }
        } else {
          neutralSince.current = 0; // reset dwell if they move
        }
        return; // ignore tilts until neutral confirmed
      }

      // ---- Cooldown lockout ----
      if (now - lastTriggerAt.current < cooldownMs) return;

      // ---- Standard hysteresis with neutral band ----
      if (absZ <= neutralThresh) {
        state.current = 'NEUTRAL';
        armedDir.current = null;
        armedAt.current = 0;
        return;
      }

      // Arm if crossing arm threshold from neutral
      if (state.current === 'NEUTRAL' && absZ >= armThresh) {
        state.current = z <= -armThresh ? 'ARMED_DOWN' : 'ARMED_UP';
        armedDir.current = z <= -armThresh ? 'down' : 'up';
        armedAt.current = now;
        return;
      }

      // Dwell check while armed
      if (
        (state.current === 'ARMED_DOWN' && z <= -armThresh) ||
        (state.current === 'ARMED_UP' && z >= armThresh)
      ) {
        if (now - armedAt.current >= dwellMs) {
          state.current = 'TRIGGERED';
          lastTriggerAt.current = now;

          if (armedDir.current === 'down') onTiltDown();
          else onTiltUp();
        }
        return;
      }

      // If we drift away from threshold without dwelling, fall back to neutral band
      // and wait for a clean re-arm (handled at top).
    });

    Accelerometer.setUpdateInterval(interval);
    return () => sub?.remove();
  }, [
    enable,
    requireNeutralFirst,
    neutralThresh,
    neutralDwellMs,
    armThresh,
    dwellMs,
    cooldownMs,
    interval,
    onTiltDown,
    onTiltUp,
    playHapticOnReady,
  ]);

  // Reset gating when enabling/disabling the hook (e.g., ready phase)
  useEffect(() => {
    if (!enable) return;
    if (requireNeutralFirst) {
      state.current = 'WAIT_NEUTRAL';
      setNeutralReady(false);
      neutralSince.current = 0;
      armedDir.current = null;
      armedAt.current = 0;
    }
  }, [enable, requireNeutralFirst]);
}
