// screens/CharadesResultsScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Haptics from 'expo-haptics';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import { NavigationProps } from '../types/game';

interface Attempt {
  word: string;
  correct: boolean;
}

interface Route {
  params: { score: number; attempts: Attempt[] };
}

interface Props extends NavigationProps {
  route: Route;
}

export default function CharadesResultsScreen({ route, navigation }: Props) {
  const { score, attempts } = route.params ?? { score: 0, attempts: [] };

  // Unlock orientation when results screen loads (switch back to portrait)
  useEffect(() => {
    const unlockOrientation = async () => {
      try {
        await ScreenOrientation.unlockAsync();
      } catch (error) {
        if (__DEV__) {
          console.log('Screen orientation unlock error:', error);
        }
      }
    };

    unlockOrientation();
  }, []);

  const handleClose = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // Navigate back to category selection page
    navigation.navigate('PackList');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Results</Text>
        <TouchableOpacity
          onPress={handleClose}
          style={styles.closeButton}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../assets/DesiGames/icon-close-white.png')}
            style={styles.closeIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          You got {score} {score === 1 ? 'card' : 'cards'}!
        </Text>

        <View style={styles.attemptsList}>
          {attempts.map((a, i) => (
            <Text
              key={`${a.word}-${i}`}
              style={[styles.item, !a.correct && styles.itemDim]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {a.word}
            </Text>
          ))}
        </View>

        <View style={styles.homeIndicatorSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1761FF', // blue
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: '#1761FF',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  attemptsList: {
    marginBottom: 80,
  },
  item: {
    fontSize: 24,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
    textAlign: 'center',
    marginVertical: 10,
  },
  itemDim: {
    opacity: 0.4,
    textDecorationLine: 'line-through',
  },
  homeIndicatorSpacer: {
    height: 10,
  },
});
