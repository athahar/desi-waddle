// screens/CharadesScreen.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useKeepAwake } from 'expo-keep-awake';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import { NavigationProps } from '../types/game';
import { getPackById } from '../data';
import { isCharadesPack, CharadeCard } from '../types/content';
import { useAccelerometer } from '../hooks/useAccelerometer';
import { getNextCards, getSessionId, DeckItem } from '../core/deckManager';
import Icon from '../components/Icon';
import { logEvent } from '../devlog/logger';

interface Route {
  params: {
    packId?: string;
    categoryId?: string;
  };
}

interface Props extends NavigationProps {
  route: Route;
}

interface Attempt {
  word: string;
  correct: boolean;
}

const ROUND_SECONDS = 60;

export default function CharadesScreen({ route, navigation }: Props) {
  const packId = route.params?.packId;
  const categoryId = route.params?.categoryId;
  useKeepAwake(); // Keep screen awake during gameplay

  // Lock orientation to landscape
  useEffect(() => {
    const lock = async () => {
      try {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      } catch (error) {
        if (__DEV__) {
          console.log('Screen orientation lock error:', error);
        }
      }
    };
    const unlock = async () => {
      try {
        await ScreenOrientation.unlockAsync();
      } catch (error) {
        if (__DEV__) {
          console.log('Screen orientation unlock error:', error);
        }
      }
    };

    lock();

    // Listen for navigation events to unlock when leaving screen
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      unlock();
    });

    return () => {
      unsubscribe();
      unlock();
    };
  }, [navigation]);

  // Load word pool with enhanced deck manager (Phase 4)
  const [words, setWords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    const loadWords = async () => {
      // Get pack data
      if (!packId) {
        if (__DEV__) {
          console.error('CharadesScreen: packId is required');
        }
        setWords([]);
        setIsLoading(false);
        return;
      }

      const pack = getPackById(packId);
      if (!pack || !isCharadesPack(pack)) {
        if (__DEV__) {
          console.error(`CharadesScreen: Pack not found or not a charades pack: ${packId}`);
        }
        setWords([]);
        setIsLoading(false);
        return;
      }

      // Get cards from category or all categories
      let cards: CharadeCard[] = [];
      if (categoryId) {
        const category = pack.categories.find(cat => cat.id === categoryId);
        if (category) {
          cards = category.cards;
        }
      } else {
        // Get all cards from all categories
        cards = pack.categories.flatMap(cat => cat.cards);
      }

      if (cards.length === 0) {
        setWords([]);
        setIsLoading(false);
        return;
      }

      const gameId = `charades_${packId}_${categoryId || 'all'}`;

      // Convert CharadeCard[] to DeckItem format for enhanced deck manager
      const deckItems: DeckItem[] = cards.map(card => ({
        id: card.id,
        term: card.text,
        category: categoryId || 'all',
        difficulty: 1,
        ageBands: ['all'],
      }));

      // Get or create session ID
      const currentSessionId = await getSessionId(gameId, packId, categoryId, deckItems.length);
      setSessionId(currentSessionId);

      // Get next cards using enhanced deck manager (50% refresh rule, seeded shuffle)
      const nextCards = await getNextCards(
        gameId,
        packId,
        categoryId,
        deckItems,
        deckItems.length // Get all available cards for this session
      );

      setWords(nextCards.map((item) => item.term));
      setIsLoading(false);
      setShowInstructions(true); // Show instructions after loading

      if (__DEV__) {
        console.log(`Session ${currentSessionId}: Loaded ${nextCards.length} charades words for ${packId}/${categoryId || 'all'}`);
      }

      // Log session start
      await logEvent({
        type: 'SESSION_START',
        game: 'charades',
        pack: packId,
        category: categoryId,
        sessionId: currentSessionId,
      });
    };

    loadWords();
  }, [packId, categoryId]);

  const [idx, setIdx] = useState(0);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [bg, setBg] = useState('#2DA4EA'); // blue
  const [sensorsEnabled, setSensorsEnabled] = useState(false); // Disabled until countdown ends
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [countdown, setCountdown] = useState(3); // 3-second countdown
  const [gameStarted, setGameStarted] = useState(false);
  // Pre-game phases
  const [showInstructions, setShowInstructions] = useState(false); // Will be set to true after loading
  const [isCountingDown, setIsCountingDown] = useState(false);

  const word = words[idx] ?? '…';

  // Start button on the Instructions screen
  const handleStart = () => {
    setCountdown(3);
    setIsCountingDown(true);
    setShowInstructions(false);
  };

  // Countdown after user taps Start (3→2→1)
  useEffect(() => {
    if (isLoading || words.length === 0) return;
    if (!isCountingDown || gameStarted) return;

    const tick = setInterval(async () => {
      setCountdown((prev) => {
        const next = prev - 1;

        // Light haptic tick for each second
        if (next >= 1) {
          try {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          } catch (error) {
            if (__DEV__) {
              console.log('Haptics error (non-critical):', error);
            }
          }
        }

        // Success haptic when countdown reaches 0
        if (next === 0) {
          try {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          } catch (error) {
            if (__DEV__) {
              console.log('Haptics error (non-critical):', error);
            }
          }
          setGameStarted(true);
          setSensorsEnabled(true);
          setIsCountingDown(false);
        }

        return next;
      });
    }, 1000);

    return () => clearInterval(tick);
  }, [isCountingDown, gameStarted, isLoading, words.length]);

  // Game timer (runs after countdown finishes)
  useEffect(() => {
    if (!gameStarted) return;

    if (timeLeft <= 0) {
      // Reset stack to: GameMode → PackList → PackDetail → CharadesResults (removes Charades screen)
      navigation.dispatch(
        CommonActions.reset({
          index: 3,
          routes: [
            { name: 'GameMode' },
            { name: 'PackList', params: { gameMode: 'charades' } },
            { name: 'PackDetail', params: route.params },
            { name: 'CharadesResults', params: { score, attempts } },
          ],
        })
      );
      return;
    }
    const t = setTimeout(() => setTimeLeft((tl) => tl - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, gameStarted, navigation, score, attempts, route.params]);

  const nextWord = useCallback(() => {
    const nextIndex = (idx + 1) % words.length;
    setIdx(nextIndex);

    // Log card shown
    if (words[nextIndex]) {
      logEvent({
        type: 'CARD_SHOWN',
        game: 'charades',
        pack: packId,
        category: categoryId,
        sessionId,
        cardTerm: words[nextIndex],
      });
    }
  }, [idx, words, packId, categoryId, sessionId]);

  const markCorrect = useCallback(async () => {
    if (!hapticsEnabled) return;

    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Log correct answer
    await logEvent({
      type: 'CARD_CORRECT',
      game: 'charades',
      pack: packId,
      category: categoryId,
      sessionId,
      cardTerm: word,
    });

    setBg('#2ECC40'); // green
    setScore((s) => s + 1);
    setAttempts((a) => [...a, { word, correct: true }]);

    setTimeout(() => {
      setBg('#2DA4EA');
      nextWord();
    }, 260);
  }, [word, nextWord, hapticsEnabled, packId, categoryId, sessionId]);

  const markPass = useCallback(async () => {
    if (!hapticsEnabled) return;

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Log passed card
    await logEvent({
      type: 'CARD_PASSED',
      game: 'charades',
      pack: packId,
      category: categoryId,
      sessionId,
      cardTerm: word,
    });

    setBg('#E6656A'); // red
    setAttempts((a) => [...a, { word, correct: false }]);

    setTimeout(() => {
      setBg('#2DA4EA');
      nextWord();
    }, 260);
  }, [word, nextWord, hapticsEnabled, packId, categoryId, sessionId]);

  // Accelerometer: down = correct, up = pass
  // No neutral position required - start immediately
  useAccelerometer(markCorrect, markPass, {
    enable: sensorsEnabled,
    requireNeutralFirst: false, // Start immediately without waiting for forehead
    armThresh: 0.55,
    dwellMs: 250,
    cooldownMs: 800,
    interval: 100,
  });

  const finish = useCallback(() => {
    // Stop sensors and haptics immediately
    setSensorsEnabled(false);
    setHapticsEnabled(false);

    // Reset stack to: GameMode → PackList → PackDetail → CharadesResults (removes Charades screen)
    navigation.dispatch(
      CommonActions.reset({
        index: 3,
        routes: [
          { name: 'GameMode' },
          { name: 'PackList', params: { gameMode: 'charades' } },
          { name: 'PackDetail', params: route.params },
          { name: 'CharadesResults', params: { score, attempts } },
        ],
      })
    );
  }, [navigation, score, attempts, route.params]);

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
        <View style={styles.center}>
          <Text style={styles.word}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (words.length === 0) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
        <View style={styles.center}>
          <Text style={styles.word}>No words available</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.finishBtn}>
            <Text style={styles.finishTxt}>GO BACK</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Instructions screen
  if (showInstructions) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#D9EFFB' }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Icon name="back-button" size={40} />
        </TouchableOpacity>

        <View style={styles.instructionsHeader}>
          <Text style={styles.instructionsTitle}>Charades</Text>
          <Text style={styles.instructionsSubtitle}>How to Play</Text>
        </View>

        <View style={styles.instructionsRow}>
          <View style={styles.instructionsItem}>
            <Icon name="charades-hold" size={96} />
            <Text style={styles.instructionLabel}>Hold at forehead</Text>
          </View>

          <View style={styles.instructionsItem}>
            <Icon name="charades-tilt-up" size={96} />
            <Text style={styles.instructionLabel}>Tilt up for correct</Text>
          </View>

          <View style={styles.instructionsItem}>
            <Icon name="charades-tilt-down" size={96} />
            <Text style={styles.instructionLabel}>Tilt down to pass</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleStart} style={styles.startBtn} activeOpacity={0.9}>
          <Text style={styles.startTxt}>Start</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // Countdown screen
  if (isCountingDown && !gameStarted) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
        <View style={styles.center}>
          <Text style={styles.readyTitle}>Get Ready</Text>
          <Text style={styles.countdownText} accessibilityLiveRegion="polite">
            {countdown}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Normal gameplay with word and timer
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <TouchableOpacity onPress={finish} style={styles.finishBtn} activeOpacity={0.7}>
        <Text style={styles.finishTxt}>FINISH</Text>
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.word} numberOfLines={1} adjustsFontSizeToFit>
          {word}
        </Text>
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
      </View>
    </SafeAreaView>
  );
}

function formatTime(s: number) {
  const m = Math.floor(s / 60)
    .toString()
    .padStart(2, '0');
  const ss = (s % 60).toString().padStart(2, '0');
  return `${m}:${ss}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    width: '90%',
  },
  word: {
    fontSize: 72,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  readyTitle: {
    fontSize: 24,
    fontFamily: fonts.inter.bold,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 12,
    textAlign: 'center',
  },
  countdownText: {
    fontSize: 120,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
    textAlign: 'center',
    letterSpacing: 2,
  },
  readyHint: {
    fontSize: 16,
    fontFamily: fonts.inter.semiBold,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 12,
    textAlign: 'center',
  },
  timer: {
    fontSize: 32,
    fontFamily: fonts.inter.bold,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 24,
  },
  finishBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
  },
  finishTxt: {
    color: colors.primary.white,
    fontFamily: fonts.inter.bold,
    letterSpacing: 1,
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
    zIndex: 10,
    padding: 12,
  },
  instructionsHeader: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  instructionsTitle: {
    fontSize: 28,
    fontFamily: fonts.inter.bold,
    color: colors.text?.primary ?? '#0F172A',
    marginBottom: 4,
  },
  instructionsSubtitle: {
    fontSize: 16,
    fontFamily: fonts.inter.semiBold,
    color: 'rgba(0,0,0,0.6)',
  },
  instructionsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '88%',
    maxWidth: 820,
    marginTop: 12,
    marginBottom: 24,
    gap: 16,
  },
  instructionsItem: {
    flex: 1,
    alignItems: 'center',
  },
  instructionLabel: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.inter.bold,
    color: colors.text?.primary ?? '#0F172A',
  },
  startBtn: {
    marginTop: 8,
    backgroundColor: colors.border?.black ?? '#000',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '60%',
    maxWidth: 360,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  startTxt: {
    color: colors.primary.white,
    fontFamily: fonts.inter.bold,
    fontSize: 18,
    letterSpacing: 0.5,
  },
});
