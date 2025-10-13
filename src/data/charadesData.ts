// Charades game data and utilities
import { IconName } from '../components/Icon';
import animalsItems from './charades/animalsItems';
import foodsItems from './charades/foodsItems';
import placesItems from './charades/placesItems';
import charactersItems from './charades/charactersItems';
import emotionsItems from './charades/emotionsItems';
import sportsItems from './charades/sportsItems';
import professionsItems from './charades/professionsItems';
import actionsItems from './charades/actionsItems';
import vehiclesItems from './charades/vehiclesItems';
import instrumentsItems from './charades/instrumentsItems';
import natureItems from './charades/natureItems';
import householdItems from './charades/householdItems';

export interface CharadesItem {
  id: string;
  term: string;
  category: string;
  difficulty: number;
  ageBands: string[];
  alt?: string[];
  hints?: string[];
  locale?: string;
  tags?: string[];
}

export type CharadesCategoryId =
  | 'animals'
  | 'foods'
  | 'places'
  | 'characters'
  | 'emotions'
  | 'sports'
  | 'professions'
  | 'actions'
  | 'vehicles'
  | 'instruments'
  | 'nature'
  | 'household';

export interface CharadesCategory {
  id: CharadesCategoryId;
  name: string;
  icon: IconName;
  description: string;
  color: string;
  items: CharadesItem[];
}

// Category metadata
export const charadesCategories: CharadesCategory[] = [
  {
    id: 'actions',
    name: 'Actions',
    icon: 'actions' as const,
    description: 'Act out different activities',
    color: 'transparent',
    items: actionsItems,
  },
  {
    id: 'animals',
    name: 'Animals',
    icon: 'animals' as const,
    description: 'Act out different animals',
    color: 'transparent',
    items: animalsItems,
  },
  {
    id: 'characters',
    name: 'Characters',
    icon: 'characters' as const,
    description: 'Pretend to be movie characters',
    color: 'transparent',
    items: charactersItems,
  },
  {
    id: 'emotions',
    name: 'Emotions',
    icon: 'emotions' as const,
    description: 'Show different feelings',
    color: 'transparent',
    items: emotionsItems,
  },
  {
    id: 'foods',
    name: 'Food',
    icon: 'food' as const,
    description: 'Pretend to eat or cook foods',
    color: 'transparent',
    items: foodsItems,
  },
  {
    id: 'instruments',
    name: 'Instruments',
    icon: 'instruments' as const,
    description: 'Play imaginary instruments',
    color: 'transparent',
    items: instrumentsItems,
  },
  {
    id: 'nature',
    name: 'Nature',
    icon: 'nature-icon' as const,
    description: 'Act out weather and nature',
    color: 'transparent',
    items: natureItems,
  },
  {
    id: 'household',
    name: 'Objects',
    icon: 'objects' as const,
    description: 'Pretend to use household items',
    color: 'transparent',
    items: householdItems,
  },
  {
    id: 'places',
    name: 'Places',
    icon: 'places' as const,
    description: 'Act out famous landmarks',
    color: 'transparent',
    items: placesItems,
  },
  {
    id: 'professions',
    name: 'Professions',
    icon: 'professions' as const,
    description: 'Pretend to work different jobs',
    color: 'transparent',
    items: professionsItems,
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: 'sports' as const,
    description: 'Act out sports and activities',
    color: 'transparent',
    items: sportsItems,
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: 'vehicles' as const,
    description: 'Pretend to drive or ride vehicles',
    color: 'transparent',
    items: vehiclesItems,
  },
];

// Get all items from all categories
export const getAllCharadesItems = (): CharadesItem[] => {
  return charadesCategories.flatMap(cat => cat.items);
};

// Get items by category
export const getCharadesItemsByCategory = (categoryId: CharadesCategoryId): CharadesItem[] => {
  const category = charadesCategories.find(cat => cat.id === categoryId);
  return category ? category.items : [];
};

// Get items by difficulty
export const getCharadesItemsByDifficulty = (difficulty: number): CharadesItem[] => {
  return getAllCharadesItems().filter(item => item.difficulty === difficulty);
};

// Get items by age band
export const getCharadesItemsByAgeBand = (ageBand: string): CharadesItem[] => {
  return getAllCharadesItems().filter(item => item.ageBands.includes(ageBand));
};

// Fisher-Yates shuffle algorithm
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get random items (optionally filtered by category, difficulty, or age band)
export const getRandomCharadesItems = (options?: {
  count?: number;
  categories?: CharadesCategoryId[];
  difficulty?: number;
  ageBand?: string;
}): CharadesItem[] => {
  let items = getAllCharadesItems();

  // Apply filters
  if (options?.categories && options.categories.length > 0) {
    items = items.filter(item => options.categories!.includes(item.category as CharadesCategoryId));
  }

  if (options?.difficulty !== undefined) {
    items = items.filter(item => item.difficulty === options.difficulty);
  }

  if (options?.ageBand) {
    items = items.filter(item => item.ageBands.includes(options.ageBand!));
  }

  // Shuffle and take requested count
  const shuffled = shuffleArray(items);
  return options?.count ? shuffled.slice(0, options.count) : shuffled;
};

// Get category statistics
export const getCharadesStats = () => {
  const allItems = getAllCharadesItems();
  return {
    totalItems: allItems.length,
    totalCategories: charadesCategories.length,
    itemsByCategory: charadesCategories.map(cat => ({
      category: cat.name,
      count: cat.items.length,
    })),
    itemsByDifficulty: {
      easy: allItems.filter(item => item.difficulty === 1).length,
      medium: allItems.filter(item => item.difficulty === 2).length,
      hard: allItems.filter(item => item.difficulty === 3).length,
    },
  };
};

// Export all items for easy access
export const allCharadesItems = getAllCharadesItems();
