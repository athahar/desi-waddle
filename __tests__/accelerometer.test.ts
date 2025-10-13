// __tests__/accelerometer.test.ts
// Unit tests for accelerometer state machine logic

/**
 * Mock harness for testing accelerometer state machine
 * Simulates the core logic without requiring actual sensor hardware
 */
function mockUseAccelerometer(
  onDown: jest.Mock,
  onUp: jest.Mock,
  cfg?: {
    armThresh?: number;
    neutralThresh?: number;
    dwellMs?: number;
    cooldownMs?: number;
  }
) {
  const armThresh = cfg?.armThresh ?? 0.55;
  const neutralThresh = cfg?.neutralThresh ?? 0.25;
  const dwellMs = cfg?.dwellMs ?? 250;
  const cooldownMs = cfg?.cooldownMs ?? 800;

  let state: 'NEUTRAL' | 'ARMED_DOWN' | 'ARMED_UP' | 'TRIGGERED' = 'NEUTRAL';
  let armedDir: 'down' | 'up' | null = null;
  let armedAt = 0;
  let lastTriggerAt = 0;

  const step = (z: number, now: number) => {
    const absZ = Math.abs(z);

    // Cooldown lockout
    if (now - lastTriggerAt < cooldownMs) return;

    // Return to NEUTRAL?
    if (absZ <= neutralThresh) {
      state = 'NEUTRAL';
      armedDir = null;
      armedAt = 0;
      return;
    }

    // Arm if crossing arm threshold from neutral
    if (state === 'NEUTRAL' && absZ >= armThresh) {
      state = z <= -armThresh ? 'ARMED_DOWN' : 'ARMED_UP';
      armedDir = z <= -armThresh ? 'down' : 'up';
      armedAt = now;
      return;
    }

    // Dwell check while armed
    if (
      (state === 'ARMED_DOWN' && z <= -armThresh) ||
      (state === 'ARMED_UP' && z >= armThresh)
    ) {
      if (now - armedAt >= dwellMs) {
        state = 'TRIGGERED';
        lastTriggerAt = now;
        if (armedDir === 'down') onDown();
        else onUp();
      }
    }
  };

  return { step };
}

/**
 * Driver function to simulate a series of sensor readings over time
 */
function drive(
  samples: Array<{ z: number; dt: number }>,
  onDown: jest.Mock,
  onUp: jest.Mock,
  opts?: any
) {
  const { step } = mockUseAccelerometer(onDown, onUp, opts);
  let now = 0;

  for (const s of samples) {
    now += s.dt;
    step(s.z, now);
  }
}

describe('accelerometer state machine', () => {
  test('single fire when holding down tilt', () => {
    const onDown = jest.fn();
    const onUp = jest.fn();

    drive(
      [
        { z: 0.0, dt: 0 }, // neutral
        { z: -0.7, dt: 10 }, // arm down
        { z: -0.8, dt: 260 }, // dwell -> fire once
        { z: -0.8, dt: 1000 }, // keep holding: no more fires
      ],
      onDown,
      onUp
    );

    expect(onDown).toHaveBeenCalledTimes(1);
    expect(onUp).not.toHaveBeenCalled();
  });

  test('requires return to neutral before another trigger', () => {
    const onDown = jest.fn();
    const onUp = jest.fn();

    drive(
      [
        { z: -0.8, dt: 0 }, // start armed
        { z: -0.8, dt: 260 }, // fire once
        { z: -0.8, dt: 900 }, // still down, cooldown over but not neutral -> no fire
        { z: 0.0, dt: 20 }, // back to neutral
        { z: -0.8, dt: 20 }, // arm again
        { z: -0.8, dt: 260 }, // dwell -> second fire
      ],
      onDown,
      onUp
    );

    expect(onDown).toHaveBeenCalledTimes(2);
  });

  test('up tilt triggers pass, not correct', () => {
    const onDown = jest.fn();
    const onUp = jest.fn();

    drive(
      [
        { z: 0.0, dt: 0 }, // neutral
        { z: 0.7, dt: 10 }, // arm up
        { z: 0.8, dt: 300 }, // dwell -> fire
      ],
      onDown,
      onUp
    );

    expect(onUp).toHaveBeenCalledTimes(1);
    expect(onDown).toHaveBeenCalledTimes(0);
  });

  test('cooldown prevents rapid fire', () => {
    const onDown = jest.fn();
    const onUp = jest.fn();

    drive(
      [
        { z: -0.8, dt: 0 }, // arm
        { z: -0.8, dt: 260 }, // fire
        { z: 0.0, dt: 10 }, // neutral
        { z: -0.8, dt: 10 }, // arm again immediately
        { z: -0.8, dt: 260 }, // try to fire (but in cooldown)
      ],
      onDown,
      onUp,
      { cooldownMs: 800 }
    );

    // Should only fire once due to cooldown
    expect(onDown).toHaveBeenCalledTimes(1);
  });

  test('short tilt (less than dwell time) does not trigger', () => {
    const onDown = jest.fn();
    const onUp = jest.fn();

    drive(
      [
        { z: 0.0, dt: 0 }, // neutral
        { z: -0.8, dt: 10 }, // arm
        { z: -0.8, dt: 100 }, // hold but less than 250ms dwell
        { z: 0.0, dt: 10 }, // back to neutral
      ],
      onDown,
      onUp,
      { dwellMs: 250 }
    );

    expect(onDown).not.toHaveBeenCalled();
    expect(onUp).not.toHaveBeenCalled();
  });

  test('hysteresis prevents trigger at border', () => {
    const onDown = jest.fn();
    const onUp = jest.fn();

    drive(
      [
        { z: 0.0, dt: 0 }, // neutral
        { z: -0.4, dt: 10 }, // below arm threshold (0.55)
        { z: -0.4, dt: 300 }, // hold below threshold
      ],
      onDown,
      onUp
    );

    expect(onDown).not.toHaveBeenCalled();
  });

  test('alternating tilts work correctly', () => {
    const onDown = jest.fn();
    const onUp = jest.fn();

    drive(
      [
        { z: -0.8, dt: 0 }, // arm down
        { z: -0.8, dt: 260 }, // fire down
        { z: 0.0, dt: 900 }, // neutral (cooldown passed)
        { z: 0.8, dt: 20 }, // arm up
        { z: 0.8, dt: 260 }, // fire up
        { z: 0.0, dt: 900 }, // neutral
        { z: -0.8, dt: 20 }, // arm down again
        { z: -0.8, dt: 260 }, // fire down again
      ],
      onDown,
      onUp
    );

    expect(onDown).toHaveBeenCalledTimes(2);
    expect(onUp).toHaveBeenCalledTimes(1);
  });
});
