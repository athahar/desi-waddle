// screens/CharadesScreen.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useKeepAwake } from 'expo-keep-awake';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import { NavigationProps } from '../types/game';
import { getCharadesItemsByCategory, CharadesCategoryId } from '../data/charadesData';
import { useAccelerometer } from '../hooks/useAccelerometer';
import Icon from '../components/Icon';
import { logEvent } from '../devlog/logger';

interface Route {
  params: {
    category?: string;
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
  const categoryId = route.params?.category;
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
      // Get category data
      if (!categoryId) {
        if (__DEV__) {
          console.error('CharadesScreen: category is required');
        }
        setWords([]);
        setIsLoading(false);
        return;
      }

      const items = getCharadesItemsByCategory(categoryId as CharadesCategoryId);

      if (items.length === 0) {
        if (__DEV__) {
          console.error(`CharadesScreen: No items found for category: ${categoryId}`);
        }
        setWords([]);
        setIsLoading(false);
        return;
      }

      // Shuffle items using Fisher-Yates algorithm
      const shuffled = [...items].sort(() => Math.random() - 0.5);

      // Generate session ID
      const currentSessionId = `charades_${categoryId}_${Date.now()}`;
      setSessionId(currentSessionId);

      // Reset ALL game state when loading new category
      setIdx(0);
      setAttempts([]);
      setScore(0);
      setTimeLeft(ROUND_SECONDS);
      setGameStarted(false);
      setGameEnded(false);
      setCountdown(3);
      setIsCountingDown(false);
      setSensorsEnabled(false);
      setHapticsEnabled(true);
      setBg('#1761FF');

      setWords(shuffled.map(item => item.term));
      setIsLoading(false);
      setShowInstructions(true); // Show instructions after loading

      if (__DEV__) {
        console.log(`Session ${currentSessionId}: Loaded ${shuffled.length} charades words for ${categoryId}`);
      }

      // Log session start
      await logEvent({
        ts: Date.now(),
        type: 'SESSION_START',
        game: 'charades',
        sessionId: currentSessionId,
        metadata: {
          category: categoryId,
        },
      });
    };

    loadWords();
  }, [categoryId]);

  const [idx, setIdx] = useState(0);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [bg, setBg] = useState('#1761FF'); // blue
  const [sensorsEnabled, setSensorsEnabled] = useState(false); // Disabled until countdown ends
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [countdown, setCountdown] = useState(3); // 3-second countdown
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false); // Prevent re-renders after game ends
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
    if (!gameStarted || gameEnded) return;

    if (timeLeft <= 0) {
      // Mark game as ended to prevent re-renders
      setGameEnded(true);

      // Navigate to results screen
      navigation.navigate('CharadesResults', { score, attempts });
      return;
    }
    const t = setTimeout(() => setTimeLeft((tl) => tl - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, gameStarted, gameEnded, navigation, score, attempts]);

  const nextWord = useCallback(() => {
    const nextIndex = (idx + 1) % words.length;
    setIdx(nextIndex);

    // Log card shown
    if (words[nextIndex]) {
      logEvent({
        ts: Date.now(),
        type: 'CARD_SHOWN',
        game: 'charades',
        sessionId,
        cardTerm: words[nextIndex],
        metadata: {
          category: categoryId,
        },
      });
    }
  }, [idx, words, categoryId, sessionId]);

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
      ts: Date.now(),
      type: 'CARD_CORRECT',
      game: 'charades',
      sessionId,
      cardTerm: word,
      metadata: {
        category: categoryId,
      },
    });

    setBg('#2ECC40'); // green
    setScore((s) => s + 1);
    setAttempts((a) => [...a, { word, correct: true }]);

    setTimeout(() => {
      setBg('#1761FF'); // blue
      nextWord();
    }, 260);
  }, [word, nextWord, hapticsEnabled, categoryId, sessionId]);

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
      ts: Date.now(),
      type: 'CARD_PASSED',
      game: 'charades',
      sessionId,
      cardTerm: word,
      metadata: {
        category: categoryId,
      },
    });

    setBg('#E6656A'); // red
    setAttempts((a) => [...a, { word, correct: false }]);

    setTimeout(() => {
      setBg('#1761FF'); // blue
      nextWord();
    }, 260);
  }, [word, nextWord, hapticsEnabled, categoryId, sessionId]);

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
    setGameEnded(true);

    // Navigate to results screen
    navigation.navigate('CharadesResults', { score, attempts });
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

  // Instructions screen
  if (showInstructions) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#F2EDD3' }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../assets/DesiGames/icon-Back.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.instructionsHeader}>
          <Text style={styles.instructionsTitle}>Charades</Text>
          <Text style={styles.instructionsSubtitle}>How to Play</Text>
        </View>

        <View style={styles.instructionsRow}>
          <View style={styles.instructionsItem}>
            <Image
              source={require('../../assets/DesiGames/charades-hold-up.png')}
              style={styles.instructionIcon}
              resizeMode="contain"
            />
            <Text style={styles.instructionLabel}>Hold at forehead</Text>
          </View>

          <View style={styles.instructionsItem}>
            <Image
              source={require('../../assets/DesiGames/charades-correct.png')}
              style={styles.instructionIcon}
              resizeMode="contain"
            />
            <Text style={styles.instructionLabel}>Tilt down for correct</Text>
          </View>

          <View style={styles.instructionsItem}>
            <Image
              source={require('../../assets/DesiGames/charades-wrong.png')}
              style={styles.instructionIcon}
              resizeMode="contain"
            />
            <Text style={styles.instructionLabel}>Tilt up to pass</Text>
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
          <Text style={[styles.readyTitle, { color: '#ffffff' }]}>Get Ready</Text>
          <Text style={[styles.countdownText, { color: '#ffffff' }]} accessibilityLiveRegion="polite">
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
        <Text style={[styles.finishTxt, { color: '#ffffff' }]}>FINISH</Text>
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={[styles.word, { color: '#ffffff' }]} numberOfLines={1} adjustsFontSizeToFit>
          {word}
        </Text>
        <Text style={[styles.timer, { color: '#ffffff' }]}>{formatTime(timeLeft)}</Text>
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
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  readyTitle: {
    fontSize: 24,
    fontFamily: fonts.inter.bold,
    marginBottom: 12,
    textAlign: 'center',
  },
  countdownText: {
    fontSize: 120,
    fontFamily: fonts.inter.bold,
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
    marginTop: 24,
  },
  finishBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
  },
  finishTxt: {
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
  backIcon: {
    width: 40,
    height: 40,
  },
  instructionsHeader: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  instructionsTitle: {
    fontSize: 28,
    fontFamily: fonts.inter.bold,
    color: '#000',
    marginBottom: 4,
  },
  instructionsSubtitle: {
    fontSize: 16,
    fontFamily: fonts.inter.semiBold,
    color: '#000',
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
  instructionIcon: {
    width: 96,
    height: 96,
  },
  instructionLabel: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.inter.bold,
    color: '#000',
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
