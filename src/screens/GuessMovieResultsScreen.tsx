import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';

interface CardResult {
  dialogue: string;
  answer: string;
  correct: boolean;
  timeToReveal: number;
}

interface Route {
  params: {
    results: CardResult[];
    score: number;
    totalCards: number;
  };
}

interface Props extends NavigationProps {
  route: Route;
}

function GuessMovieResultsScreen({ navigation, route }: Props) {
  const { results = [], score = 0, totalCards = 0 } = route.params || {};

  const correctCount = results.filter(r => r.correct).length;

  const handlePlayAgain = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Navigate back to GuessMovieInstructions
    navigation.navigate('GuessMovieInstructions');
  }, [navigation]);

  const handleBackPress = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Reset navigation to GameMode screen
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'GameMode' }],
      })
    );
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.headerBar}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Icon name="back" size={40} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Results</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <View style={styles.scoreContainer}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>Final Score</Text>
            <Text style={styles.scoreValue}>{score}</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{correctCount}</Text>
              <Text style={styles.statLabel}>Correct</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{totalCards - correctCount}</Text>
              <Text style={styles.statLabel}>Skipped</Text>
            </View>
          </View>
        </View>

        {/* Results breakdown */}
        {results.length > 0 && (
          <View style={styles.breakdownContainer}>
            <Text style={styles.breakdownTitle}>Round Summary</Text>
            {results.map((result, index) => (
              <View
                key={index}
                style={[
                  styles.resultItem,
                  result.correct ? styles.resultCorrect : styles.resultSkipped,
                ]}
              >
                <View style={styles.resultHeader}>
                  <Text style={styles.resultIcon}>
                    {result.correct ? '✓' : '→'}
                  </Text>
                  <Text style={styles.resultNumber}>#{index + 1}</Text>
                </View>
                <Text style={styles.resultDialogue} numberOfLines={2}>
                  "{result.dialogue}"
                </Text>
                <Text style={styles.resultAnswer}>{result.answer}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.playAgainButton]}
            onPress={handlePlayAgain}
            activeOpacity={0.8}
          >
            <Text style={styles.playAgainButtonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(GuessMovieResultsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 48, // Same width as back button to center title
  },
  content: {
    padding: 24,
    paddingTop: 8,
  },
  scoreContainer: {
    marginBottom: 32,
  },
  scoreBox: {
    backgroundColor: colors.primary.teal,
    borderRadius: 10,
    padding: 32,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6,
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6,
    borderBottomColor: colors.border.black,
  },
  scoreLabel: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.primary.white,
    marginBottom: 8,
  },
  scoreValue: {
    fontSize: 64,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.pastel.lightBlue,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: colors.border.card,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.border.card,
  },
  breakdownContainer: {
    marginBottom: 32,
  },
  breakdownTitle: {
    fontSize: 22,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 16,
  },
  resultItem: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.border.card,
  },
  resultCorrect: {
    backgroundColor: colors.pastel.lightGreen,
    borderLeftWidth: 6,
    borderLeftColor: colors.border.black,
  },
  resultSkipped: {
    backgroundColor: '#f5f5f5',
    borderLeftWidth: 6,
    borderLeftColor: colors.text.secondary,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  resultNumber: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  resultDialogue: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    marginBottom: 4,
    fontStyle: 'italic',
  },
  resultAnswer: {
    fontSize: 16,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  buttonContainer: {
    marginTop: 8,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
  },
  playAgainButton: {
    backgroundColor: colors.border.black,
  },
  playAgainButtonText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
});
