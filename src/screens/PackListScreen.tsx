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
import { Pack, GameType } from '../types/content';
import { getPacksByGameType } from '../data';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon, { IconName } from '../components/Icon';

interface Props extends NavigationProps {}

function PackListScreen({ navigation, route }: Props) {
  // Get game type from route params (default to 'charades')
  const gameType = route?.params?.gameType || 'charades';

  // Get packs for this game type
  const packs = useMemo(() => {
    return getPacksByGameType(gameType as GameType);
  }, [gameType]);

  useEffect(() => {
    if (__DEV__) {
      console.log('PackListScreen rendered for gameType:', gameType);
      console.log('Loaded packs:', packs.length);
    }
  }, [gameType, packs]);

  const handlePackPress = useCallback(async (pack: Pack) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    if (__DEV__) {
      console.log(`Pack selected: ${pack.name}`);
    }

    // For charades packs, navigate to PackDetail
    // For guess-movie packs, navigate directly to instructions
    if (pack.gameType === 'charades') {
      navigation.navigate('PackDetail', { packId: pack.id });
    } else {
      navigation.navigate('GuessMovieInstructions');
    }
  }, [navigation]);

  const renderPackCard = useCallback((pack: Pack) => {
    return (
      <TouchableOpacity
        key={pack.id}
        style={styles.packCard}
        onPress={() => handlePackPress(pack)}
        activeOpacity={0.7}
      >
        <Icon name={pack.icon || 'theater'} size={56} style={styles.packIcon} />
        <View style={styles.packInfo}>
          <View style={styles.packTitleContainer}>
            <Text style={styles.packTitle}>{pack.name}</Text>
            {pack.is_paid && (
              <Text style={styles.lockIcon}>🔒</Text>
            )}
          </View>
          <Text style={styles.packDescription}>{pack.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }, [handlePackPress]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {gameType === 'charades' ? 'Choose a Pack' : 'Bollywood Dialogues'}
          </Text>
        </View>

        <View style={styles.packsContainer}>
          {packs.map(renderPackCard)}
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
    marginBottom: 24,
    marginTop: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  packsContainer: {
    flex: 1,
  },
  packCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 16,
    marginBottom: 17,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
  },
  packIcon: {
    marginRight: 16,
  },
  packInfo: {
    flex: 1,
  },
  packTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  packTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    flex: 1,
  },
  lockIcon: {
    fontSize: 16,
    marginLeft: 8,
  },
  packDescription: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    lineHeight: 22,
  },
});