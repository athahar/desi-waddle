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

      if (__DEV__) {
        console.log(`Session ${currentSessionId}: Loaded ${nextCards.length} charades words for ${packId}/${categoryId || 'all'}`);
      }
    };

    loadWords();
  }, [packId, categoryId]);

  const [idx, setIdx] = useState(0);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [bg, setBg] = useState('#2DA4EA'); // blue
  const [sensorsEnabled, setSensorsEnabled] = useState(false); // Disabled during countdown
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [countdown, setCountdown] = useState(4); // 4-second countdown before game starts
  const [gameStarted, setGameStarted] = useState(false);
  const [neutralReady, setNeutralReady] = useState(false); // Tracks if forehead position detected

  const word = words[idx] ?? '…';

  // Initial countdown before game starts (4 seconds)
  useEffect(() => {
    if (isLoading || words.length === 0) return;
    if (gameStarted) return;

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

        // Success haptic when game starts
        if (next === 0) {
          try {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          } catch (error) {
            if (__DEV__) {
              console.log('Haptics error (non-critical):', error);
            }
          }
          // Start the game
          setGameStarted(true);
          setSensorsEnabled(true);
        }

        return next;
      });
    }, 1000);

    return () => clearInterval(tick);
  }, [gameStarted, isLoading, words.length]);

  // Game timer (only runs after countdown finishes AND forehead position detected)
  useEffect(() => {
    if (!gameStarted || !neutralReady) return;

    if (timeLeft <= 0) {
      // Reset stack to: Home → CharadesCategory → CharadesResults (removes Play screen)
      navigation.dispatch(
        CommonActions.reset({
          index: 2,
          routes: [
            { name: 'Home' },
            { name: 'CharadesCategory' },
            { name: 'CharadesResults', params: { score, attempts } },
          ],
        })
      );
      return;
    }
    const t = setTimeout(() => setTimeLeft((tl) => tl - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, gameStarted, neutralReady, navigation, score, attempts]);

  const nextWord = useCallback(() => {
    setIdx((i) => (i + 1) % words.length);
  }, [words.length]);

  const markCorrect = useCallback(async () => {
    if (!hapticsEnabled) return;

    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    setBg('#2ECC40'); // green
    setScore((s) => s + 1);
    setAttempts((a) => [...a, { word, correct: true }]);

    setTimeout(() => {
      setBg('#2DA4EA');
      nextWord();
    }, 260);
  }, [word, nextWord, hapticsEnabled]);

  const markPass = useCallback(async () => {
    if (!hapticsEnabled) return;

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    setBg('#E6656A'); // red
    setAttempts((a) => [...a, { word, correct: false }]);

    setTimeout(() => {
      setBg('#2DA4EA');
      nextWord();
    }, 260);
  }, [word, nextWord, hapticsEnabled]);

  // Accelerometer: down = correct, up = pass
  // Requires neutral (forehead) position before accepting tilts
  useAccelerometer(markCorrect, markPass, {
    enable: sensorsEnabled,
    requireNeutralFirst: true,
    neutralThresh: 0.25,
    neutralDwellMs: 600,
    armThresh: 0.55,
    dwellMs: 250,
    cooldownMs: 800,
    interval: 100,
    onNeutralReadyChange: setNeutralReady,
    playHapticOnReady: true,
  });

  const finish = useCallback(() => {
    // Stop sensors and haptics immediately
    setSensorsEnabled(false);
    setHapticsEnabled(false);

    // Reset stack to: Home → CharadesCategory → CharadesResults (removes Play screen)
    navigation.dispatch(
      CommonActions.reset({
        index: 2,
        routes: [
          { name: 'Home' },
          { name: 'CharadesCategory' },
          { name: 'CharadesResults', params: { score, attempts } },
        ],
      })
    );
  }, [navigation, score, attempts]);

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

  // Show countdown before game starts
  if (!gameStarted) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
        <View style={styles.center}>
          <Text style={styles.readyTitle}>Get Ready</Text>
          <Text style={styles.countdownText} accessibilityLiveRegion="polite">
            {countdown === 0 ? word : `0${countdown}`}
          </Text>
          <Text style={styles.readyHint}>Hold phone to your forehead</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Show "waiting for forehead position" overlay
  if (gameStarted && !neutralReady) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
        <TouchableOpacity onPress={finish} style={styles.finishBtn} activeOpacity={0.7}>
          <Text style={styles.finishTxt}>FINISH</Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.readyTitle}>Hold to your forehead</Text>
          <Text style={styles.readyHint}>Keep it steady for a moment…</Text>
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
});
