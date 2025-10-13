/**
 * Content Type System for Desi Waddle
 *
 * Defines types for:
 * - Charades game (acting game with packs and categories)
 * - Guess the Movie game (dialogue recognition trivia)
 */

import { IconName } from '../components/Icon';

// ============================================
// CHARADES GAME TYPES
// ============================================

/**
 * A single charades card - what the player acts out
 */
export interface CharadeCard {
  id: string;
  text: string;  // What to act out (e.g., "Shah Rukh Khan", "Vada Pav")
}

/**
 * A category within a charades pack
 * Example: "90s & 2000s Movies" within "Bollywood Universe" pack
 */
export interface CharadesCategory {
  id: string;
  name: string;
  cards: CharadeCard[];
}

/**
 * A charades pack containing multiple categories
 * Example: "Bollywood Universe" with 5 categories
 */
export interface CharadesPack {
  id: string;
  name: string;
  description: string;
  is_paid: boolean;
  gameType: 'charades';
  icon?: IconName;
  categories: CharadesCategory[];
}

// ============================================
// GUESS THE MOVIE GAME TYPES
// ============================================

/**
 * A single dialogue card for "Guess the Movie" game
 */
export interface DialogueCard {
  id: string;
  dialogue: string;     // Famous Bollywood dialogue (e.g., "Mogambo khush hua!")
  answer: string;       // Movie name (e.g., "Mr. India")
  hint?: string;        // Optional hint (e.g., "Amrish Puri as villain")
  difficulty?: 'casual' | 'expert' | 'mixed';
}

/**
 * A guess-the-movie pack (flat structure, no categories)
 * Example: "Bollywood Dialogues" with 100+ dialogue cards
 */
export interface GuessMoviePack {
  id: string;
  name: string;
  description: string;
  is_paid: boolean;
  gameType: 'guess-movie';
  icon?: IconName;
  cards: DialogueCard[];
}

// ============================================
// UNION TYPES
// ============================================

/**
 * A pack can be either Charades or Guess the Movie
 */
export type Pack = CharadesPack | GuessMoviePack;

/**
 * Game type discriminator
 */
export type GameType = 'charades' | 'guess-movie';

/**
 * A card can be either a Charade or Dialogue card
 */
export type Card = CharadeCard | DialogueCard;

// ============================================
// TYPE GUARDS
// ============================================

/**
 * Check if a pack is a Charades pack
 */
export function isCharadesPack(pack: Pack): pack is CharadesPack {
  return pack.gameType === 'charades';
}

/**
 * Check if a pack is a Guess the Movie pack
 */
export function isGuessMoviePack(pack: Pack): pack is GuessMoviePack {
  return pack.gameType === 'guess-movie';
}

/**
 * Check if a card is a Charade card
 */
export function isCharadeCard(card: Card): card is CharadeCard {
  return 'text' in card && !('dialogue' in card);
}

/**
 * Check if a card is a Dialogue card
 */
export function isDialogueCard(card: Card): card is DialogueCard {
  return 'dialogue' in card && 'answer' in card;
}
