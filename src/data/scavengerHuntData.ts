// Scavenger Hunt Data for 5 Location Modes
// 320 total items across all modes
// Family-friendly, contextual to different waiting situations

export interface ScavengerHuntItem {
  id: number;
  description: string;
  difficulty: 'easy' | 'medium';
  category?: string;
  hint?: string;
  mode: ScavengerHuntMode;
}

export type ScavengerHuntMode = 'home' | 'restaurant' | 'airport' | 'roadtrip' | 'nature';

// Import items from separate files for better organization
import { homeItems } from './scavengerHunt/homeItems';
import { restaurantItems } from './scavengerHunt/restaurantItems';
import { airportItems } from './scavengerHunt/airportItems';
import { roadtripItems } from './scavengerHunt/roadtripItems';
import { natureItems } from './scavengerHunt/natureItems';

// Export all items
export { homeItems, restaurantItems, airportItems, roadtripItems, natureItems };

// Get items by mode
export const getItemsByMode = (mode: ScavengerHuntMode): ScavengerHuntItem[] => {
  switch (mode) {
    case 'home':
      return homeItems;
    case 'restaurant':
      return restaurantItems;
    case 'airport':
      return airportItems;
    case 'roadtrip':
      return roadtripItems;
    case 'nature':
      return natureItems;
    default:
      return [];
  }
};

// Get random shuffled items for a mode
export const getRandomScavengerHuntItems = (
  mode: ScavengerHuntMode,
  count: number = 20
): ScavengerHuntItem[] => {
  const items = getItemsByMode(mode);

  // Fisher-Yates shuffle
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Get counts per mode
export const getScavengerHuntCounts = () => {
  return {
    home: homeItems.length,
    restaurant: restaurantItems.length,
    airport: airportItems.length,
    roadtrip: roadtripItems.length,
    nature: natureItems.length,
    total: homeItems.length + restaurantItems.length + airportItems.length +
           roadtripItems.length + natureItems.length
  };
};

// Mode metadata for UI
export const scavengerHuntModes = [
  {
    id: 'home' as const,
    name: 'Home',
    icon: 'home' as const,
    description: 'Find items around the house',
    color: 'transparent'
  },
  {
    id: 'restaurant' as const,
    name: 'Restaurant',
    icon: 'restaurant' as const,
    description: 'Spot items at restaurants',
    color: 'transparent'
  },
  {
    id: 'airport' as const,
    name: 'Airport',
    icon: 'airport' as const,
    description: 'Hunt for airport items',
    color: 'transparent'
  },
  {
    id: 'roadtrip' as const,
    name: 'Road Trip',
    icon: 'car' as const,
    description: 'Find things on the road',
    color: 'transparent'
  },
  {
    id: 'nature' as const,
    name: 'Nature',
    icon: 'nature' as const,
    description: 'Discover nature items',
    color: 'transparent'
  }
];
