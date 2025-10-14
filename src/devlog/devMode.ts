/**
 * Dev Mode State Management
 *
 * Zustand store for managing dev mode toggle and panel visibility.
 * Persists dev mode preference to AsyncStorage.
 */

import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevEvent } from './types';
import { getAllEvents, logEvent, initializeLogger } from './logger';
import { initializeRepeatTracker } from './repeatTracker';

const DEV_MODE_STORAGE_KEY = 'devmode_enabled_v1';

interface DevModeState {
  enabled: boolean;
  panelVisible: boolean;
  events: DevEvent[];
  initialized: boolean;

  // Actions
  setEnabled: (enabled: boolean) => Promise<void>;
  togglePanel: () => void;
  refreshEvents: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useDevModeStore = create<DevModeState>((set, get) => ({
  enabled: false,
  panelVisible: false,
  events: [],
  initialized: false,

  /**
   * Enable or disable dev mode
   */
  setEnabled: async (enabled: boolean) => {
    set({ enabled });

    // Persist to AsyncStorage
    try {
      await AsyncStorage.setItem(DEV_MODE_STORAGE_KEY, JSON.stringify(enabled));
      if (__DEV__) {
        console.log(`[DevMode] Dev mode ${enabled ? 'enabled' : 'disabled'}`);
      }

      // Initialize logging systems if enabling
      if (enabled) {
        await initializeLogger();
        await initializeRepeatTracker();

        // Log app start event
        const event: DevEvent = {
          ts: Date.now(),
          game: 'charades', // Default game for app-level events
          type: 'APP_START',
          sessionId: 'app-session',
          metadata: {
            devModeEnabled: true,
          },
        };
        await logEvent(event);

        // Refresh events
        await get().refreshEvents();
      }
    } catch (error) {
      if (__DEV__) {
        console.error('[DevMode] Failed to save dev mode preference:', error);
      }
    }
  },

  /**
   * Toggle panel visibility
   */
  togglePanel: () => {
    set((state) => ({ panelVisible: !state.panelVisible }));
  },

  /**
   * Refresh events from logger
   */
  refreshEvents: async () => {
    try {
      const events = await getAllEvents();
      set({ events });
    } catch (error) {
      if (__DEV__) {
        console.error('[DevMode] Failed to refresh events:', error);
      }
    }
  },

  /**
   * Initialize dev mode from AsyncStorage
   */
  initialize: async () => {
    if (get().initialized) return;

    try {
      const stored = await AsyncStorage.getItem(DEV_MODE_STORAGE_KEY);
      if (stored !== null) {
        const enabled = JSON.parse(stored);
        set({ enabled, initialized: true });

        if (enabled) {
          await initializeLogger();
          await initializeRepeatTracker();
          await get().refreshEvents();
        }

        if (__DEV__) {
          console.log(`[DevMode] Initialized with enabled=${enabled}`);
        }
      } else {
        set({ initialized: true });
      }
    } catch (error) {
      if (__DEV__) {
        console.error('[DevMode] Failed to initialize:', error);
      }
      set({ initialized: true });
    }
  },
}));

/**
 * Hook to check if dev mode is enabled (for use in components)
 */
export function useIsDevModeEnabled(): boolean {
  return useDevModeStore((state) => state.enabled);
}

/**
 * Hook to check if dev panel is visible
 */
export function useIsDevPanelVisible(): boolean {
  return useDevModeStore((state) => state.panelVisible);
}

/**
 * Hook to get current events
 */
export function useDevEvents(): DevEvent[] {
  return useDevModeStore((state) => state.events);
}
