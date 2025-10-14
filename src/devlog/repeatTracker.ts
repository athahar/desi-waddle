/**
 * Repeat Tracker
 *
 * Tracks card displays across sessions to detect duplicates within 30-day window.
 * Helps identify if the same cards are being shown too frequently.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameId, RepeatRecord } from './types';

const STORAGE_KEY = 'devlog_repeats_v1';
const REPEAT_WINDOW_DAYS = 30;
const REPEAT_WINDOW_MS = REPEAT_WINDOW_DAYS * 24 * 60 * 60 * 1000;

let repeatRecords: Map<string, RepeatRecord> = new Map();
let initialized = false;

/**
 * Initialize repeat tracker by loading from AsyncStorage
 */
export async function initializeRepeatTracker(): Promise<void> {
  if (initialized) return;

  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    if (stored) {
      const records: RepeatRecord[] = JSON.parse(stored);
      repeatRecords = new Map(records.map(r => [getRecordKey(r.game, r.cardId), r]));

      // Clean up old records outside 30-day window
      await cleanupOldRecords();

      if (__DEV__) {
        console.log(`[RepeatTracker] Initialized with ${repeatRecords.size} records`);
      }
    }
    initialized = true;
  } catch (error) {
    if (__DEV__) {
      console.error('[RepeatTracker] Failed to initialize:', error);
    }
    repeatRecords = new Map();
    initialized = true;
  }
}

/**
 * Record a card being shown
 * Returns repeat info if this card was shown before within 30-day window
 */
export async function recordCardShown(
  game: GameId,
  cardId: string,
  sessionId: string
): Promise<{
  isRepeat: boolean;
  firstSeenTs?: number;
  firstSeenSessionId?: string;
  daysSince?: number;
} | null> {
  if (!initialized) {
    await initializeRepeatTracker();
  }

  const now = Date.now();
  const key = getRecordKey(game, cardId);
  const existing = repeatRecords.get(key);

  if (existing) {
    // Card seen before within window
    const daysSince = (now - existing.firstSeenTs) / (24 * 60 * 60 * 1000);

    // Update record
    existing.lastSeenTs = now;
    existing.lastSeenSessionId = sessionId;
    existing.seenCount += 1;
    repeatRecords.set(key, existing);

    // Persist
    await persistRecords();

    return {
      isRepeat: true,
      firstSeenTs: existing.firstSeenTs,
      firstSeenSessionId: existing.firstSeenSessionId,
      daysSince,
    };
  } else {
    // First time seeing this card (or outside window)
    const record: RepeatRecord = {
      cardId,
      game,
      firstSeenTs: now,
      firstSeenSessionId: sessionId,
      lastSeenTs: now,
      lastSeenSessionId: sessionId,
      seenCount: 1,
    };
    repeatRecords.set(key, record);

    // Persist
    await persistRecords();

    return {
      isRepeat: false,
    };
  }
}

/**
 * Get all repeat records for a specific game
 */
export async function getRepeatRecordsForGame(game: GameId): Promise<RepeatRecord[]> {
  if (!initialized) {
    await initializeRepeatTracker();
  }

  return Array.from(repeatRecords.values()).filter(r => r.game === game);
}

/**
 * Get cards that have been repeated most frequently
 */
export async function getMostRepeatedCards(limit: number = 10): Promise<RepeatRecord[]> {
  if (!initialized) {
    await initializeRepeatTracker();
  }

  return Array.from(repeatRecords.values())
    .filter(r => r.seenCount > 1)
    .sort((a, b) => b.seenCount - a.seenCount)
    .slice(0, limit);
}

/**
 * Clear all repeat records
 */
export async function clearRepeatRecords(): Promise<void> {
  repeatRecords.clear();
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    if (__DEV__) {
      console.log('[RepeatTracker] Cleared all records');
    }
  } catch (error) {
    if (__DEV__) {
      console.error('[RepeatTracker] Failed to clear records:', error);
    }
  }
}

/**
 * Get statistics about repeat tracking
 */
export async function getRepeatStats(): Promise<{
  totalRecords: number;
  recordsByGame: Record<string, number>;
  cardsWithRepeats: number;
  avgSeenCount: number;
}> {
  if (!initialized) {
    await initializeRepeatTracker();
  }

  const records = Array.from(repeatRecords.values());
  const recordsByGame: Record<string, number> = {};

  records.forEach(record => {
    recordsByGame[record.game] = (recordsByGame[record.game] || 0) + 1;
  });

  const cardsWithRepeats = records.filter(r => r.seenCount > 1).length;
  const totalSeenCount = records.reduce((sum, r) => sum + r.seenCount, 0);
  const avgSeenCount = records.length > 0 ? totalSeenCount / records.length : 0;

  return {
    totalRecords: records.length,
    recordsByGame,
    cardsWithRepeats,
    avgSeenCount,
  };
}

// Helper functions

function getRecordKey(game: GameId, cardId: string): string {
  return `${game}:${cardId}`;
}

async function persistRecords(): Promise<void> {
  try {
    const records = Array.from(repeatRecords.values());
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (error) {
    if (__DEV__) {
      console.error('[RepeatTracker] Failed to persist records:', error);
    }
  }
}

async function cleanupOldRecords(): Promise<void> {
  const now = Date.now();
  const cutoff = now - REPEAT_WINDOW_MS;
  let cleanedCount = 0;

  for (const [key, record] of repeatRecords.entries()) {
    if (record.lastSeenTs < cutoff) {
      repeatRecords.delete(key);
      cleanedCount++;
    }
  }

  if (cleanedCount > 0) {
    await persistRecords();
    if (__DEV__) {
      console.log(`[RepeatTracker] Cleaned up ${cleanedCount} old records`);
    }
  }
}
