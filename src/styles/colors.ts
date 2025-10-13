/**
 * Color System for Play While You Wait
 * Based on UX redesign with pastel palette and thick black borders
 */

export const colors = {
  // Pastel backgrounds for game cards
  pastel: {
    cream: '#FFF9E6',      // Animal game
    lightBlue: '#E0F7FA',  // Country game
    lavender: '#E8E4F3',   // Would You Rather
    lightPink: '#FCE4EC',  // Story Starter
    lightGreen: '#E8F5E9', // Simon Says
    lightOrange: '#FFF3E0',// Scavenger Hunt
    lightPurple: '#F3E5F5',// Charades
  },

  // Primary action colors
  primary: {
    teal: '#4ECDC4',       // Accent color
    blue: '#45B7D1',       // Secondary accent
    black: '#000000',      // Primary CTAs (Next buttons)
    white: '#FFFFFF',      // Text on dark backgrounds
  },

  // Text colors
  text: {
    primary: '#333333',    // Main text
    secondary: '#666666',  // Descriptions
    light: '#999999',      // Hints
  },

  // Background colors
  background: {
    app: '#F7F7F7',        // Main app background
    card: '#FFFFFF',       // Default card background
  },

  // Border colors
  border: {
    black: '#000000',      // Thick borders (4px)
    card: '#333333',       // Lighter card borders (not pure black)
    light: '#E0E0E0',      // Subtle dividers
  },

  // Button colors
  button: {
    reveal: '#FF6B6B',     // Reveal answer button
    next: '#000000',       // Next item buttons (changed from teal/blue)
    info: '#4ECDC4',       // Info button
  },

  // Clue number circles
  clue: {
    background: '#4ECDC4', // Teal circle
    text: '#FFFFFF',       // White text
    border: '#000000',     // Black border around circle
  },

  // Shadow colors - CSS equivalent: box-shadow: 0 2px 0 rgba(0,0,0,0.25)
  shadow: {
    default: 'rgba(0, 0, 0, 0.25)',
  },

  // Status colors
  success: '#4CAF50',  // Green for correct answers
  error: '#FF6B6B',    // Red for errors or time running out
};

export default colors;
