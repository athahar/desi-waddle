import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { useKeepAwake } from 'expo-keep-awake';
import { NavigationProps } from '../types/game';
import { DialogueCard } from '../types/content';
import { getGuessMoviePacks } from '../data';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import ProgressBar from '../components/ProgressBar';

interface Props extends NavigationProps {}

interface CardResult {
  dialogue: string;
  answer: string;
  correct: boolean;
  timeToReveal: number; // seconds until reveal button pressed
}

const ROUND_SECONDS = 30;
const QUICK_BONUS_THRESHOLD = 3; // Bonus if revealed in <3 seconds

function GuessMoviePlayScreen({ navigation }: Props) {
  useKeepAwake(); // Keep screen awake during gameplay

  // Load dialogue cards
  const cards = useMemo(() => {
    const packs = getGuessMoviePacks();
    if (packs.length === 0) return [];

    // For now, use the first pack (Bollywood Dialogues)
    const pack = packs[0];

    // Shuffle cards
    const shuffled = [...pack.cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<CardResult[]>([]);
  const [revealTime, setRevealTime] = useState<number | null>(null);

  const currentCard = cards[currentIndex];
  const isLastCard = currentIndex >= cards.length - 1;

  // Countdown timer
  useEffect(() => {
    if (revealed || !currentCard) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Auto-reveal when time runs out
          setRevealed(true);
          setRevealTime(ROUND_SECONDS);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, revealed, currentCard]);

  const handleReveal = useCallback(async () => {
    if (revealed) return;

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    const elapsed = ROUND_SECONDS - timeLeft;
    setRevealTime(elapsed);
    setRevealed(true);
  }, [revealed, timeLeft]);

  const handleCorrect = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    const result: CardResult = {
      dialogue: currentCard.dialogue,
      answer: currentCard.answer,
      correct: true,
      timeToReveal: revealTime || ROUND_SECONDS,
    };

    setResults([...results, result]);

    // Move to next card or finish
    if (isLastCard) {
      navigateToResults([...results, result]);
    } else {
      nextCard();
    }
  }, [currentCard, revealTime, results, isLastCard]);

  const handleSkip = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    const result: CardResult = {
      dialogue: currentCard.dialogue,
      answer: currentCard.answer,
      correct: false,
      timeToReveal: revealTime || ROUND_SECONDS,
    };

    setResults([...results, result]);

    // Move to next card or finish
    if (isLastCard) {
      navigateToResults([...results, result]);
    } else {
      nextCard();
    }
  }, [currentCard, revealTime, results, isLastCard]);

  const nextCard = useCallback(() => {
    setCurrentIndex(currentIndex + 1);
    setTimeLeft(ROUND_SECONDS);
    setRevealed(false);
    setRevealTime(null);
  }, [currentIndex]);

  const navigateToResults = useCallback((finalResults: CardResult[]) => {
    // Calculate score
    let score = 0;
    finalResults.forEach(result => {
      if (result.correct) {
        score += 1;
        // Bonus point for quick reveal
        if (result.timeToReveal < QUICK_BONUS_THRESHOLD) {
          score += 1;
        }
      }
    });

    navigation.navigate('GuessMovieResults', {
      results: finalResults,
      score,
      totalCards: cards.length,
    });
  }, [cards.length, navigation]);

  const handleFinish = useCallback(() => {
    Alert.alert(
      'Finish Game?',
      'Are you sure you want to end the game early?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Finish',
          onPress: () => navigateToResults(results),
        },
      ]
    );
  }, [results, navigateToResults]);

  if (!currentCard) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No dialogues available</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header with timer and progress */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinish}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>

          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{timeLeft}s</Text>
            <ProgressBar
              progress={(ROUND_SECONDS - timeLeft) / ROUND_SECONDS}
              color={timeLeft <= 5 ? colors.error : colors.primary.teal}
              height={6}
            />
          </View>

          <Text style={styles.counterText}>
            {currentIndex + 1}/{cards.length}
          </Text>
        </View>

        {/* Dialogue display */}
        <View style={styles.dialogueContainer}>
          <Text style={styles.dialogueLabel}>Dialogue:</Text>
          <Text style={styles.dialogueText}>"{currentCard.dialogue}"</Text>
        </View>

        {/* Reveal section */}
        {!revealed ? (
          <TouchableOpacity
            style={styles.revealButton}
            onPress={handleReveal}
            activeOpacity={0.8}
          >
            <Text style={styles.revealButtonText}>Reveal Answer</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.answerContainer}>
            <View style={styles.answerBox}>
              <Text style={styles.answerLabel}>Movie:</Text>
              <Text style={styles.answerText}>{currentCard.answer}</Text>
            </View>

            {currentCard.hint && (
              <View style={styles.hintBox}>
                <Text style={styles.hintLabel}>Hint:</Text>
                <Text style={styles.hintText}>{currentCard.hint}</Text>
              </View>
            )}

            {/* Action buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, styles.skipButton]}
                onPress={handleSkip}
                activeOpacity={0.8}
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.correctButton]}
                onPress={handleCorrect}
                activeOpacity={0.8}
              >
                <Text style={styles.correctButtonText}>Correct ✓</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default React.memo(GuessMoviePlayScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  finishButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.border.card,
  },
  finishButtonText: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
  },
  timerContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  timerText: {
    fontSize: 24,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  counterText: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  dialogueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dialogueLabel: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    marginBottom: 16,
  },
  dialogueText: {
    fontSize: 28,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 40,
  },
  revealButton: {
    backgroundColor: colors.primary.teal,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 32,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.border.black,
    marginTop: 32,
  },
  revealButtonText: {
    fontSize: 22,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  answerContainer: {
    marginTop: 32,
  },
  answerBox: {
    backgroundColor: colors.success,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.border.black,
  },
  answerLabel: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 24,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  hintBox: {
    backgroundColor: colors.pastel.lightBlue,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  hintLabel: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  hintText: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    lineHeight: 22,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.border.black,
  },
  skipButton: {
    backgroundColor: colors.border.card,
  },
  skipButtonText: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  correctButton: {
    backgroundColor: colors.primary.teal,
  },
  correctButtonText: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: colors.primary.teal,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 3,
    borderColor: colors.border.black,
  },
  backButtonText: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
});
