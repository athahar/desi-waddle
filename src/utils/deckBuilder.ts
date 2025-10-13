/**
 * Deck Builder Utility
 *
 * Provides seeded randomization and session-stable shuffling for game content.
 * Ensures variety across sessions while maintaining stability within a session.
 *
 * Features:
 * - Seeded PRNG for deterministic shuffling per session
 * - "First card" protection to prevent same opening card across sessions
 * - Progressive difficulty builder for countries (shuffle within difficulty, then interleave)
 * - 30-day cooldown integration (works with existing gameSessionService)
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Item = { id: number | string; difficulty?: Difficulty };

const STORAGE = {
  seenAt: (key: string) => `pw_wait_seen_${key}`,         // map: id -> ISO date
  lastFirst: (key: string) => `pw_wait_last_first_${key}`, // { id, at }
  sessionSeed: (key: string) => `pw_wait_seed_${key}`,     // string
};

export const DAYS_30 = 30 * 24 * 60 * 60 * 1000;

// ---- Seeded RNG + Shuffle ----

/**
 * Mulberry32 PRNG - fast, simple, good quality
 * Returns a function that generates deterministic pseudo-random numbers
 */
function mulberry32(seed: number) {
  return function () {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Simple string hash function for converting seed strings to numbers
 */
function hashString(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Fisher-Yates shuffle with seeded random number generator
 * Same seed = same shuffle order (session-stable)
 */
export function shuffleSeeded<T>(arr: T[], rand: () => number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- Cooldown Helpers ----

async function loadSeenMap(key: string): Promise<Record<string, string>> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE.seenAt(key));
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    if (__DEV__) {
      console.log('Error loading seen map:', error);
    }
    return {};
  }
}

async function saveSeenMap(key: string, m: Record<string, string>) {
  try {
    await AsyncStorage.setItem(STORAGE.seenAt(key), JSON.stringify(m));
  } catch (error) {
    if (__DEV__) {
      console.log('Error saving seen map:', error);
    }
  }
}

async function loadLastFirst(key: string): Promise<{ id: string; at: string } | null> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE.lastFirst(key));
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    if (__DEV__) {
      console.log('Error loading last first:', error);
    }
    return null;
  }
}

async function saveLastFirst(key: string, id: string) {
  try {
    await AsyncStorage.setItem(
      STORAGE.lastFirst(key),
      JSON.stringify({ id, at: new Date().toISOString() })
    );
  } catch (error) {
    if (__DEV__) {
      console.log('Error saving last first:', error);
    }
  }
}

function isWithinCooldown(iso: string, now = Date.now(), ms = DAYS_30) {
  return now - new Date(iso).getTime() < ms;
}

// ---- Session Seed Management ----

/**
 * Get or create a session-specific random number generator
 * Same session = same seed = same shuffle order
 */
export async function getSessionRand(gameKey: string): Promise<() => number> {
  try {
    let seed = await AsyncStorage.getItem(STORAGE.sessionSeed(gameKey));
    if (!seed) {
      seed = `${Math.random()}_${Date.now()}`;
      await AsyncStorage.setItem(STORAGE.sessionSeed(gameKey), seed);
    }
    const h = hashString(seed);
    return mulberry32(h);
  } catch (error) {
    if (__DEV__) {
      console.log('Error getting session rand:', error);
    }
    // Fallback to Math.random if AsyncStorage fails
    return Math.random;
  }
}

/**
 * Reset session seed to get new shuffle order next session
 */
export async function resetSessionSeed(gameKey: string) {
  try {
    await AsyncStorage.removeItem(STORAGE.sessionSeed(gameKey));
  } catch (error) {
    if (__DEV__) {
      console.log('Error resetting session seed:', error);
    }
  }
}

// ---- Generic Deck Builder ----

/**
 * Build a shuffled deck with cooldown filtering and first-card protection
 * Works for Animals, Would You Rather, and simple randomization
 */
export async function buildDeck<T extends Item>(
  gameKey: string,
  items: T[],
  {
    count,
    cooldownMs = DAYS_30,
    ensureNewFirst = true,
  }: { count: number; cooldownMs?: number; ensureNewFirst?: boolean }
): Promise<T[]> {
  const rand = await getSessionRand(gameKey);
  const seen = await loadSeenMap(gameKey);
  const lastFirst = await loadLastFirst(gameKey);

  // 1) Filter on cooldown
  const now = Date.now();
  let pool = items.filter(it => {
    const when = seen[String(it.id)];
    return !(when && isWithinCooldown(when, now, cooldownMs));
  });

  // If too small, relax the cooldown (allow all items)
  if (pool.length < count) {
    pool = items.slice();
  }

  // 2) Shuffle with session seed
  let deck = shuffleSeeded(pool, rand).slice(0, count);

  // 3) Protect the first card across sessions
  if (ensureNewFirst && lastFirst && deck.length > 1 && String(deck[0].id) === lastFirst.id) {
    // Swap first with a later item (random from positions 1-5)
    const idx = 1 + Math.floor(rand() * Math.min(5, deck.length - 1));
    [deck[0], deck[idx]] = [deck[idx], deck[0]];
  }

  return deck;
}

// ---- Country-Specific Progressive Builder ----

/**
 * Build a country deck with progressive difficulty (shuffle within each difficulty, then interleave)
 * Prevents "USA always first" by shuffling within difficulty levels
 */
export async function buildCountryDeck<T extends Item & { difficulty: Difficulty }>(
  gameKey: string,
  items: T[],
  {
    count = 20,
    startEase = 2,  // Start with 2 easy countries, then interleave
    cooldownMs = DAYS_30,
  }: { count?: number; startEase?: number; cooldownMs?: number } = {}
): Promise<T[]> {
  const rand = await getSessionRand(gameKey);
  const seen = await loadSeenMap(gameKey);
  const lastFirst = await loadLastFirst(gameKey);
  const now = Date.now();

  // Filter fresh items (not seen in cooldown window)
  const fresh = items.filter(it => {
    const when = seen[String(it.id)];
    return !(when && isWithinCooldown(when, now, cooldownMs));
  });
  const base = fresh.length >= count ? fresh : items;

  // Shuffle within each difficulty level (FIX: prevents USA always first!)
  const E = shuffleSeeded(base.filter(x => x.difficulty === 'easy'), rand);
  const M = shuffleSeeded(base.filter(x => x.difficulty === 'medium'), rand);
  const H = shuffleSeeded(base.filter(x => x.difficulty === 'hard'), rand);

  const out: T[] = [];

  // 1) Gentle ramp - start with N easy countries
  for (let i = 0; i < startEase && E[i]; i++) {
    out.push(E[i]);
  }

  // 2) Interleave remaining: easy, medium, hard, easy, medium, hard...
  const maxLen = Math.max(E.length - startEase, M.length, H.length);
  for (let i = 0; i < maxLen; i++) {
    if (E[i + startEase]) out.push(E[i + startEase]);
    if (M[i]) out.push(M[i]);
    if (H[i]) out.push(H[i]);
    if (out.length >= count) break;
  }

  // 3) Top up if needed (rare edge case)
  if (out.length < count) {
    const spill = shuffleSeeded(base, rand);
    for (const c of spill) {
      if (!out.find(o => o.id === c.id)) out.push(c);
      if (out.length >= count) break;
    }
  }

  // 4) Protect first card from repeating across sessions
  if (out.length > 1 && lastFirst && String(out[0].id) === lastFirst.id) {
    // Swap with one of the next 5 cards (stay in easy range if startEase >= 5)
    const swapIdx = 1 + Math.floor(rand() * Math.min(5, out.length - 1));
    [out[0], out[swapIdx]] = [out[swapIdx], out[0]];
  }

  return out.slice(0, count);
}

// ---- Persist Usage (call after showing items) ----

/**
 * Mark deck items as used with current timestamp
 * Integrates with 30-day cooldown system
 */
export async function markDeckUsed(gameKey: string, deck: { id: string | number }[]) {
  const seen = await loadSeenMap(gameKey);
  const nowIso = new Date().toISOString();
  for (const it of deck) {
    seen[String(it.id)] = nowIso;
  }
  await saveSeenMap(gameKey, seen);
}

/**
 * Mark the first card shown to prevent it from appearing first again
 */
export async function markFirstShown(gameKey: string, firstId: string | number) {
  await saveLastFirst(gameKey, String(firstId));
}

/**
 * Mark a single item as seen when user actually views it
 * Use this instead of markDeckUsed to prevent premature "all seen" state
 */
export async function markItemSeen(gameKey: string, itemId: string | number) {
  const seen = await loadSeenMap(gameKey);
  seen[String(itemId)] = new Date().toISOString();
  await saveSeenMap(gameKey, seen);
}

/**
 * Migration helper for existing users who have corrupted "all seen" data
 * If >90% of inventory is marked as seen, clear the seen map
 * This fixes the bug where markDeckUsed marked everything on load
 */
export async function maybeMigrateSeen(
  gameKey: string,
  totalCount: number
): Promise<boolean> {
  const seen = await loadSeenMap(gameKey);
  const seenCount = Object.keys(seen).length;

  // If >90% marked as seen, likely the old bug - clear it
  if (seenCount / totalCount > 0.9) {
    if (__DEV__) {
      console.log(`Migration: Clearing ${seenCount} corrupted seen records for ${gameKey}`);
    }
    await AsyncStorage.removeItem(STORAGE.seenAt(gameKey));
    return true; // Migrated
  }
  return false; // No migration needed
}

/**
 * Ensures enough unseen items remain before rebuilding a deck.
 * - Keeps items unseen for at least 30 days.
 * - Clears the oldest 50% if fewer than half remain unseen.
 *
 * This implements progressive deck refresh to prevent early repetition
 * while maintaining session continuity across app restarts.
 */
export async function refreshDeckIfNeeded<T extends { id: string | number }>(
  gameKey: string,
  allItems: T[]
): Promise<T[]> {
  const seen = await loadSeenMap(gameKey);
  const now = Date.now();

  // Step 1. Determine unseen items (never seen or expired)
  const unseen = allItems.filter(item => {
    const seenAt = seen[String(item.id)];
    return !seenAt || now - new Date(seenAt).getTime() > DAYS_30;
  });

  // Step 2. If less than half deck unseen → clear oldest 50%
  const halfCount = Math.floor(allItems.length / 2);
  if (unseen.length < halfCount) {
    const entries = Object.entries(seen)
      .sort(([, a], [, b]) => new Date(a).getTime() - new Date(b).getTime()); // oldest first
    const oldestToClear = entries.slice(0, Math.floor(entries.length / 2));
    for (const [id] of oldestToClear) {
      delete seen[id];
    }
    await saveSeenMap(gameKey, seen);

    if (__DEV__) {
      console.log(
        `[Deck Refresh] ${gameKey}: cleared ${oldestToClear.length} oldest items to restore freshness`
      );
    }
  }

  // Step 3. Return filtered unseen items (freshest pool)
  const updatedSeen = await loadSeenMap(gameKey);
  return allItems.filter(item => {
    const seenAt = updatedSeen[String(item.id)];
    return !seenAt || now - new Date(seenAt).getTime() > DAYS_30;
  });
}

/**
 * Get set of unseen item IDs (respecting 30-day cooldown)
 */
export async function getUnseenIds(
  gameKey: string,
  allItems: Item[]
): Promise<Set<string>> {
  const seen = await loadSeenMap(gameKey);
  const now = Date.now();

  return new Set(
    allItems
      .filter(item => {
        const when = seen[String(item.id)];
        return !when || !isWithinCooldown(when, now, DAYS_30);
      })
      .map(item => String(item.id))
  );
}
