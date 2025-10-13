export type SeasonType = 'newYear' | 'winter' | 'spring' | 'summerStart' |
                         'summer' | 'schoolStart' | 'fall' | 'halloween' | 'standard';

export interface SeasonalTheme {
  id: SeasonType;
  name: string;
  emoji: string;
  months: number[];
  description: string;
}

export const seasonalThemes: SeasonalTheme[] = [
  {
    id: 'newYear',
    name: 'New Year',
    emoji: '🎆',
    months: [0], // January
    description: 'Fresh starts and new beginnings'
  },
  {
    id: 'winter',
    name: 'Winter',
    emoji: '❄️',
    months: [1, 11], // February, December
    description: 'Snow, warmth, and cozy moments'
  },
  {
    id: 'spring',
    name: 'Spring',
    emoji: '🌸',
    months: [2, 3, 4], // March, April, May
    description: 'Growth, renewal, and outdoor adventures'
  },
  {
    id: 'summerStart',
    name: 'Summer Break',
    emoji: '🏫',
    months: [5], // June
    description: 'School ends and summer fun begins'
  },
  {
    id: 'summer',
    name: 'Summer',
    emoji: '☀️',
    months: [6, 7], // July, August
    description: 'Hot days, swimming, and outdoor fun'
  },
  {
    id: 'schoolStart',
    name: 'Back to School',
    emoji: '📚',
    months: [8], // September
    description: 'New school year adventures'
  },
  {
    id: 'fall',
    name: 'Fall',
    emoji: '🍂',
    months: [9], // October
    description: 'Autumn leaves and harvest time'
  },
  {
    id: 'halloween',
    name: 'Halloween',
    emoji: '🎃',
    months: [10], // November
    description: 'Friendly spooky fun and costumes'
  }
];

export const getCurrentSeason = (): SeasonType => {
  if (__DEV__) {
    console.log('Detecting current season...');
  }

  const currentMonth = new Date().getMonth(); // 0-11

  const currentSeason = seasonalThemes.find(theme =>
    theme.months.includes(currentMonth)
  );

  const season = currentSeason?.id || 'standard';

  if (__DEV__) {
    console.log(`Current month: ${currentMonth}, detected season: ${season}`);
  }

  return season;
};

export const getSeasonalTheme = (season?: SeasonType): SeasonalTheme | null => {
  const targetSeason = season || getCurrentSeason();
  return seasonalThemes.find(theme => theme.id === targetSeason) || null;
};

// Content mixing utility - 70% seasonal, 30% evergreen
export const mixSeasonalContent = <T>(
  seasonalContent: T[],
  evergreenContent: T[],
  seasonalRatio: number = 0.7
): T[] => {
  if (seasonalContent.length === 0) {
    return shuffleArray([...evergreenContent]);
  }

  const totalItems = Math.min(20, seasonalContent.length + evergreenContent.length);
  const seasonalCount = Math.floor(totalItems * seasonalRatio);
  const evergreenCount = totalItems - seasonalCount;

  const selectedSeasonal = shuffleArray([...seasonalContent]).slice(0, seasonalCount);
  const selectedEvergreen = shuffleArray([...evergreenContent]).slice(0, evergreenCount);

  return shuffleArray([...selectedSeasonal, ...selectedEvergreen]);
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