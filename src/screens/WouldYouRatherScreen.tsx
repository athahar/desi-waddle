import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import {
  WouldYouRatherQuestion,
  evergreenQuestions,
  getQuestionsBySeason
} from '../data/wouldYouRatherData';
import { getCurrentSeason, mixSeasonalContent } from '../data/seasonalSystem';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';
import { getSessionStats } from '../services/gameSessionService';
import { buildDeck, markFirstShown, markItemSeen, maybeMigrateSeen } from '../utils/deckBuilder';

interface Props extends NavigationProps {}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

export default function WouldYouRatherScreen({ navigation }: Props) {
  const [questions, setQuestions] = useState<WouldYouRatherQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<1 | 2 | null>(null);
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMarking, setIsMarking] = useState(false);

  // Animation values
  const leftCardTranslateX = new Animated.Value(0);
  const rightCardTranslateX = new Animated.Value(0);
  const leftCardOpacity = new Animated.Value(1);
  const rightCardOpacity = new Animated.Value(1);

  // Initialize questions with seasonal content and session tracking
  useEffect(() => {
    const initializeQuestions = async () => {
      if (__DEV__) {
        console.log('WouldYouRatherScreen: Initializing questions with session tracking...');
      }

      const GAME_ID = 'would_you_rather';
      const currentSeason = getCurrentSeason();
      const seasonalQuestions = getQuestionsBySeason(currentSeason);
      const mixedQuestions = mixSeasonalContent(seasonalQuestions, evergreenQuestions);

      // Add string IDs to questions for deck builder
      const questionsWithId = mixedQuestions.map((q, index) => ({
        ...q,
        id: q.id || `question_${index}`,
      }));

      // Migrate existing users with corrupted "all seen" data
      const migrated = await maybeMigrateSeen(GAME_ID, questionsWithId.length);
      if (__DEV__ && migrated) {
        console.log('WouldYouRatherScreen: Migrated - cleared old "seen all" data');
      }

      // Build deck with seeded randomization
      const deck = await buildDeck(GAME_ID, questionsWithId, {
        count: mixedQuestions.length,
        ensureNewFirst: true,
      });

      // Mark first question to prevent it from appearing first again
      if (deck.length > 0) {
        await markFirstShown(GAME_ID, deck[0].id);
      }

      setQuestions(deck);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setShowDiscussion(false);

      if (__DEV__) {
        const stats = await getSessionStats(GAME_ID);
        if (stats) {
          console.log(`Session stats: ${stats.usedCount}/${stats.totalCount} questions used (${stats.percentageUsed.toFixed(1)}%)`);
          console.log(`Days until reset: ${stats.daysUntilReset}`);
        }
        console.log(`WouldYouRatherScreen: Loaded ${deck.length} questions for season ${currentSeason}`);
        if (deck.length > 0) {
          console.log(`First question: ${deck[0].option1} vs ${deck[0].option2}`);
        }
      }
    };

    initializeQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  // Dynamic text sizing based on text length
  const getDynamicFontSize = (text: string): number => {
    const length = text.length;
    if (length < 50) return 20;
    if (length < 100) return 18;
    return 16;
  };

  // Handle option selection with haptic feedback
  const handleOptionSelect = async (option: 1 | 2) => {
    if (isTransitioning || selectedOption) return;

    if (__DEV__) {
      console.log(`WouldYouRatherScreen: Option ${option} selected`);
    }

    // Haptic feedback
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    setSelectedOption(option);

    // Animate selection
    const selectedCardTranslate = option === 1 ? leftCardTranslateX : rightCardTranslateX;
    const unselectedCardOpacity = option === 1 ? rightCardOpacity : leftCardOpacity;

    Animated.parallel([
      Animated.spring(selectedCardTranslate, {
        toValue: option === 1 ? -20 : 20,
        useNativeDriver: true,
        tension: 100,
        friction: 7,
      }),
      Animated.timing(unselectedCardOpacity, {
        toValue: 0.3,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Show discussion prompts after animation
      setTimeout(() => {
        setShowDiscussion(true);
      }, 500);
    });
  };

  // Create pan responders for each card
  const createPanResponder = (option: 1 | 2) => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => !selectedOption && !isTransitioning,
      onPanResponderGrant: () => {
        // Touch started
      },
      onPanResponderMove: (evt, gestureState) => {
        if (selectedOption || isTransitioning) return;

        const { dx } = gestureState;
        const cardTranslate = option === 1 ? leftCardTranslateX : rightCardTranslateX;

        // Only allow swipe in the correct direction
        if ((option === 1 && dx < 0) || (option === 2 && dx > 0)) {
          cardTranslate.setValue(dx * 0.5);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (selectedOption || isTransitioning) return;

        const { dx } = gestureState;
        const cardTranslate = option === 1 ? leftCardTranslateX : rightCardTranslateX;

        // Check if swipe threshold is met
        const shouldSelect = Math.abs(dx) > SWIPE_THRESHOLD;

        if (shouldSelect && ((option === 1 && dx < 0) || (option === 2 && dx > 0))) {
          handleOptionSelect(option);
        } else {
          // Spring back to original position
          Animated.spring(cardTranslate, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 7,
          }).start();
        }
      },
    });
  };

  const leftPanResponder = createPanResponder(1);
  const rightPanResponder = createPanResponder(2);

  // Reset animations
  const resetAnimations = () => {
    leftCardTranslateX.setValue(0);
    rightCardTranslateX.setValue(0);
    leftCardOpacity.setValue(1);
    rightCardOpacity.setValue(1);
  };

  // Handle next question
  const handleNextQuestion = async () => {
    if (isTransitioning || isMarking) return;

    if (__DEV__) {
      console.log('WouldYouRatherScreen: Moving to next question');
    }

    setIsMarking(true);

    try {
      // Mark current question as seen BEFORE advancing
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion) {
        await markItemSeen('would_you_rather', currentQuestion.id);
        if (__DEV__) {
          console.log('WouldYouRatherScreen: Marked as seen:', currentQuestion.option1.substring(0, 30) + '...');
        }
      }

      // Light haptic feedback for navigation
      try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (error) {
        if (__DEV__) {
          console.log('Haptics error (non-critical):', error);
        }
      }

      setIsTransitioning(true);

    // Fade out current question
    Animated.timing(leftCardOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Move to next question
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Loop back to start with fresh mix
        const currentSeason = getCurrentSeason();
        const seasonalQuestions = getQuestionsBySeason(currentSeason);
        const mixedQuestions = mixSeasonalContent(seasonalQuestions, evergreenQuestions);
        setQuestions(mixedQuestions);
        setCurrentQuestionIndex(0);
      }

      // Reset state
      setSelectedOption(null);
      setShowDiscussion(false);
      resetAnimations();

      // Fade in new question
      Animated.timing(leftCardOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setIsTransitioning(false);
      });
    });
    } finally {
      setIsMarking(false);
    }
  };

  if (!currentQuestion) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading questions...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (showDiscussion) {
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
          <Text style={styles.headerTitle}>Would You Rather</Text>
        </View>

        <View style={styles.discussionContainer}>
          <Text style={styles.discussionTitle}>Great choice!!</Text>

          <View style={styles.selectedChoiceContainer}>
            <Text style={[
              styles.selectedChoice,
              { fontSize: getDynamicFontSize(
                selectedOption === 1 ? currentQuestion.option1 : currentQuestion.option2
              )}
            ]}>
              {selectedOption === 1 ? currentQuestion.option1 : currentQuestion.option2}
            </Text>
          </View>

          <View style={styles.promptsContainer}>
            <Text style={styles.promptsTitle}>Discuss...</Text>
            <View style={styles.promptsList}>
              <View style={styles.promptRow}>
                <Icon name="idea" size={28} style={styles.promptIcon} />
                <Text style={styles.promptItem}>Why did you choose this option?</Text>
              </View>
              <View style={styles.promptRow}>
                <Icon name="thinking" size={28} style={styles.promptIcon} />
                <Text style={styles.promptItem}>Was this choice difficult?</Text>
              </View>
              <View style={styles.promptRow}>
                <Icon name="family" size={28} style={styles.promptIcon} />
                <Text style={styles.promptItem}>What would others in your family choose?</Text>
              </View>
              <View style={styles.promptRow}>
                <Icon name="chat" size={28} style={styles.promptIcon} />
                <Text style={styles.promptItem}>Share your reasoning with everyone!</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
            disabled={isTransitioning}
          >
            <Text style={styles.nextButtonText}>Next Question</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

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
        <Text style={styles.headerTitle}>Would You Rather</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Animated.View
          style={[
            styles.optionCard,
            styles.topCard,
            {
              transform: [{ translateX: leftCardTranslateX }],
              opacity: leftCardOpacity,
            }
          ]}
          {...leftPanResponder.panHandlers}
        >
          <TouchableOpacity
            style={[
              styles.cardContent,
              selectedOption === 1 && styles.selectedCard
            ]}
            onPress={() => handleOptionSelect(1)}
            disabled={selectedOption !== null || isTransitioning}
          >
            <Text style={[
              styles.optionText,
              { fontSize: getDynamicFontSize(currentQuestion.option1) }
            ]}>
              {currentQuestion.option1}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.vsText}>-vs-</Text>

        <Animated.View
          style={[
            styles.optionCard,
            styles.bottomCard,
            {
              transform: [{ translateX: rightCardTranslateX }],
              opacity: rightCardOpacity,
            }
          ]}
          {...rightPanResponder.panHandlers}
        >
          <TouchableOpacity
            style={[
              styles.cardContent,
              selectedOption === 2 && styles.selectedCard
            ]}
            onPress={() => handleOptionSelect(2)}
            disabled={selectedOption !== null || isTransitioning}
          >
            <Text style={[
              styles.optionText,
              { fontSize: getDynamicFontSize(currentQuestion.option2) }
            ]}>
              {currentQuestion.option2}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pastel.lavender,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: colors.pastel.lavender,
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
  cardsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  optionCard: {
    marginVertical: 12,
  },
  topCard: {
    marginBottom: 12,
  },
  bottomCard: {
    marginTop: 12,
  },
  cardContent: {
    backgroundColor: colors.pastel.lavender, // Same as screen background
    borderRadius: 10,
    padding: 32,
    minHeight: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar like timesheets app
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  selectedCard: {
    backgroundColor: colors.pastel.lavender,
  },
  optionText: {
    color: colors.text.primary,
    fontFamily: fonts.inter.regular,
    textAlign: 'center',
    lineHeight: 28,
  },
  vsText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginVertical: 16,
  },
  discussionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
  },
  discussionTitle: {
    fontSize: 24,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 24,
  },
  selectedChoiceContainer: {
    backgroundColor: colors.pastel.lavender, // Same as screen background
    borderRadius: 10,
    padding: 24,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  selectedChoice: {
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 28,
  },
  promptsContainer: {
    backgroundColor: colors.pastel.lavender, // Same as screen background
    borderRadius: 10,
    padding: 24,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  promptsTitle: {
    fontSize: 22,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'left',
    marginBottom: 20,
  },
  promptsList: {
    gap: 16,
  },
  promptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  promptIcon: {
    flexShrink: 0,
  },
  promptItem: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    lineHeight: 24,
    flex: 1,
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