import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';

interface Props extends NavigationProps {}

interface GameMode {
  id: 'charades' | 'guess-movie';
  title: string;
  image: any;
  route: string;
}

const gameModes: GameMode[] = [
  {
    id: 'charades',
    title: 'Desi Charades',
    image: require('../../assets/DesiGames/main-Desi-Charades.png'),
    route: 'PackList',
  },
  {
    id: 'guess-movie',
    title: 'Guess the Movie',
    image: require('../../assets/DesiGames/main-Guess-the-Movie.png'),
    route: 'GuessMovieInstructions',
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
        activeOpacity={0.85}
      >
        <Image
          source={mode.image}
          style={styles.modeImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }, [handleModePress]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Desi Party Games</Text>
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
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  modesContainer: {
    gap: 32,
  },
  modeCard: {
    width: '100%',
    aspectRatio: 2.2,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  modeImage: {
    width: '100%',
    height: '100%',
  },
});
