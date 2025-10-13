import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { animalData } from '../data/animalData';
import { Animal, GameState, NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';
import { getSessionStats } from '../services/gameSessionService';
import { buildDeck, markFirstShown, markItemSeen, maybeMigrateSeen } from '../utils/deckBuilder';

interface Props extends NavigationProps {}

function GuessAnimalScreen({ navigation }: Props) {
  const [gameState, setGameState] = useState<GameState>({
    currentAnimal: null,
    currentAnimalIndex: 0,
    isRevealed: false,
    animalsViewed: 0,
  });

  const [revealAnimation] = useState(new Animated.Value(0));
  const [crossfadeAnimation] = useState(new Animated.Value(1));
  const [cluesSectionAnimation] = useState(new Animated.Value(1));
  const [revealButtonAnimation] = useState(new Animated.Value(1));
  const [shuffledAnimals, setShuffledAnimals] = useState<Animal[]>([]);
  const [isMarking, setIsMarking] = useState(false);

  // Initialize game with session tracking to prevent repetition
  useEffect(() => {
    const initializeGame = async () => {
      if (__DEV__) {
        console.log('GuessAnimalScreen: Initializing game with session tracking');
      }

      const GAME_ID = 'guess_animal';

      // Convert animals to have string id for deck builder
      const animalsWithId = animalData.map((a, index) => ({
        ...a,
        id: `animal_${index}`,
      }));

      // Migrate existing users with corrupted "all seen" data
      const migrated = await maybeMigrateSeen(GAME_ID, animalsWithId.length);
      if (__DEV__ && migrated) {
        console.log('GuessAnimalScreen: Migrated - cleared old "seen all" data');
      }

      // Build deck with seeded randomization
      const deck = await buildDeck(GAME_ID, animalsWithId, {
        count: 200,
        ensureNewFirst: true,
      });

      // Mark first animal to prevent it from appearing first again
      if (deck.length > 0) {
        await markFirstShown(GAME_ID, deck[0].id);
      }

      setShuffledAnimals(deck);

      // Safely access first animal with bounds checking
      if (deck.length > 0) {
        setGameState(prev => ({
          ...prev,
          currentAnimal: deck[0],
          currentAnimalIndex: 0,
        }));

        // Log session stats in dev mode
        if (__DEV__) {
          const stats = await getSessionStats(GAME_ID);
          if (stats) {
            console.log(`Session stats: ${stats.usedCount}/${stats.totalCount} animals used (${stats.percentageUsed.toFixed(1)}%)`);
            console.log(`Days until reset: ${stats.daysUntilReset}`);
          }
          console.log('GuessAnimalScreen: First animal loaded:', deck[0]?.answer);
        }
      }
    };

    initializeGame();
  }, []);

  const handleReveal = async () => {
    if (__DEV__) {
      console.log('GuessAnimalScreen: Reveal button pressed');
    }

    try {
      // Enhanced haptic feedback for reveal moment
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

      // Add a subtle second vibration for the "reveal moment"
      setTimeout(async () => {
        try {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        } catch (error) {
          // Haptics error is non-critical, just log it
          if (__DEV__) {
            console.log('Haptics error on second vibration:', error);
          }
        }
      }, 150);
    } catch (error) {
      // Haptics error is non-critical, just log it
      if (__DEV__) {
        console.log('Haptics error on reveal:', error);
      }
    }

    // Start reveal animation
    Animated.spring(revealAnimation, {
      toValue: 1,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();

    setGameState(prev => ({
      ...prev,
      isRevealed: true,
    }));
  };

  const handleNextAnimal = async () => {
    // Guard against rapid taps
    if (isMarking) return;
    setIsMarking(true);

    try {
      if (__DEV__) {
        console.log('GuessAnimalScreen: Next animal button pressed');
      }

      // Mark current animal as seen BEFORE advancing
      if (gameState.currentAnimal) {
        await markItemSeen('guess_animal', gameState.currentAnimal.id);
        if (__DEV__) {
          console.log('GuessAnimalScreen: Marked as seen:', gameState.currentAnimal.answer);
        }
      }

      try {
        // Haptic feedback for next
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (error) {
        // Haptics error is non-critical, just log it
        if (__DEV__) {
          console.log('Haptics error on next:', error);
        }
      }

      const nextIndex = (gameState.currentAnimalIndex + 1) % shuffledAnimals.length;
      const nextAnimal = shuffledAnimals[nextIndex];

      // Safety check for valid animal
      if (!nextAnimal) {
        if (__DEV__) {
          console.error('GuessAnimalScreen: No next animal found at index', nextIndex);
        }
        return;
      }

    // Start crossfade out animation
    Animated.timing(crossfadeAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Update state during the fade
      revealAnimation.setValue(0);
      cluesSectionAnimation.setValue(0);
      revealButtonAnimation.setValue(0);

      setGameState(prev => ({
        ...prev,
        currentAnimal: nextAnimal,
        currentAnimalIndex: nextIndex,
        isRevealed: false,
        animalsViewed: prev.animalsViewed + 1,
      }));

      // Crossfade in animation
      Animated.timing(crossfadeAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        // Animate entire clues section sliding in from bottom
        Animated.timing(cluesSectionAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Show reveal button after clues finish animating
          Animated.timing(revealButtonAnimation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        });
      });
    });

      if (__DEV__) {
        console.log('GuessAnimalScreen: Next animal loaded:', nextAnimal?.answer);
      }
    } finally {
      setIsMarking(false);
    }
  };

  if (!gameState.currentAnimal) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading animals...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { currentAnimal, isRevealed } = gameState;

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Icon name="back-button" size={48} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guess the Animal</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Clues Section - Always Visible */}
        <Animated.View
          style={[
            styles.cluesSection,
            {
              opacity: cluesSectionAnimation,
              transform: [
                {
                  translateY: cluesSectionAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0],
                  }),
                },
              ],
            },
          ]}
        >
          {currentAnimal.clues.map((clue, index) => (
            <View key={index} style={styles.clueCard}>
              <View style={styles.clueNumberContainer}>
                <Text style={styles.clueNumber}>{index + 1}</Text>
              </View>
              <Text style={styles.clueText}>{clue}</Text>
            </View>
          ))}
        </Animated.View>

        {/* Reveal Section */}
        {!isRevealed ? (
          <Animated.View
            style={[
              styles.revealSection,
              {
                opacity: revealButtonAnimation,
                transform: [
                  {
                    scale: revealButtonAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity
              style={styles.revealButton}
              onPress={handleReveal}
              activeOpacity={0.8}
            >
              <Text style={styles.revealButtonText}>Reveal Answer</Text>
            </TouchableOpacity>
            <Text style={styles.revealHint}>
              Discuss your guesses,{'\n'}then reveal the answer!
            </Text>
          </Animated.View>
        ) : (
          <>
            <Animated.View
              style={[
                styles.answerSection,
                {
                  opacity: revealAnimation,
                  transform: [
                    {
                      scale: revealAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1],
                      }),
                    },
                  ],
                },
              ]}
            >
              {/* Animal Emoji and Name - Side by Side */}
              <View style={styles.animalContainer}>
                <Text style={styles.answerEmoji}>{currentAnimal.emoji}</Text>
                <Text style={styles.answerText}>{currentAnimal.answer}</Text>
              </View>

              {currentAnimal.funFacts && currentAnimal.funFacts.length > 0 && (
                <View style={styles.funFactsContainer}>
                  <Text style={styles.funFactText}>
                    {currentAnimal.funFacts
                      .sort(() => Math.random() - 0.5)
                      .slice(0, 2)
                      .map((fact) => fact.fact)
                      .join(' ')}
                  </Text>
                </View>
              )}
            </Animated.View>

            {/* Next Button - Outside answer card */}
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextAnimal}
              activeOpacity={0.8}
            >
              <Text style={styles.nextButtonText}>Next Animal</Text>
            </TouchableOpacity>
          </>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default React.memo(GuessAnimalScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pastel.cream,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: colors.pastel.cream,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  content: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  gameHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  gameTitle: {
    fontSize: 28,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.teal,
    textAlign: 'center',
  },
  gameSubtitle: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 8,
  },
  cluesSection: {
    marginBottom: 24,
    backgroundColor: colors.pastel.cream, // Same as screen background
    borderRadius: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar like timesheets app
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  cluesTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 16,
  },
  clueCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  clueNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.border.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  clueNumber: {
    fontSize: 18,
    fontFamily: fonts.inter.bold,
    color: colors.text.primary,
  },
  clueText: {
    flex: 1,
    fontSize: 18,
    fontFamily: fonts.inter.semiBold,
    color: colors.text.primary,
    lineHeight: 26,
  },
  revealSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  revealButton: {
    backgroundColor: colors.border.black,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 40,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: colors.border.black,
    width: '100%',
  },
  revealButtonText: {
    fontSize: 20,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
    textAlign: 'center',
  },
  revealHint: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  answerSection: {
    alignItems: 'center',
    backgroundColor: colors.pastel.cream, // Same as screen background
    borderRadius: 10,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  animalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  answerEmoji: {
    fontSize: 56, // CSS: .answer__emoji{ font-size:56px }
    marginRight: 16,
  },
  answerText: {
    fontSize: 28, // CSS: .answer__name{ font-size:28px; font-weight:800 }
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  funFactsContainer: {
    marginBottom: 16,
    width: '100%',
    alignSelf: 'stretch',
  },
  funFactText: {
    fontSize: 15,
    color: colors.text.primary,
    lineHeight: 22,
    textAlign: 'left',
  },
  nextButton: {
    backgroundColor: colors.border.black,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary.white,
    textAlign: 'center',
  },
});