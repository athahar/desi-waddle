// Type definitions for Wait, Let's Play! iOS app

export interface FunFact {
  category: string;
  fact: string;
  icon: string;
}

export interface Animal {
  id: number;
  image: string;
  clues: string[];
  answer: string;
  emoji: string;
  funFacts?: FunFact[];
}

export interface GameState {
  currentAnimal: Animal | null;
  currentAnimalIndex: number;
  isRevealed: boolean;
  animalsViewed: number;
}

// Country game types
export interface CountryFunFact {
  language: string;
  currency: string;
  capital: string;
  uniqueFact: string;
  cultural: string;
  food: string;
}

export interface Country {
  id: number;
  flag: string;
  clues?: string[];
  cluePool: string[];
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  funFact: CountryFunFact;
}

export interface CountryGameState {
  currentCountry: Country | null;
  currentCountryIndex: number;
  isRevealed: boolean;
  countriesViewed: number;
}

export interface NavigationProps {
  navigation: any; // React Navigation type
  route?: any;
}