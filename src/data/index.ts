/**
 * Central data aggregator for all game packs
 *
 * Exports all charades and guess-movie packs with utility functions
 * for filtering, searching, and accessing pack data.
 */

import { Pack, CharadesPack, GuessMoviePack, isCharadesPack, isGuessMoviePack } from '../types/content';

// Import Charades packs
import bollywoodUniversePack from './packs/charades/bollywood-universe';
import streetFoodDrinksPack from './packs/charades/street-food-drinks';
import cricketFeverPack from './packs/charades/cricket-fever';

// Import Guess the Movie packs
import bollywoodDialoguesPack from './packs/guess-movie/bollywood-dialogues';

// ============================================
// ALL PACKS REGISTRY
// ============================================

/**
 * All available packs in the app
 */
export const ALL_PACKS: Pack[] = [
  // Charades packs
  bollywoodUniversePack,
  streetFoodDrinksPack,
  cricketFeverPack,

  // Guess the Movie packs
  bollywoodDialoguesPack,
];

// ============================================
// PACK FILTERING UTILITIES
// ============================================

/**
 * Get all charades packs
 */
export function getCharadesPacks(): CharadesPack[] {
  return ALL_PACKS.filter(isCharadesPack);
}

/**
 * Get all guess-movie packs
 */
export function getGuessMoviePacks(): GuessMoviePack[] {
  return ALL_PACKS.filter(isGuessMoviePack);
}

/**
 * Get packs by game type
 */
export function getPacksByGameType(gameType: 'charades' | 'guess-movie'): Pack[] {
  return ALL_PACKS.filter(pack => pack.gameType === gameType);
}

/**
 * Get only free packs
 */
export function getFreePacks(): Pack[] {
  return ALL_PACKS.filter(pack => !pack.is_paid);
}

/**
 * Get only paid packs
 */
export function getPaidPacks(): Pack[] {
  return ALL_PACKS.filter(pack => pack.is_paid);
}

// ============================================
// PACK LOOKUP UTILITIES
// ============================================

/**
 * Find a pack by ID
 */
export function getPackById(packId: string): Pack | undefined {
  return ALL_PACKS.find(pack => pack.id === packId);
}

/**
 * Find a pack by name (case-insensitive)
 */
export function getPackByName(name: string): Pack | undefined {
  const normalizedName = name.toLowerCase();
  return ALL_PACKS.find(pack => pack.name.toLowerCase() === normalizedName);
}

// ============================================
// PACK STATISTICS
// ============================================

/**
 * Get statistics about all packs
 */
export function getPackStatistics() {
  const charadesPacks = getCharadesPacks();
  const guessMoviePacks = getGuessMoviePacks();

  // Count total cards
  let totalCharadesCards = 0;
  let totalCharadesCategories = 0;

  charadesPacks.forEach(pack => {
    totalCharadesCategories += pack.categories.length;
    pack.categories.forEach(category => {
      totalCharadesCards += category.cards.length;
    });
  });

  let totalGuessMovieCards = 0;
  guessMoviePacks.forEach(pack => {
    totalGuessMovieCards += pack.cards.length;
  });

  return {
    totalPacks: ALL_PACKS.length,
    charadesPacks: charadesPacks.length,
    guessMoviePacks: guessMoviePacks.length,
    freePacks: getFreePacks().length,
    paidPacks: getPaidPacks().length,
    totalCharadesCards,
    totalCharadesCategories,
    totalGuessMovieCards,
    totalCards: totalCharadesCards + totalGuessMovieCards,
  };
}

/**
 * Get detailed breakdown of each pack
 */
export function getPackBreakdown() {
  return ALL_PACKS.map(pack => {
    if (isCharadesPack(pack)) {
      const totalCards = pack.categories.reduce((sum, cat) => sum + cat.cards.length, 0);
      return {
        id: pack.id,
        name: pack.name,
        gameType: pack.gameType,
        isPaid: pack.is_paid,
        categories: pack.categories.length,
        totalCards,
      };
    } else {
      return {
        id: pack.id,
        name: pack.name,
        gameType: pack.gameType,
        isPaid: pack.is_paid,
        categories: 0,
        totalCards: pack.cards.length,
      };
    }
  });
}

// ============================================
// EXPORTS
// ============================================

export {
  // Individual pack exports
  bollywoodUniversePack,
  streetFoodDrinksPack,
  cricketFeverPack,
  bollywoodDialoguesPack,
};

// Default export
export default ALL_PACKS;
