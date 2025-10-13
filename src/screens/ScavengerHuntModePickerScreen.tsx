// screens/ScavengerHuntModePickerScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import { NavigationProps } from '../types/game';
import { scavengerHuntModes, ScavengerHuntMode } from '../data/scavengerHuntData';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

const STORAGE_KEY_MODE = 'pwyl.lastHuntMode';

export default function ScavengerHuntModePickerScreen({ navigation }: Props) {

  const handleModeSelect = async (modeId: ScavengerHuntMode) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Save selected mode for next time
    try {
      await AsyncStorage.setItem(STORAGE_KEY_MODE, modeId);
    } catch (error) {
      if (__DEV__) {
        console.log('Error saving hunt mode:', error);
      }
    }

    // Immediately start the game
    navigation.navigate('ScavengerHuntPlay', { mode: modeId });
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
        <Text style={styles.headerTitle}>Scavenger Hunt</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Pick a location to start your hunt!</Text>

        {/* Mode Grid */}
        <View style={styles.grid}>
          {scavengerHuntModes.map((mode) => (
            <TouchableOpacity
              key={mode.id}
              style={styles.modeCard}
              onPress={() => handleModeSelect(mode.id)}
              activeOpacity={0.7}
            >
              <Icon name={mode.icon} size={64} style={styles.modeIcon} />
              <Text style={styles.modeName}>{mode.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: '#EDF2FF',
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
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  modeCard: {
    width: '48%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6,
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6,
    borderBottomColor: colors.border.black,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    position: 'relative',
  },
  modeIcon: {
    marginBottom: 12,
  },
  modeName: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
