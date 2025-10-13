// screens/ScavengerHuntPlayScreen.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import { NavigationProps } from '../types/game';
import {
  scavengerHuntModes,
  getItemsByMode,
  ScavengerHuntMode,
  ScavengerHuntItem,
} from '../data/scavengerHuntData';
import { getNextItems, resetSession } from '../services/gameSessionService';
import Icon from '../components/Icon';

interface Route {
  params: {
    mode: ScavengerHuntMode;
  };
}

interface Props extends NavigationProps {
  route: Route;
}

const ROUND_SIZE = 20;

export default function ScavengerHuntPlayScreen({ route, navigation }: Props) {
  const { mode } = route.params;
  const modeInfo = scavengerHuntModes.find((m) => m.id === mode) || scavengerHuntModes[0];

  const [items, setItems] = useState<ScavengerHuntItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [foundCount, setFoundCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [slideAnim] = useState(new Animated.Value(1));

  const gameId = `scavenger_hunt_${mode}`;

  // Load items with session tracking per mode
  useEffect(() => {
    loadItems();
  }, [mode]);

  const loadItems = async () => {
    if (__DEV__) {
      console.log(`Loading Scavenger Hunt items for mode: ${mode}`);
    }

    try {
      const allItems = getItemsByMode(mode);

      if (allItems.length === 0) {
        if (__DEV__) {
          console.warn(`No items available for mode: ${mode}`);
        }
        setItems([]);
        setIsLoading(false);
        return;
      }

      // Get unused items from session (prevents repetition per mode)
      const unusedItems = await getNextItems(
        gameId,
        allItems,
        Math.min(ROUND_SIZE, allItems.length),
        (itemsToShuffle) => {
          // Fisher-Yates shuffle
          const shuffled = [...itemsToShuffle];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          return shuffled;
        }
      );

      setItems(unusedItems);
      setCurrentIndex(0);
      setFoundCount(0);
      setIsLoading(false);

      if (__DEV__) {
        console.log(`Loaded ${unusedItems.length} items for ${mode}`);
      }
    } catch (error) {
      if (__DEV__) {
        console.error('Error loading scavenger hunt items:', error);
      }
      setIsLoading(false);
    }
  };

  const currentItem = items[currentIndex];

  const handleFound = useCallback(async () => {
    if (!currentItem) return;

    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Success pulse animation
    Animated.sequence([
      Animated.timing(slideAnim, {
        toValue: 1.05,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Move to next item
      if (currentIndex + 1 < items.length) {
        setCurrentIndex(currentIndex + 1);
        setFoundCount(foundCount + 1);

        // Slide in new item
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        // Round complete
        setFoundCount(foundCount + 1);
        slideAnim.setValue(1);
      }
    });
  }, [currentItem, currentIndex, items.length, foundCount, slideAnim]);

  const handleSkip = useCallback(async () => {
    if (!currentItem) return;

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Slide left animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // Move to next item
      if (currentIndex + 1 < items.length) {
        setCurrentIndex(currentIndex + 1);

        // Slide in new item
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        // Round complete
        slideAnim.setValue(1);
      }
    });
  }, [currentItem, currentIndex, items.length, slideAnim]);

  const handleNewSet = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Reset session for this mode and reload
    await resetSession(gameId);
    setIsLoading(true);
    loadItems();
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading {modeInfo.name} items...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No items available</Text>
          <TouchableOpacity style={styles.completionButton} onPress={() => navigation.goBack()}>
            <Text style={styles.completionButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (!currentItem) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.completeContainer}>
          <Text style={styles.completeTitle}>Hunt Complete!</Text>
          <Text style={styles.completeScore}>
            You found {foundCount} out of {items.length} items
          </Text>
          <TouchableOpacity style={styles.newSetButton} onPress={handleNewSet}>
            <Text style={styles.newSetButtonText}>New Set</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.completionButton} onPress={() => navigation.goBack()}>
            <Text style={styles.completionButtonText}>Choose Another Mode</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

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
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Scavenger Hunt</Text>
          <Text style={styles.headerSubtitle}>at {modeInfo.name}</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Item Card */}
        <Animated.View
          style={[
            styles.itemCard,
            {
              opacity: slideAnim,
              transform: [
                {
                  translateX: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-50, 0],
                  }),
                },
                { scale: slideAnim },
              ],
            },
          ]}
        >
          <Text style={styles.findLabel}>{currentItem.description}</Text>
          {currentItem.hint && (
            <View style={styles.hintContainer}>
              <Icon name="bulb" size={20} />
              <Text style={styles.itemHint}>{currentItem.hint}</Text>
            </View>
          )}
        </Animated.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.progressText}>
            {currentIndex + 1}/{items.length}
          </Text>
          <TouchableOpacity onPress={handleNewSet}>
            <Text style={styles.newSetLink}>New Set</Text>
          </TouchableOpacity>
        </View>

        {/* Next Item Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleFound} activeOpacity={0.8}>
          <Text style={styles.nextButtonText}>Next Item</Text>
        </TouchableOpacity>
      </View>
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
    overflow: 'hidden',
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    marginTop: 2,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    fontFamily: fonts.inter.bold,
    color: colors.text.primary,
    textAlign: 'center',
  },
  completeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  completeTitle: {
    fontSize: 32,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  completeScore: {
    fontSize: 20,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    marginBottom: 32,
    textAlign: 'center',
  },
  itemCard: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6,
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6,
    borderBottomColor: colors.border.black,
    padding: 32,
    marginBottom: 24,
    minHeight: 180,
    justifyContent: 'center',
  },
  findLabel: {
    fontSize: 24,
    fontFamily: fonts.inter.semiBold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 16,
  },
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  itemHint: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    lineHeight: 22,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  progressText: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
  },
  newSetLink: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textDecorationLine: 'underline',
  },
  nextButton: {
    backgroundColor: colors.border.black,
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 'auto',
  },
  nextButtonText: {
    fontSize: 18,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
  },
  newSetButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 12,
  },
  newSetButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary.white,
  },
  completionButton: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  completionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary.white,
  },
});
