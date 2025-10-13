/**
 * Enhanced Deck Manager (Phase 4)
 *
 * Blends existing gameSessionService with advanced features:
 * - Seeded shuffle from deckBuilder
 * - 30-day cooldown logic
 * - 50% refresh rule: don't refresh deck until ≥50% of cards shown
 * - Session rotation with session IDs
 * - Pack-level tracking for dual-game architecture
 * - Event logging for Dev Console
 * - CSV export functionality
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { shuffleSeeded, getSessionRand, refreshDeckIfNeeded, markItemSeen } from '../utils/deckBuilder';

// ---- Types ----

export interface DeckItem {
  id: string;
  term: string;
  category?: string;
  difficulty?: number;
  ageBands?: string[];
}

export interface SessionState {
  sessionId: string;
  gameId: string; // e.g., "charades_bollywood-universe_90s-movies"
  packId: string; // e.g., "bollywood-universe"
  categoryId?: string; // e.g., "90s-movies"
  seed: string;
  createdAt: string; // ISO date
  cardsShown: string[]; // Card IDs shown in this session
  totalCardsInPack: number;
  events: SessionEvent[];
}

export interface SessionEvent {
  type: 'SESSION_START' | 'CARD_SHOWN' | 'CARD_SKIPPED' | 'SESSION_REFRESH' | 'SESSION_END';
  timestamp: string; // ISO date
  cardId?: string;
  metadata?: Record<string, any>;
}

export interface DevHistory {
  sessions: SessionState[];
  totalPlays: number;
  totalCardsShown: number;
}

// ---- Storage Keys ----

const STORAGE_PREFIX = '@deck_manager:';
const SESSION_KEY = (gameId: string) => `${STORAGE_PREFIX}session:${gameId}`;
const HISTORY_KEY = '@deck_manager:history';
const MAX_HISTORY_SESSIONS = 50; // Keep last 50 sessions for dev console
const MAX_EVENTS_PER_SESSION = 200; // Limit events to prevent memory issues

// ---- Constants ----

const REFRESH_THRESHOLD = 0.5; // 50% - don't refresh until half the deck is shown
const COOLDOWN_DAYS = 30;
const COOLDOWN_MS = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;

// ---- Session Management ----

/**
 * Generate a unique session ID
 */
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Load session state from storage
 */
async function loadSession(gameId: string): Promise<SessionState | null> {
  try {
    const key = SESSION_KEY(gameId);
    const data = await AsyncStorage.getItem(key);
    if (!data) return null;

    const session: SessionState = JSON.parse(data);

    // Check if session should be refreshed (30-day cooldown)
    const createdAt = new Date(session.createdAt);
    const now = new Date();
    const daysSinceCreated = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

    if (daysSinceCreated >= COOLDOWN_DAYS) {
      if (__DEV__) {
        console.log(`Session ${session.sessionId} expired (${daysSinceCreated} days old)`);
      }
      return null; // Will trigger new session
    }

    return session;
  } catch (error) {
    if (__DEV__) {
      console.error(`Error loading session for ${gameId}:`, error);
    }
    return null;
  }
}

/**
 * Save session state to storage
 */
async function saveSession(session: SessionState): Promise<void> {
  try {
    const key = SESSION_KEY(session.gameId);
    await AsyncStorage.setItem(key, JSON.stringify(session));
  } catch (error) {
    if (__DEV__) {
      console.error(`Error saving session for ${session.gameId}:`, error);
    }
  }
}

/**
 * Add event to session history (with limit)
 */
function addEvent(session: SessionState, event: Omit<SessionEvent, 'timestamp'>): void {
  const fullEvent: SessionEvent = {
    ...event,
    timestamp: new Date().toISOString(),
  };

  session.events.push(fullEvent);

  // Limit events to prevent memory bloat
  if (session.events.length > MAX_EVENTS_PER_SESSION) {
    session.events = session.events.slice(-MAX_EVENTS_PER_SESSION);
  }
}

/**
 * Save session to global history (for dev console)
 */
async function saveToHistory(session: SessionState): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(HISTORY_KEY);
    const history: DevHistory = data
      ? JSON.parse(data)
      : { sessions: [], totalPlays: 0, totalCardsShown: 0 };

    // Add session to history
    history.sessions.push(session);
    history.totalPlays += 1;
    history.totalCardsShown += session.cardsShown.length;

    // Limit history size
    if (history.sessions.length > MAX_HISTORY_SESSIONS) {
      history.sessions = history.sessions.slice(-MAX_HISTORY_SESSIONS);
    }

    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    if (__DEV__) {
      console.error('Error saving to history:', error);
    }
  }
}

// ---- Core Deck Manager Functions ----

/**
 * Start a new session (called when starting a game)
 */
export async function startNewSession(
  gameId: string,
  packId: string,
  categoryId: string | undefined,
  totalCardsInPack: number
): Promise<string> {
  const sessionId = generateSessionId();
  const seed = `${Math.random()}_${Date.now()}`;

  const session: SessionState = {
    sessionId,
    gameId,
    packId,
    categoryId,
    seed,
    createdAt: new Date().toISOString(),
    cardsShown: [],
    totalCardsInPack,
    events: [],
  };

  addEvent(session, {
    type: 'SESSION_START',
    metadata: { packId, categoryId, totalCards: totalCardsInPack },
  });

  await saveSession(session);

  if (__DEV__) {
    console.log(`Started new session: ${sessionId} for ${gameId}`);
  }

  return sessionId;
}

/**
 * Get the current session ID (or create new session if needed)
 */
export async function getSessionId(
  gameId: string,
  packId: string,
  categoryId: string | undefined,
  totalCardsInPack: number
): Promise<string> {
  const session = await loadSession(gameId);

  if (session) {
    return session.sessionId;
  }

  // No session exists, create new one
  return await startNewSession(gameId, packId, categoryId, totalCardsInPack);
}

/**
 * Get next card(s) with advanced logic:
 * - Uses refreshDeckIfNeeded from deckBuilder (50% rule + 30-day cooldown)
 * - Uses seeded shuffle for session stability
 * - Logs events for dev console
 */
export async function getNextCards(
  gameId: string,
  packId: string,
  categoryId: string | undefined,
  allCards: DeckItem[],
  count: number = 1
): Promise<DeckItem[]> {
  try {
    // Load or create session
    let session = await loadSession(gameId);

    if (!session) {
      const sessionId = await startNewSession(gameId, packId, categoryId, allCards.length);
      session = await loadSession(gameId);
      if (!session) {
        throw new Error('Failed to create session');
      }
    }

    // Use deckBuilder's refreshDeckIfNeeded (implements 50% rule + 30-day cooldown)
    const availableCards = await refreshDeckIfNeeded(gameId, allCards);

    if (__DEV__) {
      console.log(
        `Session ${session.sessionId}: ${availableCards.length}/${allCards.length} cards available after refresh check`
      );
    }

    // Get seeded random function for this session
    const rand = await getSessionRand(gameId);

    // Shuffle with session seed
    const shuffled = shuffleSeeded(availableCards, rand);

    // Take requested count
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    // Mark cards as shown (using deckBuilder's markItemSeen for 30-day tracking)
    for (const card of selected) {
      const deckCard = card as DeckItem;
      await markItemSeen(gameId, deckCard.id);

      // Track in session for dev console
      session.cardsShown.push(deckCard.id);
      addEvent(session, {
        type: 'CARD_SHOWN',
        cardId: deckCard.id,
        metadata: { term: deckCard.term, category: deckCard.category },
      });
    }

    await saveSession(session);

    return selected as DeckItem[];
  } catch (error) {
    if (__DEV__) {
      console.error(`Error getting next cards for ${gameId}:`, error);
    }
    // Fallback: return shuffled cards without tracking
    return allCards.slice(0, count);
  }
}

/**
 * Mark a card as skipped (for analytics/dev console)
 */
export async function markCardSkipped(gameId: string, cardId: string): Promise<void> {
  try {
    const session = await loadSession(gameId);
    if (!session) return;

    addEvent(session, {
      type: 'CARD_SKIPPED',
      cardId,
    });

    await saveSession(session);
  } catch (error) {
    if (__DEV__) {
      console.error('Error marking card as skipped:', error);
    }
  }
}

/**
 * End current session and save to history
 */
export async function endSession(gameId: string): Promise<void> {
  try {
    const session = await loadSession(gameId);
    if (!session) return;

    addEvent(session, {
      type: 'SESSION_END',
      metadata: { cardsShown: session.cardsShown.length },
    });

    await saveSession(session);
    await saveToHistory(session);

    if (__DEV__) {
      console.log(`Ended session ${session.sessionId}: ${session.cardsShown.length} cards shown`);
    }
  } catch (error) {
    if (__DEV__) {
      console.error('Error ending session:', error);
    }
  }
}

// ---- Dev Console Functions ----

/**
 * Get current session statistics
 */
export async function getCurrentSessionStats(gameId: string): Promise<{
  sessionId: string;
  seed: string;
  cardsShown: number;
  totalCards: number;
  percentageUsed: number;
  daysSinceCreated: number;
  daysUntilRefresh: number;
} | null> {
  try {
    const session = await loadSession(gameId);
    if (!session) return null;

    const createdAt = new Date(session.createdAt);
    const now = new Date();
    const daysSinceCreated = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));
    const daysUntilRefresh = COOLDOWN_DAYS - daysSinceCreated;

    return {
      sessionId: session.sessionId,
      seed: session.seed,
      cardsShown: session.cardsShown.length,
      totalCards: session.totalCardsInPack,
      percentageUsed: (session.cardsShown.length / session.totalCardsInPack) * 100,
      daysSinceCreated,
      daysUntilRefresh: Math.max(0, daysUntilRefresh),
    };
  } catch (error) {
    if (__DEV__) {
      console.error('Error getting session stats:', error);
    }
    return null;
  }
}

/**
 * Get event log for current session (for dev console)
 */
export async function getSessionEvents(gameId: string): Promise<SessionEvent[]> {
  try {
    const session = await loadSession(gameId);
    return session?.events || [];
  } catch (error) {
    if (__DEV__) {
      console.error('Error getting session events:', error);
    }
    return [];
  }
}

/**
 * Get full history (for dev console)
 */
export async function getDevHistory(): Promise<DevHistory> {
  try {
    const data = await AsyncStorage.getItem(HISTORY_KEY);
    return data
      ? JSON.parse(data)
      : { sessions: [], totalPlays: 0, totalCardsShown: 0 };
  } catch (error) {
    if (__DEV__) {
      console.error('Error getting dev history:', error);
    }
    return { sessions: [], totalPlays: 0, totalCardsShown: 0 };
  }
}

/**
 * Export history as CSV string (for dev console)
 */
export async function exportHistoryCsv(): Promise<string> {
  try {
    const history = await getDevHistory();

    // CSV header
    let csv = 'Session ID,Game ID,Pack ID,Category ID,Created At,Cards Shown,Total Cards,% Used,Events Count\n';

    // CSV rows
    for (const session of history.sessions) {
      const percentUsed = ((session.cardsShown.length / session.totalCardsInPack) * 100).toFixed(1);
      csv += `${session.sessionId},${session.gameId},${session.packId},${session.categoryId || 'all'},${session.createdAt},${session.cardsShown.length},${session.totalCardsInPack},${percentUsed}%,${session.events.length}\n`;
    }

    return csv;
  } catch (error) {
    if (__DEV__) {
      console.error('Error exporting CSV:', error);
    }
    return 'Error exporting CSV';
  }
}

/**
 * Reset current session (for dev console)
 */
export async function resetSession(gameId: string): Promise<void> {
  try {
    const key = SESSION_KEY(gameId);
    await AsyncStorage.removeItem(key);
    if (__DEV__) {
      console.log(`Reset session for ${gameId}`);
    }
  } catch (error) {
    if (__DEV__) {
      console.error('Error resetting session:', error);
    }
  }
}

/**
 * Clear all data (for dev console - use with caution!)
 */
export async function clearAllData(): Promise<void> {
  try {
    // Clear all session data
    const keys = await AsyncStorage.getAllKeys();
    const deckKeys = keys.filter((key) => key.startsWith(STORAGE_PREFIX));
    await AsyncStorage.multiRemove(deckKeys);

    // Clear history
    await AsyncStorage.removeItem(HISTORY_KEY);

    if (__DEV__) {
      console.log(`Cleared ${deckKeys.length} deck manager entries`);
    }
  } catch (error) {
    if (__DEV__) {
      console.error('Error clearing all data:', error);
    }
  }
}
