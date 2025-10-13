// screens/SimonSaysPlayScreen.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import colors from '../styles/colors';
import { NavigationProps } from '../types/game';
import { simonSaysCommands, SimonSaysCommand } from '../data/simonSaysData';
import { getNextItems } from '../services/gameSessionService';
import { dealSimonRound } from '../utils/dealSimonRound';
import Icon from '../components/Icon';

interface Route {
  params: {
    includeTricks: boolean;
    difficulty: 'all' | 'easy' | 'medium';
  };
}

interface Props extends NavigationProps {
  route: Route;
}

const GAME_ID = 'simon_says';
const ROUND_SIZE = 20;

export default function SimonSaysPlayScreen({ route, navigation }: Props) {
  const { includeTricks, difficulty } = route.params;

  const [commands, setCommands] = useState<SimonSaysCommand[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [crossfadeAnim] = useState(new Animated.Value(1));

  // Load commands with session tracking
  useEffect(() => {
    const loadCommands = async () => {
      if (__DEV__) {
        console.log('Loading Simon Says commands...');
        console.log('Settings:', { includeTricks, difficulty });
      }

      try {
        // Ensure simonSaysCommands is loaded
        if (!simonSaysCommands || !Array.isArray(simonSaysCommands)) {
          throw new Error('Simon Says commands not loaded');
        }

        // Simon Says commands don't have difficulty levels, so use all commands
        let filtered = simonSaysCommands;

        if (filtered.length === 0) {
          if (__DEV__) {
            console.warn('No commands available');
          }
          setCommands([]);
          setIsLoading(false);
          return;
        }

        // Get unused commands from session (prevents repetition)
        const unusedCommands = await getNextItems(
          GAME_ID,
          filtered,
          Math.min(150, filtered.length), // Get a larger pool for smart dealing
          (items) => items // Don't shuffle yet - dealSimonRound will handle it
        );

        // Use smart dealing algorithm to create a well-structured round
        const dealtRound = dealSimonRound(unusedCommands, {
          includeTricks,
          count: ROUND_SIZE,
          trickRatio: 0.3,
          firstRealCount: 2,
          minGapBetweenTricks: 2,
          avoidEndTrick: true,
          maxSequencePerRound: 2,
        });

        setCommands(dealtRound);
        setIsLoading(false);

        if (__DEV__) {
          console.log(`Loaded ${dealtRound.length} commands (${dealtRound.filter(c => !c.isSimonSays).length} tricks)`);
        }
      } catch (error) {
        if (__DEV__) {
          console.error('Error loading commands:', error);
        }
        setIsLoading(false);
      }
    };

    loadCommands();
  }, [includeTricks, difficulty]);

  const currentCommand = commands[currentIndex];

  const handleNext = useCallback(async () => {
    if (!currentCommand) return;

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Crossfade animation
    Animated.timing(crossfadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Move to next command
      if (currentIndex + 1 < commands.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Round complete, go back to home
        navigation.goBack();
      }

      // Fade in new command
      Animated.timing(crossfadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  }, [currentCommand, currentIndex, commands.length, crossfadeAnim, navigation]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading commands...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (commands.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No commands available</Text>
          <TouchableOpacity style={styles.completionButton} onPress={() => navigation.goBack()}>
            <Text style={styles.completionButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (!currentCommand) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Round complete!</Text>
          <TouchableOpacity style={styles.completionButton} onPress={() => navigation.goBack()}>
            <Text style={styles.completionButtonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const commandText = currentCommand.command;

  const handleBack = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Icon name="back-button" size={48} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Simon Says</Text>
      </View>

      <View style={styles.content}>
        {/* Command Card */}
        <Animated.View
          style={[
            styles.commandCard,
            {
              opacity: crossfadeAnim,
              transform: [
                {
                  scale: crossfadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.98, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.commandText} numberOfLines={3} adjustsFontSizeToFit>
            {commandText}
          </Text>

          {/* Real/Trick indicator (hidden by default as per spec) */}
          {__DEV__ && (
            <View style={styles.indicatorPill}>
              <Text style={styles.indicatorText}>
                {currentCommand.isSimonSays ? 'Real' : 'Trick'}
              </Text>
            </View>
          )}
        </Animated.View>

        {/* Controls */}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext} activeOpacity={0.8}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>

          {/* Progress indicator */}
          <Text style={styles.progressText}>
            {currentIndex + 1} / {commands.length}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.app,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: colors.background.app,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  commandCard: {
    backgroundColor: colors.primary.white,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: colors.border.black,
    padding: 32,
    marginBottom: 32,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow.default,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  commandText: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 38,
  },
  indicatorPill: {
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.pastel.cream,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border.black,
  },
  indicatorText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text.primary,
  },
  controls: {
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: colors.border.black,
    borderRadius: 50,
    paddingVertical: 18,
    paddingHorizontal: 48,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: colors.border.black,
    shadowColor: colors.shadow.default,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    minHeight: 52,
    minWidth: 200,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary.white,
    textAlign: 'center',
  },
  progressText: {
    fontSize: 16,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  completionButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.border.black,
    borderRadius: 50,
  },
  completionButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary.white,
  },
});
