// screens/SimonSaysHomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Switch } from 'react-native';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';
import { NavigationProps } from '../types/game';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

type Difficulty = 'all' | 'easy' | 'medium';

const STORAGE_KEY_TRICKS = 'pwyl.includeTricks';
const STORAGE_KEY_DIFFICULTY = 'pwyl.simonSays.difficulty';

export default function SimonSaysHomeScreen({ navigation }: Props) {
  const [includeTricks, setIncludeTricks] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  // Load settings from AsyncStorage
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const tricksValue = await AsyncStorage.getItem(STORAGE_KEY_TRICKS);
        if (tricksValue !== null) {
          setIncludeTricks(tricksValue === 'true');
        }

        const difficultyValue = await AsyncStorage.getItem(STORAGE_KEY_DIFFICULTY);
        if (difficultyValue) {
          setDifficulty(difficultyValue as Difficulty);
        }
      } catch (error) {
        if (__DEV__) {
          console.log('Error loading Simon Says settings:', error);
        }
      }
    };

    loadSettings();
  }, []);

  const handleToggleTricks = async (value: boolean) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    setIncludeTricks(value);
    try {
      await AsyncStorage.setItem(STORAGE_KEY_TRICKS, value.toString());
    } catch (error) {
      if (__DEV__) {
        console.log('Error saving tricks setting:', error);
      }
    }
  };

  const handleDifficultyChange = async (newDifficulty: Difficulty) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    setDifficulty(newDifficulty);
    try {
      await AsyncStorage.setItem(STORAGE_KEY_DIFFICULTY, newDifficulty);
    } catch (error) {
      if (__DEV__) {
        console.log('Error saving difficulty setting:', error);
      }
    }
  };

  const handleStart = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    navigation.navigate('SimonSaysPlay', {
      includeTricks,
      difficulty,
    });
  };

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

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* How to play card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How to Play</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletText}>• Listen carefully to each command</Text>
            <Text style={styles.bulletText}>• Only follow commands that start with "Simon says"</Text>
            <Text style={styles.bulletText}>• Don't follow trick commands without "Simon says"!</Text>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.settingsCard}>
          <Text style={styles.settingsTitle}>Settings</Text>

          {/* Include Tricks Toggle */}
          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Include trick commands</Text>
            <Switch
              value={includeTricks}
              onValueChange={handleToggleTricks}
              trackColor={{ false: '#ccc', true: colors.pastel.lightBlue }}
              thumbColor={colors.primary.white}
            />
          </View>

          {/* Difficulty Filter */}
          <View style={styles.difficultyContainer}>
            <Text style={styles.difficultyLabel}>Difficulty</Text>
            <View style={styles.segmentedControl}>
              <TouchableOpacity
                style={[
                  styles.segment,
                  styles.segmentLeft,
                  difficulty === 'all' && styles.segmentActive,
                ]}
                onPress={() => handleDifficultyChange('all')}
                activeOpacity={0.7}
              >
                <Text style={[styles.segmentText, difficulty === 'all' && styles.segmentTextActive]}>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.segment,
                  styles.segmentMiddle,
                  difficulty === 'easy' && styles.segmentActive,
                ]}
                onPress={() => handleDifficultyChange('easy')}
                activeOpacity={0.7}
              >
                <Text style={[styles.segmentText, difficulty === 'easy' && styles.segmentTextActive]}>
                  Easy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.segment,
                  styles.segmentRight,
                  difficulty === 'medium' && styles.segmentActive,
                ]}
                onPress={() => handleDifficultyChange('medium')}
                activeOpacity={0.7}
              >
                <Text style={[styles.segmentText, difficulty === 'medium' && styles.segmentTextActive]}>
                  Medium
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton} onPress={handleStart} activeOpacity={0.8}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </ScrollView>
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: colors.primary.white,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: colors.border.black,
    padding: 20,
    marginBottom: 16,
    shadowColor: colors.shadow.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
    marginBottom: 12,
  },
  bulletList: {
    gap: 8,
  },
  bulletText: {
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 24,
  },
  settingsCard: {
    backgroundColor: colors.pastel.cream,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: colors.border.black,
    padding: 20,
    marginBottom: 24,
    shadowColor: colors.shadow.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
    marginBottom: 16,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    minHeight: 44,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    flex: 1,
  },
  difficultyContainer: {
    marginTop: 16,
  },
  difficultyLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 12,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: colors.primary.white,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.border.black,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    backgroundColor: colors.primary.white,
  },
  segmentLeft: {
    borderRightWidth: 1,
    borderColor: colors.border.black,
  },
  segmentMiddle: {
    borderRightWidth: 1,
    borderColor: colors.border.black,
  },
  segmentRight: {},
  segmentActive: {
    backgroundColor: colors.border.black,
  },
  segmentText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  segmentTextActive: {
    color: colors.primary.white,
  },
  startButton: {
    backgroundColor: colors.border.black,
    borderRadius: 50,
    paddingVertical: 18,
    paddingHorizontal: 40,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: colors.border.black,
    shadowColor: colors.shadow.default,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    minHeight: 52,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary.white,
    textAlign: 'center',
  },
});
