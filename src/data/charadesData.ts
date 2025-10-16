// Charades game data and utilities
import { IconName } from '../components/Icon';
import bollywoodStarsItems from './charades/bollywoodStarsItems';
import iconicCharactersItems from './charades/iconicCharactersItems';
import bollywoodMoviesItems from './charades/bollywoodMoviesItems';
import comediansVillainsItems from './charades/comediansVillainsItems';
import cricketPlayersItems from './charades/cricketPlayersItems';
import famousMatchesItems from './charades/famousMatchesItems';
import adsMomentsItems from './charades/adsMomentsItems';
import desiStreetFoodItems from './charades/desiStreetFoodItems';
import indianLandmarksItems from './charades/indianLandmarksItems';
import indianBrandsItems from './charades/indianBrandsItems';

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
  | 'bollywood-stars'
  | 'iconic-characters'
  | 'song-dance'
  | 'comedians-villains'
  | 'cricket-players'
  | 'cricket-mania'
  | 'ads-moments'
  | 'desi-street-food'
  | 'indian-landmarks'
  | 'indian-brands';

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
    id: 'bollywood-stars',
    name: 'Bollywood Stars',
    icon: 'characters' as const,
    description: 'Act out famous Bollywood actors',
    color: 'transparent',
    items: bollywoodStarsItems,
  },
  {
    id: 'iconic-characters',
    name: 'Iconic Characters',
    icon: 'characters' as const,
    description: 'Act out memorable movie characters',
    color: 'transparent',
    items: iconicCharactersItems,
  },
  {
    id: 'song-dance',
    name: 'Movies & Masala',
    icon: 'actions' as const,
    description: 'Act out famous Bollywood movies',
    color: 'transparent',
    items: bollywoodMoviesItems,
  },
  {
    id: 'comedians-villains',
    name: 'Comedians & Villains',
    icon: 'characters' as const,
    description: 'Act out famous comedians and villains',
    color: 'transparent',
    items: comediansVillainsItems,
  },
  {
    id: 'cricket-players',
    name: 'Cricket Players',
    icon: 'sports' as const,
    description: 'Act out famous cricket players',
    color: 'transparent',
    items: cricketPlayersItems,
  },
  {
    id: 'cricket-mania',
    name: 'Cricket Mania',
    icon: 'sports' as const,
    description: 'Act out cricket shots, bowling styles, and fielding actions',
    color: 'transparent',
    items: famousMatchesItems,
  },
  {
    id: 'ads-moments',
    name: 'Ads & Moments',
    icon: 'actions' as const,
    description: 'Act out iconic TV ads and moments',
    color: 'transparent',
    items: adsMomentsItems,
  },
  {
    id: 'desi-street-food',
    name: 'Desi Street Food',
    icon: 'food' as const,
    description: 'Act out popular Indian street foods',
    color: 'transparent',
    items: desiStreetFoodItems,
  },
  {
    id: 'indian-landmarks',
    name: 'Indian Landmarks',
    icon: 'places' as const,
    description: 'Act out famous Indian landmarks',
    color: 'transparent',
    items: indianLandmarksItems,
  },
  {
    id: 'indian-brands',
    name: 'Indian Brands',
    icon: 'actions' as const,
    description: 'Act out famous Indian brands',
    color: 'transparent',
    items: indianBrandsItems,
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
