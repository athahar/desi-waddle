/**
 * Dev Mode Event Logger
 *
 * Ring buffer implementation using AsyncStorage for persistent event logging.
 * Events are stored in a fixed-size circular buffer (500 events max).
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevEvent } from './types';

const STORAGE_KEY = 'devlog_events_v1';
const MAX_EVENTS = 500; // Ring buffer size (reduced from 2000 for initial implementation)

let inMemoryBuffer: DevEvent[] = [];
let initialized = false;

/**
 * Initialize the logger by loading events from AsyncStorage
 */
export async function initializeLogger(): Promise<void> {
  if (initialized) return;

  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    if (stored) {
      inMemoryBuffer = JSON.parse(stored);
      if (__DEV__) {
        console.log(`[DevLog] Initialized with ${inMemoryBuffer.length} stored events`);
      }
    }
    initialized = true;
  } catch (error) {
    if (__DEV__) {
      console.error('[DevLog] Failed to initialize logger:', error);
    }
    inMemoryBuffer = [];
    initialized = true;
  }
}

/**
 * Log a new event to the ring buffer
 */
export async function logEvent(event: DevEvent): Promise<void> {
  if (!initialized) {
    await initializeLogger();
  }

  // Add to in-memory buffer
  inMemoryBuffer.push(event);

  // Trim to max size (ring buffer behavior)
  if (inMemoryBuffer.length > MAX_EVENTS) {
    inMemoryBuffer = inMemoryBuffer.slice(-MAX_EVENTS);
  }

  // Persist to AsyncStorage (fire and forget for performance)
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(inMemoryBuffer)).catch((error) => {
    if (__DEV__) {
      console.error('[DevLog] Failed to persist events:', error);
    }
  });

  if (__DEV__) {
    console.log(`[DevLog] ${event.type} | ${event.game}${event.cardTerm ? ` | ${event.cardTerm}` : ''}`);
  }
}

/**
 * Get all events from the buffer
 */
export async function getAllEvents(): Promise<DevEvent[]> {
  if (!initialized) {
    await initializeLogger();
  }
  return [...inMemoryBuffer];
}

/**
 * Get events filtered by game
 */
export async function getEventsByGame(gameId: string): Promise<DevEvent[]> {
  const events = await getAllEvents();
  return events.filter(e => e.game === gameId);
}

/**
 * Get events filtered by type
 */
export async function getEventsByType(eventType: string): Promise<DevEvent[]> {
  const events = await getAllEvents();
  return events.filter(e => e.type === eventType);
}

/**
 * Get events for a specific session
 */
export async function getEventsBySession(sessionId: string): Promise<DevEvent[]> {
  const events = await getAllEvents();
  return events.filter(e => e.sessionId === sessionId);
}

/**
 * Get the most recent N events
 */
export async function getRecentEvents(count: number): Promise<DevEvent[]> {
  const events = await getAllEvents();
  return events.slice(-count);
}

/**
 * Clear all logged events
 */
export async function clearAllEvents(): Promise<void> {
  inMemoryBuffer = [];
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    if (__DEV__) {
      console.log('[DevLog] Cleared all events');
    }
  } catch (error) {
    if (__DEV__) {
      console.error('[DevLog] Failed to clear events:', error);
    }
  }
}

/**
 * Export events as JSON string for sharing
 */
export async function exportEventsAsJSON(): Promise<string> {
  const events = await getAllEvents();
  return JSON.stringify(events, null, 2);
}

/**
 * Get statistics about logged events
 */
export async function getEventStats(): Promise<{
  totalEvents: number;
  eventsByType: Record<string, number>;
  eventsByGame: Record<string, number>;
  oldestEventTs?: number;
  newestEventTs?: number;
}> {
  const events = await getAllEvents();

  const eventsByType: Record<string, number> = {};
  const eventsByGame: Record<string, number> = {};

  events.forEach(event => {
    eventsByType[event.type] = (eventsByType[event.type] || 0) + 1;
    eventsByGame[event.game] = (eventsByGame[event.game] || 0) + 1;
  });

  return {
    totalEvents: events.length,
    eventsByType,
    eventsByGame,
    oldestEventTs: events.length > 0 ? events[0].ts : undefined,
    newestEventTs: events.length > 0 ? events[events.length - 1].ts : undefined,
  };
}
