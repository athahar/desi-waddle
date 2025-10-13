import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

interface GameMode {
  id: 'charades' | 'guess-movie';
  title: string;
  description: string;
  icon: 'theater' | 'characters';
  route: string;
  color: string;
}

const gameModes: GameMode[] = [
  {
    id: 'charades',
    title: 'Charades',
    description: 'Act it out! Choose from themed packs like Bollywood, Cricket, and Street Food.',
    icon: 'theater',
    route: 'PackList',
    color: colors.pastel.lightPurple,
  },
  {
    id: 'guess-movie',
    title: 'Guess the Movie',
    description: 'Can you identify Bollywood movies from famous dialogues? 30-second rounds!',
    icon: 'characters',
    route: 'GuessMovieInstructions',
    color: colors.pastel.lightBlue,
  },
];

function GameModeScreen({ navigation }: Props) {
  const handleModePress = useCallback(async (mode: GameMode) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    if (__DEV__) {
      console.log(`Navigating to ${mode.title}`);
    }

    // Navigate based on game mode
    if (mode.id === 'charades') {
      navigation.navigate(mode.route as any, { gameType: 'charades' });
    } else {
      navigation.navigate(mode.route as any);
    }
  }, [navigation]);

  const renderGameModeCard = useCallback((mode: GameMode) => {
    return (
      <TouchableOpacity
        key={mode.id}
        style={styles.modeCard}
        onPress={() => handleModePress(mode)}
        activeOpacity={0.7}
      >
        <View style={styles.modeIconContainer}>
          <Icon name={mode.icon} size={80} />
        </View>
        <View style={styles.modeContent}>
          <Text style={styles.modeTitle}>{mode.title}</Text>
          <Text style={styles.modeDescription}>{mode.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }, [handleModePress]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Choose a Game</Text>
          <Text style={styles.subtitle}>Pick your party game mode</Text>
        </View>

        <View style={styles.modesContainer}>
          {gameModes.map(renderGameModeCard)}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(GameModeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 32,
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  modesContainer: {
    flex: 1,
    gap: 24,
  },
  modeCard: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    padding: 24,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6,
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6,
    borderBottomColor: colors.border.black,
    alignItems: 'center',
  },
  modeIconContainer: {
    marginBottom: 16,
  },
  modeContent: {
    alignItems: 'center',
  },
  modeTitle: {
    fontSize: 28,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  modeDescription: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
