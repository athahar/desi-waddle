import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { useKeepAwake } from 'expo-keep-awake';
import { NavigationProps } from '../types/game';
import { DialogueCard } from '../types/content';
import { getGuessMoviePacks } from '../data';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import { getNextCards, getSessionId, DeckItem } from '../core/deckManager';
import { logEvent } from '../devlog/logger';
import {
  trackGuessMovieStarted,
  trackGuessMovieCompleted,
  trackGuessMovieAbandoned,
} from '../services/analytics';

interface Props extends NavigationProps {}

interface CardResult {
  dialogue: string;
  answer: string;
  correct: boolean;
}

function GuessMoviePlayScreen({ navigation }: Props) {
  useKeepAwake();

  const [cards, setCards] = useState<DialogueCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionId, setSessionId] = useState<string>('');
  const [packId, setPackId] = useState<string>('');
  const [gameStartTime, setGameStartTime] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<CardResult[]>([]);

  const currentCard = cards[currentIndex];
  const isLastCard = currentIndex >= cards.length - 1;

  useEffect(() => {
    const loadCards = async () => {
      const packs = getGuessMoviePacks();
      if (packs.length === 0) {
        setCards([]);
        setIsLoading(false);
        return;
      }

      const pack = packs[0];
      const gameId = `guess-movie_${pack.id}`;

      const deckItems: DeckItem[] = pack.cards.map(card => ({
        id: card.id,
        term: card.dialogue,
        category: 'dialogue',
        difficulty: 1,
        ageBands: ['all'],
      }));

      const currentSessionId = await getSessionId(gameId, pack.id, undefined, deckItems.length);
      setSessionId(currentSessionId);

      const nextCards = await getNextCards(
        gameId,
        pack.id,
        undefined,
        deckItems,
        deckItems.length
      );

      const loadedCards = nextCards.map(item => {
        const originalCard = pack.cards.find(c => c.id === item.id);
        return originalCard!;
      }).filter(Boolean);

      setCards(loadedCards);
      setPackId(pack.id);
      setIsLoading(false);

      // Track game start time and analytics
      const startTime = Date.now();
      setGameStartTime(startTime);
      await trackGuessMovieStarted(pack.id);

      if (__DEV__) {
        console.log(`Session ${currentSessionId}: Loaded ${loadedCards.length} dialogue cards`);
      }

      await logEvent({
        ts: Date.now(),
        type: 'SESSION_START',
        game: 'guess-movie',
        sessionId: currentSessionId,
        metadata: {
          packId: pack.id,
        },
      });
    };

    loadCards();
  }, []);

  const navigateToResults = useCallback((finalResults: CardResult[]) => {
    const score = finalResults.filter(r => r.correct).length;

    // Track game completed
    const durationSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
    trackGuessMovieCompleted(packId, score, cards.length, durationSeconds);

    navigation.navigate('GuessMovieResults', {
      results: finalResults,
      score,
      totalCards: cards.length,
    });
  }, [cards.length, navigation, packId, gameStartTime]);

  const nextCard = useCallback(() => {
    setCurrentIndex(currentIndex + 1);
    setRevealed(false);
  }, [currentIndex]);

  const handleReveal = useCallback(async () => {
    if (revealed) return;

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    setRevealed(true);

    await logEvent({
      ts: Date.now(),
      type: 'CARD_SHOWN',
      game: 'guess-movie',
      sessionId,
      cardTerm: currentCard.dialogue,
      cardId: currentCard.id,
    });
  }, [revealed, currentCard, currentIndex, cards, sessionId]);

  const handleCorrect = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    await logEvent({
      ts: Date.now(),
      type: 'CARD_CORRECT',
      game: 'guess-movie',
      sessionId,
      cardTerm: currentCard.dialogue,
      cardId: currentCard.id,
    });

    const result: CardResult = {
      dialogue: currentCard.dialogue,
      answer: currentCard.answer,
      correct: true,
    };

    const updatedResults = [...results, result];
    setResults(updatedResults);

    if (isLastCard) {
      navigateToResults(updatedResults);
    } else {
      nextCard();
    }
  }, [currentCard, results, isLastCard, currentIndex, cards, sessionId]);

  const handleSkip = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    await logEvent({
      ts: Date.now(),
      type: 'CARD_PASSED',
      game: 'guess-movie',
      sessionId,
      cardTerm: currentCard.dialogue,
      cardId: currentCard.id,
    });

    const result: CardResult = {
      dialogue: currentCard.dialogue,
      answer: currentCard.answer,
      correct: false,
    };

    const updatedResults = [...results, result];
    setResults(updatedResults);

    if (isLastCard) {
      navigateToResults(updatedResults);
    } else {
      nextCard();
    }
  }, [currentCard, results, isLastCard, currentIndex, cards, sessionId]);

  const handleNext = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    if (isLastCard) {
      // Navigate to results when last card is reached
      navigateToResults(results);
    } else {
      nextCard();
    }
  }, [isLastCard, results, navigateToResults, nextCard]);

  const handleBack = useCallback(() => {
    // Track game abandoned (user quit early)
    const durationSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
    const score = results.filter(r => r.correct).length;
    trackGuessMovieAbandoned(packId, score, results.length, durationSeconds);

    navigation.navigate('GameMode');
  }, [navigation, gameStartTime, packId, results]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading dialogues...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!currentCard) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No dialogues available</Text>
          <TouchableOpacity
            style={styles.backToMenuButton}
            onPress={() => navigation.navigate('GameMode')}
          >
            <Text style={styles.backToMenuButtonText}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Image
            source={require('../../assets/DesiGames/icon-Back.png')}
            style={styles.backButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guess the Movie</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {!revealed ? (
          <>
            {/* Clue Screen */}
            <View style={styles.clueContainer}>
              <Image
                source={require('../../assets/DesiGames/icon-quotes.png')}
                style={styles.quoteIcon}
                resizeMode="contain"
              />
              <Text style={styles.quoteText}>"{currentCard.dialogue}"</Text>
            </View>

            <TouchableOpacity
              style={styles.revealButton}
              onPress={handleReveal}
              activeOpacity={0.8}
            >
              <Text style={styles.revealButtonText}>Reveal Answer</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* Answer Screen */}
            <View style={styles.answerContainer}>
              <Image
                source={require('../../assets/DesiGames/icon-quotes.png')}
                style={styles.quoteIcon}
                resizeMode="contain"
              />
              <Text style={styles.quoteText}>"{currentCard.dialogue}"</Text>

              <View style={styles.answerBox}>
                <Text style={styles.answerLabel}>Movie</Text>
                <Text style={styles.answerText}>{currentCard.answer}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
              activeOpacity={0.8}
            >
              <Text style={styles.nextButtonText}>Next Clue</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

export default React.memo(GuessMoviePlayScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  backButtonImage: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  loadingText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  backToMenuButton: {
    backgroundColor: colors.border.black,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  backToMenuButtonText: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  // Clue Screen Styles
  clueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  quoteIcon: {
    width: 60,
    height: 48,
    marginBottom: 32,
  },
  quoteText: {
    fontSize: 44,
    fontFamily: fonts.lato.bold,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 60,
  },
  revealButton: {
    backgroundColor: colors.border.black,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 48,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  revealButtonText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  // Answer Screen Styles
  answerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  answerBox: {
    backgroundColor: '#FFC107',
    borderRadius: 16,
    padding: 32,
    marginTop: 48,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  answerLabel: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  answerText: {
    fontSize: 36,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: colors.border.black,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 48,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  nextButtonText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
});
