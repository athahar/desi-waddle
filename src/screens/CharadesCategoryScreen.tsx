// screens/CharadesCategoryScreen.tsx
import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import * as Haptics from 'expo-haptics';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import { NavigationProps } from '../types/game';
import { charadesCategories, CharadesCategoryId } from '../data/charadesData';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

export default function CharadesCategoryScreen({ navigation }: Props) {
  const categoryStats = useMemo(() => {
    return charadesCategories.map((cat) => ({
      ...cat,
      count: cat.items.length,
    }));
  }, []);

  const startGame = async (category: CharadesCategoryId) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    navigation.navigate('Charades', { category });
  };

  const handleBack = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Simple goBack - pops to Home with correct animation
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
        <Text style={styles.headerTitle}>Charades</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Pick a category to act!</Text>

        <View style={styles.grid}>
          {/* Individual Categories */}
          {categoryStats.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={styles.card}
              onPress={() => startGame(cat.id)}
              activeOpacity={0.85}
            >
              <Icon name={cat.icon} size={64} style={styles.cardIcon} />
              <Text style={styles.cardTitle}>{cat.name}</Text>
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
    backgroundColor: '#DAEDF8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: '#DAEDF8',
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
    textAlign: 'center',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  subtitle: {
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
    marginBottom: 20,
  },
  card: {
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
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
