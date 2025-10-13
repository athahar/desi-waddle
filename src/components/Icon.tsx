import React from 'react';
import { Image, ImageStyle, StyleProp, Text } from 'react-native';

export type IconName =
  | 'animal'
  | 'flag'
  | 'question'
  | 'storybook'
  | 'back-button'
  | 'info-icon'
  | 'idea'
  | 'thinking'
  | 'family'
  | 'chat'
  | 'hand'
  | 'search'
  | 'theater'
  | 'home'
  | 'restaurant'
  | 'airport'
  | 'car'
  | 'nature'
  | 'actions'
  | 'animals'
  | 'characters'
  | 'emotions'
  | 'food'
  | 'instruments'
  | 'nature-icon'
  | 'objects'
  | 'places'
  | 'professions'
  | 'sports'
  | 'vehicles'
  | 'bulb'
  | 'star'
  | 'charades-hold'
  | 'charades-tilt-up'
  | 'charades-tilt-down';

interface IconProps {
  name: IconName;
  size?: number;
  style?: StyleProp<ImageStyle>;
  tintColor?: string;
}

const iconSources: Record<IconName, any> = {
  animal: require('../../assets/icons/animal-new.png'),
  flag: require('../../assets/icons/flag-new.png'),
  question: require('../../assets/icons/question-new.png'),
  storybook: require('../../assets/icons/storybook-new.png'),
  'back-button': require('../../assets/icons/back-button.png'),
  'info-icon': require('../../assets/icons/info-icon.png'),
  idea: require('../../assets/icons/idea.png'),
  thinking: require('../../assets/icons/thinking.png'),
  family: require('../../assets/icons/family.png'),
  chat: require('../../assets/icons/chat.png'),
  hand: null, // emoji icon
  search: require('../../assets/icons/treasure.png'),
  theater: require('../../assets/icons/theater-new.png'),
  home: require('../../assets/icons/home.png'),
  restaurant: require('../../assets/icons/restaurant.png'),
  airport: require('../../assets/icons/airport.png'),
  car: require('../../assets/icons/car.png'),
  nature: require('../../assets/icons/nature.png'),
  actions: require('../../assets/icons/actions.png'),
  animals: require('../../assets/icons/animals.png'),
  characters: require('../../assets/icons/characters.png'),
  emotions: require('../../assets/icons/emotions.png'),
  food: require('../../assets/icons/food.png'),
  instruments: require('../../assets/icons/instruments.png'),
  'nature-icon': require('../../assets/icons/nature-icon.png'),
  objects: require('../../assets/icons/objects.png'),
  places: require('../../assets/icons/places.png'),
  professions: require('../../assets/icons/professions.png'),
  sports: require('../../assets/icons/sports.png'),
  vehicles: require('../../assets/icons/vehicles.png'),
  bulb: require('../../assets/icons/bulb.png'),
  star: require('../../assets/icons/star.png'),
  'charades-hold': require('../../assets/icons/charades-hold.png'),
  'charades-tilt-up': require('../../assets/icons/charades-tilt-up.png'),
  'charades-tilt-down': require('../../assets/icons/charades-tilt-down.png'),
};

// Emoji icons for new games (fallback when PNG not available)
const emojiIcons: Record<IconName, string | null> = {
  animal: null,
  flag: null,
  question: null,
  storybook: null,
  'back-button': null,
  'info-icon': null,
  idea: null,
  thinking: null,
  family: null,
  chat: null,
  hand: '👆',
  search: null,
  theater: null,
  home: null,
  restaurant: null,
  airport: null,
  car: null,
  nature: null,
  actions: null,
  animals: null,
  characters: null,
  emotions: null,
  food: null,
  instruments: null,
  'nature-icon': null,
  objects: null,
  places: null,
  professions: null,
  sports: null,
  vehicles: null,
  bulb: null,
  star: null,
  'charades-hold': null,
  'charades-tilt-up': null,
  'charades-tilt-down': null,
};

export const Icon: React.FC<IconProps> = ({ name, size = 48, style, tintColor }) => {
  const emoji = emojiIcons[name];

  // If emoji icon, render as text
  if (emoji) {
    return (
      <Text style={[{ fontSize: size }, style]}>
        {emoji}
      </Text>
    );
  }

  // Otherwise render as image
  const imageStyle: any = {
    width: size,
    height: size,
  };

  if (tintColor) {
    imageStyle.tintColor = tintColor;
  }

  return (
    <Image
      source={iconSources[name]}
      style={[imageStyle, style]}
      resizeMode="contain"
    />
  );
};

export default Icon;
