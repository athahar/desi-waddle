import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon, { IconName } from '../components/Icon';

interface Props extends NavigationProps {}

interface GameInfo {
  id: string;
  title: string;
  icon: IconName;
  description: string;
  gameType: 'animalGame' | 'countryGame' | 'wouldYouRather' | 'storyStarter' | 'simonSays' | 'scavengerHunt' | 'charades';
  route: string;
  backgroundColor: string; // Pastel color for card
  enabled: boolean; // Feature flag to enable/disable game
}

// Feature flags for games
const FEATURE_FLAGS = {
  SIMON_SAYS_ENABLED: false, // Set to true to enable Simon Says in this release
};

const games: GameInfo[] = [
  {
    id: 'charades',
    title: 'Charades',
    icon: 'theater',
    description: 'Act fast, guess right',
    gameType: 'charades',
    route: 'CharadesCategory',
    backgroundColor: colors.pastel.lightPurple,
    enabled: true,
  },
];

function PackListScreen({ navigation }: Props) {
  useEffect(() => {
    if (__DEV__) {
      console.log('PackListScreen rendered');
    }
  }, []);


  const handleGamePress = async (game: GameInfo) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    if (__DEV__) {
      console.log(`Navigating to ${game.title}`);
    }

    // Navigate to the game
    navigation.navigate(game.route as any);
  };


  const renderGameCard = useCallback((game: GameInfo) => {
    return (
      <TouchableOpacity
        key={game.id}
        style={styles.gameCard}
        onPress={() => handleGamePress(game)}
        activeOpacity={0.7}
      >
        <Icon name={game.icon} size={56} style={styles.gameIcon} />
        <View style={styles.gameInfo}>
          <View style={styles.gameTitleContainer}>
            <Text style={styles.gameTitle}>
              {game.title}
            </Text>
          </View>
          <Text style={styles.gameDescription}>
            {game.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        </View>

        <View style={styles.gamesContainer}>
          {games.filter(game => game.enabled ?? true).map(renderGameCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default React.memo(PackListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  content: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 8,
  },
  resetTouchable: {
    alignItems: 'center',
    padding: 10,
  },
  subtitle: {
    fontSize: 22,
    color: colors.primary.teal,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  devHint: {
    fontSize: 12,
    color: colors.text.light,
    textAlign: 'center',
    marginTop: 4,
    fontStyle: 'italic',
  },
  seasonalBanner: {
    backgroundColor: colors.primary.teal,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  seasonalText: {
    fontSize: 16,
    color: colors.primary.white,
    fontWeight: '600',
  },
  gamesContainer: {
    flex: 1,
  },
  gameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 16,
    marginBottom: 17,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar like timesheets app
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  gameIcon: {
    marginRight: 16,
  },
  gameInfo: {
    flex: 1,
  },
  gameTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  gameTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    flex: 1,
  },
  gameDescription: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    lineHeight: 22,
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  infoDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    marginBottom: 16,
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  devResetSection: {
    marginTop: 32,
    marginBottom: 16,
  },
  devResetButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginHorizontal: 32,
  },
  devResetButtonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
});