/**
 * Charades Instructions Screen
 *
 * Shows how to play Charades with visual instructions before starting the game
 */

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

interface Route {
  params: {
    packId: string;
    categoryId: string;
  };
}

interface Props extends NavigationProps {
  route: Route;
}

export default function CharadesInstructionsScreen({ navigation, route }: Props) {
  const { packId, categoryId } = route.params;

  const handleStart = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Navigate to the game with pack and category
    navigation.navigate('Charades', {
      packId,
      categoryId,
    });
  }, [navigation, packId, categoryId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Charades</Text>
        <Text style={styles.subtitle}>How to Play</Text>

        {/* Instructions Grid */}
        <View style={styles.instructionsContainer}>
          {/* Step 1: Hold at forehead */}
          <View style={styles.instructionCard}>
            <View style={[styles.iconContainer, { backgroundColor: colors.primary.blue }]}>
              <Icon name="phone-forehead" size={80} />
            </View>
            <Text style={styles.instructionTitle}>Hold at forehead</Text>
            <Text style={styles.instructionText}>
              Place your phone on your forehead so others can see the word
            </Text>
          </View>

          {/* Step 2: Tilt up for correct */}
          <View style={styles.instructionCard}>
            <View style={[styles.iconContainer, { backgroundColor: colors.success }]}>
              <Icon name="tilt-up" size={80} />
            </View>
            <Text style={styles.instructionTitle}>Tilt up for correct</Text>
            <Text style={styles.instructionText}>
              When your team guesses right, tilt the phone up
            </Text>
          </View>

          {/* Step 3: Tilt down to pass */}
          <View style={styles.instructionCard}>
            <View style={[styles.iconContainer, { backgroundColor: colors.error }]}>
              <Icon name="tilt-down" size={80} />
            </View>
            <Text style={styles.instructionTitle}>Tilt down to pass</Text>
            <Text style={styles.instructionText}>
              If you want to skip this word, tilt the phone down
            </Text>
          </View>
        </View>

        {/* Game Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>⏱️</Text>
            <Text style={styles.detailText}>60 seconds per round</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>🎭</Text>
            <Text style={styles.detailText}>Act it out - no talking!</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>👥</Text>
            <Text style={styles.detailText}>Play with friends or family</Text>
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStart}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAEDF8',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  instructionsContainer: {
    marginBottom: 32,
  },
  instructionCard: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 4,
    borderColor: colors.border.black,
  },
  instructionTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    backgroundColor: colors.primary.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: colors.border.card,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  detailText: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    flex: 1,
  },
  startButton: {
    backgroundColor: colors.border.black,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 32,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.border.black,
  },
  startButtonText: {
    fontSize: 22,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
});
