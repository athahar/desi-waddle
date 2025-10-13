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
import { getProgressiveCountries, getRandomClues, countryData } from '../data/countryData';
import { Country, CountryGameState, NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';
import { getSessionStats } from '../services/gameSessionService';
import { buildCountryDeck, markFirstShown, markItemSeen, maybeMigrateSeen } from '../utils/deckBuilder';

interface Props extends NavigationProps {}

function GuessCountryScreen({ navigation }: Props) {
  const [gameState, setGameState] = useState<CountryGameState>({
    currentCountry: null,
    currentCountryIndex: 0,
    isRevealed: false,
    countriesViewed: 0,
  });

  const [revealAnimation] = useState(new Animated.Value(0));
  const [crossfadeAnimation] = useState(new Animated.Value(1));
  const [clueAnimations] = useState([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
  ]);
  const [shuffledCountries, setShuffledCountries] = useState<Country[]>([]);
  const [currentClues, setCurrentClues] = useState<string[]>([]);
  const [isMarking, setIsMarking] = useState(false);

  // Initialize game with session tracking to prevent repetition
  useEffect(() => {
    const initializeGame = async () => {
      if (__DEV__) {
        console.log('GuessCountryScreen: Initializing game with deck builder');
      }

      const GAME_ID = 'guess_country';

      // Convert countries to have string/number id for deck builder
      const countriesWithId = countryData.map(c => ({
        ...c,
        id: c.id,
      }));

      // Migrate existing users with corrupted "all seen" data
      const migrated = await maybeMigrateSeen(GAME_ID, countriesWithId.length);
      if (__DEV__ && migrated) {
        console.log('GuessCountryScreen: Migrated - cleared old "seen all" data');
      }

      // Build deck with progressive difficulty (shuffles within each difficulty level!)
      const deck = await buildCountryDeck(GAME_ID, countriesWithId, {
        count: 195,
        startEase: 2, // Start with 2 easy countries, then interleave
      });

      // Mark first country to prevent it from appearing first again
      if (deck.length > 0) {
        await markFirstShown(GAME_ID, deck[0].id);
      }

      setShuffledCountries(deck);

      if (deck.length > 0) {
        const firstCountry = deck[0];
        const randomClues = getRandomClues(firstCountry.cluePool);

        setGameState({
          currentCountry: firstCountry,
          currentCountryIndex: 0,
          isRevealed: false,
          countriesViewed: 0,
        });
        setCurrentClues(randomClues);

        // Log session stats in dev mode
        if (__DEV__) {
          const stats = await getSessionStats(GAME_ID);
          if (stats) {
            console.log(`Session stats: ${stats.usedCount}/${stats.totalCount} countries used (${stats.percentageUsed.toFixed(1)}%)`);
            console.log(`Days until reset: ${stats.daysUntilReset}`);
          }
          console.log(`First country: ${firstCountry.answer}`);
        }
      }
    };

    initializeGame();
  }, []);

  const handleReveal = async () => {
    if (gameState.isRevealed) return;

    try {
      // Heavy haptic feedback for the reveal moment
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

      setGameState(prev => ({
        ...prev,
        isRevealed: true,
        countriesViewed: prev.countriesViewed + 1,
      }));

      // Animate the reveal
      Animated.spring(revealAnimation, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();

    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error:', error);
      }
    }
  };

  const handleNextCountry = async () => {
    // Guard against rapid taps
    if (isMarking) return;
    setIsMarking(true);

    try {
      // Mark current country as seen BEFORE advancing
      if (gameState.currentCountry) {
        await markItemSeen('guess_country', gameState.currentCountry.id);
        if (__DEV__) {
          console.log('GuessCountryScreen: Marked as seen:', gameState.currentCountry.answer);
        }
      }

      // Light haptic feedback for navigation
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

      const nextIndex = gameState.currentCountryIndex + 1;

      if (nextIndex < shuffledCountries.length) {
        // Start crossfade out animation
        Animated.timing(crossfadeAnimation, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          // Update state during the fade
          revealAnimation.setValue(0);
          clueAnimations.forEach(anim => anim.setValue(0));

          const nextCountry = shuffledCountries[nextIndex];
          const randomClues = getRandomClues(nextCountry.cluePool);

          setGameState({
            currentCountry: nextCountry,
            currentCountryIndex: nextIndex,
            isRevealed: false,
            countriesViewed: gameState.countriesViewed,
          });
          setCurrentClues(randomClues);

          // Crossfade in animation
          Animated.timing(crossfadeAnimation, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }).start(() => {
            // All clues animate together (no staggered delay)
            clueAnimations.forEach((anim) => {
              Animated.timing(anim, {
                toValue: 1,
                duration: 200,
                delay: 0, // All start at the same time
                useNativeDriver: true,
              }).start();
            });
          });
        });
      } else {
        // Game complete - could add celebration or restart logic
        if (__DEV__) {
          console.log('All countries viewed!');
        }
      }
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error:', error);
      }
    } finally {
      setIsMarking(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#4ECDC4'; // Teal
      case 'medium': return '#45B7D1'; // Blue
      case 'hard': return '#96CEB4'; // Green
      default: return '#4ECDC4';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '⭐ Easy';
      case 'medium': return '⭐⭐ Medium';
      case 'hard': return '⭐⭐⭐ Hard';
      default: return '';
    }
  };

  if (!gameState.currentCountry) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading countries...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { currentCountry, isRevealed, currentCountryIndex, countriesViewed } = gameState;
  const progress = `${currentCountryIndex + 1}/${shuffledCountries.length}`;

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
        <Text style={styles.headerTitle}>Guess the Country</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Clues Section */}
        <Animated.View
          style={[
            styles.cluesContainer,
            {
              opacity: crossfadeAnimation,
            },
          ]}
        >
          {currentClues.map((clue, index) => (
            <Animated.View
              key={index}
              style={[
                styles.clueItem,
                {
                  opacity: clueAnimations[index],
                  transform: [
                    {
                      translateY: clueAnimations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.clueNumberContainer}>
                <Text style={styles.clueNumber}>{index + 1}</Text>
              </View>
              <Text style={styles.clueText}>{clue}</Text>
            </Animated.View>
          ))}
        </Animated.View>

        {/* Reveal Section */}
        {!isRevealed ? (
          <View style={styles.revealSection}>
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
          </View>
        ) : (
          <>
            <Animated.View
              style={[
                styles.answerContainer,
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
              {/* Flag and Country Name - Side by Side */}
              <View style={styles.flagContainer}>
                <Text style={styles.flagEmoji}>{currentCountry.flag}</Text>
                <Text style={styles.countryName}>{currentCountry.answer}</Text>
              </View>

              {/* Fun Facts */}
              <View style={styles.funFactsContainer}>
                <View style={styles.factGrid}>
                  <View style={styles.factItem}>
                    <Text style={styles.factLabel}>Language:</Text>
                    <Text style={styles.factValue}>{currentCountry.funFact.language}</Text>
                  </View>

                  <View style={styles.factItem}>
                    <Text style={styles.factLabel}>Currency:</Text>
                    <Text style={styles.factValue}>{currentCountry.funFact.currency}</Text>
                  </View>

                  <View style={styles.factItem}>
                    <Text style={styles.factLabel}>Capital:</Text>
                    <Text style={styles.factValue}>{currentCountry.funFact.capital}</Text>
                  </View>

                  <View style={styles.factItem}>
                    <Text style={styles.factLabel}>Cool Fact:</Text>
                    <Text style={styles.factValue}>{currentCountry.funFact.uniqueFact}</Text>
                  </View>

                  <View style={styles.factItem}>
                    <Text style={styles.factLabel}>Culture:</Text>
                    <Text style={styles.factValue}>{currentCountry.funFact.cultural}</Text>
                  </View>

                  <View style={styles.factItem}>
                    <Text style={styles.factLabel}>Food:</Text>
                    <Text style={styles.factValue}>{currentCountry.funFact.food}</Text>
                  </View>
                </View>
              </View>
            </Animated.View>

            {/* Next Country Button - Outside answer card */}
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextCountry}
              activeOpacity={0.8}
            >
              <Text style={styles.nextButtonText}>
                {currentCountryIndex + 1 < shuffledCountries.length
                  ? 'Next Country'
                  : 'Great Job!'
                }
              </Text>
            </TouchableOpacity>
          </>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default React.memo(GuessCountryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pastel.lightBlue,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: colors.pastel.lightBlue,
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
    padding: 20,
    paddingBottom: 32,
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
  cluesContainer: {
    backgroundColor: colors.pastel.lightBlue, // Same as screen background
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
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
    marginBottom: 12,
    textAlign: 'center',
  },
  clueItem: {
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
    fontSize: 18,
    fontFamily: fonts.inter.semiBold,
    color: colors.text.primary,
    flex: 1,
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
  answerContainer: {
    backgroundColor: colors.pastel.lightBlue, // Same as screen background
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  flagEmoji: {
    fontSize: 56,
    marginRight: 16,
  },
  countryName: {
    fontSize: 32,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  funFactsContainer: {
    marginBottom: 16,
  },
  funFactsTitle: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'left',
    marginBottom: 12,
  },
  factGrid: {
    gap: 8,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  factLabel: {
    fontSize: 15,
    fontFamily: fonts.inter.semiBold,
    color: colors.text.primary,
    minWidth: 90,
  },
  factValue: {
    fontSize: 15,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    flex: 1,
    lineHeight: 22,
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
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
  },
});