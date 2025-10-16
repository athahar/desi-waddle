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
    image: require('../../assets/main-desi-charades.png'),
    route: 'PackList',
  },
  {
    id: 'guess-movie',
    title: 'Guess the Movie',
    image: require('../../assets/main-guess-the-movie.png'),
    route: 'GuessMoviePlay',
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
    paddingHorizontal: 16,
    paddingTop: 20,
    justifyContent: 'flex-start',
  },
  modesContainer: {
    gap: 28,
  },
  modeCard: {
    width: '100%',
    alignItems: 'center',
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
    height: 200,
  },
});
