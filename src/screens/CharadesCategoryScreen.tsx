import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import * as ScreenOrientation from 'expo-screen-orientation';
import { NavigationProps } from '../types/game';
import { fonts } from '../styles/fonts';

interface Props extends NavigationProps {
  route: {
    params: {
      categoryId: string;
      categoryName: string;
    };
  };
}

function CharadesCategoryScreen({ navigation, route }: Props) {
  const { categoryId, categoryName } = route.params;

  // Lock screen to landscape on mount
  useEffect(() => {
    const lockOrientation = async () => {
      try {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      } catch (error) {
        if (__DEV__) {
          console.log('Screen orientation lock error:', error);
        }
      }
    };

    lockOrientation();

    // Unlock on unmount
    return () => {
      ScreenOrientation.unlockAsync().catch((error) => {
        if (__DEV__) {
          console.log('Screen orientation unlock error:', error);
        }
      });
    };
  }, []);

  const handleBack = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }
    navigation.goBack();
  }, [navigation]);

  const handleStartGame = useCallback(async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    navigation.navigate('Charades', { category: categoryId });
  }, [navigation, categoryId]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBack}
        activeOpacity={0.7}
      >
        <Image
          source={require('../../assets/DesiGames/icon-Back.png')}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Header Title */}
      <Text style={styles.headerTitle}>Desi Charades</Text>

      <View style={styles.content}>
        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <View style={styles.instructionItem}>
            <Image
              source={require('../../assets/DesiGames/charades-hold-up.png')}
              style={styles.instructionImage}
              resizeMode="contain"
            />
            <Text style={styles.instructionText}>Hold at forehead</Text>
          </View>

          <View style={styles.instructionItem}>
            <Image
              source={require('../../assets/DesiGames/charades-correct.png')}
              style={styles.instructionImage}
              resizeMode="contain"
            />
            <Text style={styles.instructionText}>Tilt down for correct</Text>
          </View>

          <View style={styles.instructionItem}>
            <Image
              source={require('../../assets/DesiGames/charades-wrong.png')}
              style={styles.instructionImage}
              resizeMode="contain"
            />
            <Text style={styles.instructionText}>Tilt up to pass</Text>
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartGame}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(CharadesCategoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD3',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: '#000000',
    textAlign: 'center',
    zIndex: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  instructionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 600,
    marginBottom: 40,
  },
  instructionItem: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 12,
  },
  instructionImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  instructionText: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 18,
  },
  startButton: {
    backgroundColor: '#000000',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 60,
    minWidth: 300,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: '#FFFFFF',
  },
});
