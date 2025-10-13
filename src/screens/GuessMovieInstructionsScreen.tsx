import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

function GuessMovieInstructionsScreen({ navigation }: Props) {
  const handleStartGame = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    navigation.navigate('GuessMoviePlay');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Icon name="characters" size={80} style={styles.icon} />
          <Text style={styles.title}>Guess the Movie</Text>
          <Text style={styles.subtitle}>From Famous Bollywood Dialogues</Text>
        </View>

        <View style={styles.instructionsContainer}>
          <Text style={styles.sectionTitle}>How to Play</Text>

          <View style={styles.instructionItem}>
            <Text style={styles.stepNumber}>1</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Read the Dialogue</Text>
              <Text style={styles.stepDescription}>
                A famous Bollywood dialogue will appear on screen
              </Text>
            </View>
          </View>

          <View style={styles.instructionItem}>
            <Text style={styles.stepNumber}>2</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Guess the Movie</Text>
              <Text style={styles.stepDescription}>
                You have 30 seconds to identify the movie. Discuss with your team!
              </Text>
            </View>
          </View>

          <View style={styles.instructionItem}>
            <Text style={styles.stepNumber}>3</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Tap Reveal</Text>
              <Text style={styles.stepDescription}>
                See the answer with a helpful hint. The dialogue auto-reveals after 30 seconds.
              </Text>
            </View>
          </View>

          <View style={styles.instructionItem}>
            <Text style={styles.stepNumber}>4</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Score Points</Text>
              <Text style={styles.stepDescription}>
                Mark correct or skip, then tap Next to continue
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.scoringContainer}>
          <Text style={styles.sectionTitle}>Scoring</Text>
          <View style={styles.scoringItem}>
            <Text style={styles.scoringIcon}>✓</Text>
            <Text style={styles.scoringText}>Correct guess = +1 point</Text>
          </View>
          <View style={styles.scoringItem}>
            <Text style={styles.scoringIcon}>⚡</Text>
            <Text style={styles.scoringText}>Quick guess (&lt;3 seconds) = +1 bonus</Text>
          </View>
          <View style={styles.scoringItem}>
            <Text style={styles.scoringIcon}>→</Text>
            <Text style={styles.scoringText}>Skip = 0 points</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartGame}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Start Game</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(GuessMovieInstructionsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  instructionsContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 20,
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary.teal,
    color: colors.primary.white,
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    textAlign: 'center',
    lineHeight: 40,
    marginRight: 16,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    lineHeight: 22,
  },
  scoringContainer: {
    backgroundColor: colors.pastel.lightBlue,
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
  },
  scoringItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoringIcon: {
    fontSize: 24,
    marginRight: 12,
    width: 32,
  },
  scoringText: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    flex: 1,
  },
  startButton: {
    backgroundColor: colors.primary.teal,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 32,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.border.black,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  startButtonText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
});
