/**
 * Dev Mode Event Logging Types
 *
 * Comprehensive event schema for tracking game state, card displays,
 * session resets, and duplicate detection across all games.
 */

export type GameId =
  | "charades"
  | "guess-movie"
  | "guessAnimal"
  | "guessCountry"
  | "guessCelebrity"
  | "guessFlag"
  | "wouldYouRather"
  | "storyStarter"
  | "scavengerHunt"
  | "ispy"
  | "simonSays"
  | "trivia";

export type DevEventType =
  | "APP_START"
  | "SESSION_START"
  | "SESSION_RESET"
  | "DECK_BUILD"
  | "DECK_SHUFFLE"
  | "DECK_EXHAUSTED"
  | "CARD_SHOWN"
  | "CARD_PASSED"
  | "CARD_CORRECT"
  | "WARNING_DUPLICATE_WITHIN_SESSION"
  | "WARNING_DUPLICATE_CROSS_SESSION";

export interface DevEvent {
  ts: number;                    // Unix timestamp (ms)
  game: GameId;                  // Which game triggered the event
  type: DevEventType;            // Event type
  sessionId: string;             // Current play session ID (UUID)
  deckId?: string;               // Current deck ID (UUID) if applicable
  cardId?: string;               // Card/item identifier (e.g., "famous_places_eiffel_tower")
  cardTerm?: string;             // Human-readable term (e.g., "Eiffel Tower")
  deckSize?: number;             // Size of deck at event time
  cardIndex?: number;            // Index in current deck
  duplicateInfo?: {              // Present for WARNING events
    firstSeenTs: number;         // When this card was first shown
    firstSeenSessionId: string;  // Session where first shown
    daysSince: number;           // Days since first shown
  };
  metadata?: Record<string, any>; // Additional context per event type
}

export interface RepeatRecord {
  cardId: string;
  game: GameId;
  firstSeenTs: number;
  firstSeenSessionId: string;
  lastSeenTs: number;
  lastSeenSessionId: string;
  seenCount: number;
}

export interface DevModeState {
  enabled: boolean;
  panelVisible: boolean;
  events: DevEvent[];
  repeatRecords: RepeatRecord[];
}
