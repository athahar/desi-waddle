/**
 * Game Session Service
 *
 * Manages session state for all games to prevent item repetition.
 * Uses AsyncStorage for persistence across app restarts.
 * Auto-resets sessions after 30 days or when entire pool is exhausted.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

// Session data structure
export interface GameSession<T = any> {
  gameId: string;
  usedItemIds: string[];
  lastResetDate: string; // ISO date string
  totalItemsInPool: number;
  metadata?: Record<string, any>;
}

// Session storage keys
const STORAGE_PREFIX = '@game_session:';
const SESSION_RESET_DAYS = 30;

/**
 * Get session key for a specific game
 */
const getSessionKey = (gameId: string): string => {
  return `${STORAGE_PREFIX}${gameId}`;
};

/**
 * Load session from AsyncStorage
 */
export const loadSession = async <T = any>(
  gameId: string
): Promise<GameSession<T> | null> => {
  try {
    const key = getSessionKey(gameId);
    const data = await AsyncStorage.getItem(key);

    if (!data) {
      return null;
    }

    const session: GameSession<T> = JSON.parse(data);

    // Check if session should be reset (30 days old)
    const lastReset = new Date(session.lastResetDate);
    const now = new Date();
    const daysSinceReset = Math.floor((now.getTime() - lastReset.getTime()) / (1000 * 60 * 60 * 24));

    if (daysSinceReset >= SESSION_RESET_DAYS) {
      // Session expired, reset it
      if (__DEV__) {
        console.log(`Session for ${gameId} expired (${daysSinceReset} days old), resetting...`);
      }
      await resetSession(gameId);
      return null;
    }

    return session;
  } catch (error) {
    if (__DEV__) {
      console.error(`Error loading session for ${gameId}:`, error);
    }
    return null;
  }
};

/**
 * Save session to AsyncStorage
 */
export const saveSession = async <T = any>(
  session: GameSession<T>
): Promise<void> => {
  try {
    const key = getSessionKey(session.gameId);
    await AsyncStorage.setItem(key, JSON.stringify(session));
  } catch (error) {
    if (__DEV__) {
      console.error(`Error saving session for ${session.gameId}:`, error);
    }
  }
};

/**
 * Reset session (clear all used items)
 */
export const resetSession = async (gameId: string): Promise<void> => {
  try {
    const key = getSessionKey(gameId);
    await AsyncStorage.removeItem(key);
    if (__DEV__) {
      console.log(`Session reset for ${gameId}`);
    }
  } catch (error) {
    if (__DEV__) {
      console.error(`Error resetting session for ${gameId}:`, error);
    }
  }
};

/**
 * Initialize a new session
 */
export const createSession = async (
  gameId: string,
  totalItemsInPool: number,
  metadata?: Record<string, any>
): Promise<GameSession> => {
  const session: GameSession = {
    gameId,
    usedItemIds: [],
    lastResetDate: new Date().toISOString(),
    totalItemsInPool,
    metadata,
  };

  await saveSession(session);
  return session;
};

/**
 * Mark an item as used in the session
 */
export const markItemAsUsed = async (
  gameId: string,
  itemId: string
): Promise<void> => {
  try {
    let session = await loadSession(gameId);

    if (!session) {
      if (__DEV__) {
        console.warn(`No session found for ${gameId}, creating new session`);
      }
      // Can't create session without knowing total items, so just mark this item
      session = {
        gameId,
        usedItemIds: [itemId],
        lastResetDate: new Date().toISOString(),
        totalItemsInPool: 0, // Will be updated when getNextItems is called
      };
    } else {
      // Add item if not already used
      if (!session.usedItemIds.includes(itemId)) {
        session.usedItemIds.push(itemId);
      }
    }

    await saveSession(session);
  } catch (error) {
    if (__DEV__) {
      console.error(`Error marking item as used for ${gameId}:`, error);
    }
  }
};

/**
 * Check if an item has been used in the current session
 */
export const isItemUsed = async (
  gameId: string,
  itemId: string
): Promise<boolean> => {
  try {
    const session = await loadSession(gameId);
    return session ? session.usedItemIds.includes(itemId) : false;
  } catch (error) {
    if (__DEV__) {
      console.error(`Error checking if item used for ${gameId}:`, error);
    }
    return false;
  }
};

/**
 * Get unused items from a pool
 * Automatically resets session if all items have been used
 */
export const getUnusedItems = async <T extends { id: string | number }>(
  gameId: string,
  allItems: T[]
): Promise<T[]> => {
  try {
    let session = await loadSession(gameId);

    // Create new session if none exists
    if (!session) {
      session = await createSession(gameId, allItems.length);
    }

    // Update total items in pool if it changed
    if (session.totalItemsInPool !== allItems.length) {
      session.totalItemsInPool = allItems.length;
      await saveSession(session);
    }

    // Get unused items (convert ID to string for comparison)
    const unusedItems = allItems.filter(item => !session!.usedItemIds.includes(String(item.id)));

    // If all items have been used, reset the session
    if (unusedItems.length === 0) {
      if (__DEV__) {
        console.log(`All items used for ${gameId}, resetting session...`);
      }
      await resetSession(gameId);
      return allItems; // Return all items as fresh pool
    }

    return unusedItems;
  } catch (error) {
    if (__DEV__) {
      console.error(`Error getting unused items for ${gameId}:`, error);
    }
    return allItems; // Fallback to all items on error
  }
};

/**
 * Get next items for gameplay (randomized from unused pool)
 * Marks items as used and handles session management
 */
export const getNextItems = async <T extends { id: string | number }>(
  gameId: string,
  allItems: T[],
  count: number = 1,
  shuffleFn?: (items: T[]) => T[]
): Promise<T[]> => {
  try {
    // Get unused items
    const unusedItems = await getUnusedItems(gameId, allItems);

    // Shuffle if function provided, otherwise just slice
    const shuffled = shuffleFn ? shuffleFn(unusedItems) : unusedItems;

    // Take requested count
    const selectedItems = shuffled.slice(0, Math.min(count, shuffled.length));

    // Mark selected items as used (convert ID to string)
    for (const item of selectedItems) {
      await markItemAsUsed(gameId, String(item.id));
    }

    return selectedItems;
  } catch (error) {
    if (__DEV__) {
      console.error(`Error getting next items for ${gameId}:`, error);
    }
    // Fallback: return shuffled items without session tracking
    const shuffled = shuffleFn ? shuffleFn([...allItems]) : allItems;
    return shuffled.slice(0, count);
  }
};

/**
 * Get session statistics
 */
export const getSessionStats = async (gameId: string): Promise<{
  usedCount: number;
  totalCount: number;
  percentageUsed: number;
  daysSinceReset: number;
  daysUntilReset: number;
} | null> => {
  try {
    const session = await loadSession(gameId);

    if (!session) {
      return null;
    }

    const lastReset = new Date(session.lastResetDate);
    const now = new Date();
    const daysSinceReset = Math.floor((now.getTime() - lastReset.getTime()) / (1000 * 60 * 60 * 24));
    const daysUntilReset = SESSION_RESET_DAYS - daysSinceReset;

    return {
      usedCount: session.usedItemIds.length,
      totalCount: session.totalItemsInPool,
      percentageUsed: (session.usedItemIds.length / session.totalItemsInPool) * 100,
      daysSinceReset,
      daysUntilReset: Math.max(0, daysUntilReset),
    };
  } catch (error) {
    if (__DEV__) {
      console.error(`Error getting session stats for ${gameId}:`, error);
    }
    return null;
  }
};

/**
 * Clear all game sessions (useful for testing or user preference)
 */
export const clearAllSessions = async (): Promise<void> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const sessionKeys = keys.filter(key => key.startsWith(STORAGE_PREFIX));
    await AsyncStorage.multiRemove(sessionKeys);
    if (__DEV__) {
      console.log(`Cleared ${sessionKeys.length} game sessions`);
    }
  } catch (error) {
    if (__DEV__) {
      console.error('Error clearing all sessions:', error);
    }
  }
};

/**
 * Export/Import session data (for debugging or backup)
 */
export const exportSessions = async (): Promise<Record<string, GameSession>> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const sessionKeys = keys.filter(key => key.startsWith(STORAGE_PREFIX));
    const sessions: Record<string, GameSession> = {};

    for (const key of sessionKeys) {
      const data = await AsyncStorage.getItem(key);
      if (data) {
        const gameId = key.replace(STORAGE_PREFIX, '');
        sessions[gameId] = JSON.parse(data);
      }
    }

    return sessions;
  } catch (error) {
    if (__DEV__) {
      console.error('Error exporting sessions:', error);
    }
    return {};
  }
};

export const importSessions = async (sessions: Record<string, GameSession>): Promise<void> => {
  try {
    for (const [gameId, session] of Object.entries(sessions)) {
      await saveSession({ ...session, gameId });
    }
    if (__DEV__) {
      console.log(`Imported ${Object.keys(sessions).length} sessions`);
    }
  } catch (error) {
    if (__DEV__) {
      console.error('Error importing sessions:', error);
    }
  }
};
