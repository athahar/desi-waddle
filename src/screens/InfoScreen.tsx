import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import * as StoreReview from 'expo-store-review';
import { NavigationProps } from '../types/game';
import { fonts } from '../styles/fonts';
import colors from '../styles/colors';
import { useDevModeStore } from '../devlog/devMode';
import {
  trackAboutPageViewed,
  trackRateAppTapped,
  trackFeedbackTapped,
  trackStickersTapped,
} from '../services/analytics';

interface Props extends NavigationProps {}

export default function InfoScreen({ navigation }: Props) {
  const { togglePanel } = useDevModeStore();

  // Track screen view on mount
  useEffect(() => {
    trackAboutPageViewed();
  }, []);

  const handleRateApp = async () => {
    // Track analytics event
    await trackRateAppTapped();
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    const appStoreUrl = 'https://apps.apple.com/app/id6753095421';

    try {
      // Try native in-app review first (best UX)
      const isAvailable = await StoreReview.isAvailableAsync();
      if (isAvailable) {
        await StoreReview.requestReview();
      } else {
        // Fallback to App Store URL
        const canOpen = await Linking.canOpenURL(appStoreUrl);
        if (canOpen) {
          await Linking.openURL(appStoreUrl);
        } else {
          Alert.alert(
            'Rate This App',
            'Thank you for wanting to rate our app! Please visit the App Store to leave a review.',
            [{ text: 'OK' }]
          );
        }
      }
    } catch (error) {
      if (__DEV__) {
        console.error('Error requesting review:', error);
      }
      // Final fallback if everything fails
      try {
        await Linking.openURL(appStoreUrl);
      } catch (urlError) {
        Alert.alert(
          'Rate This App',
          'Thank you for wanting to rate our app! Please visit the App Store to leave a review.',
          [{ text: 'OK' }]
        );
      }
    }
  };

  const handleSendFeedback = async () => {
    // Track analytics event
    await trackFeedbackTapped();

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    const email = 'kidsgameslearnandplay@gmail.com';
    const subject = 'Desi Charades: Feedback';
    const body = 'Hi! I wanted to share some feedback about the app:\n\n';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      const canOpen = await Linking.canOpenURL(mailtoUrl);
      if (canOpen) {
        await Linking.openURL(mailtoUrl);
      } else {
        Alert.alert(
          'Email App Not Available',
          `Please send your feedback to:\n\n${email}`,
          [{ text: 'OK', style: 'cancel' }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Email App Not Available',
        `Please send your feedback to:\n\n${email}`
      );
    }
  };

  const handleGetStickers = async () => {
    // Track analytics event
    await trackStickersTapped();

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    // TODO: Add stickers link when available
    Alert.alert(
      'Coming Soon!',
      'Stickers will be available soon. Stay tuned!',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../assets/DesiGames/icon-Back.png')}
            style={styles.backButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Description */}
        <Text style={styles.description}>
          This app was designed by <Text style={styles.italic}>desis</Text>, for{' '}
          <Text style={styles.italic}>desis</Text>.
        </Text>

        {/* Rate This App Card */}
        <TouchableOpacity
          style={[styles.card, styles.ratingCard]}
          onPress={handleRateApp}
          activeOpacity={0.8}
        >
          <Image
            source={require('../../assets/DesiGames/icon-rating-stars.png')}
            style={styles.starsImage}
            resizeMode="contain"
          />
          <Text style={styles.rateText}>Rate this app</Text>
        </TouchableOpacity>

        {/* Feedback Card */}
        <View style={[styles.card, styles.feedbackCard]}>
          <Text style={styles.feedbackMessage}>
            Got a <Text style={styles.italic}>dhinchaak</Text> idea to make this app better? We read
            every message!
          </Text>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendFeedback}
            activeOpacity={0.8}
          >
            <Text style={styles.sendButtonText}>Send Feedback</Text>
          </TouchableOpacity>
        </View>

        {/* Stickers Card */}
        <TouchableOpacity
          style={[styles.card, styles.stickersCard]}
          onPress={handleGetStickers}
          activeOpacity={0.8}
        >
          <Text style={styles.stickersTitle}>Love the designs?</Text>
          <Text style={styles.stickersLink}>Get stickers</Text>
        </TouchableOpacity>

        {/* Developer Section (only visible in __DEV__) */}
        {__DEV__ && (
          <View style={[styles.card, styles.devCard]}>
            <Text style={styles.devTitle}>Developer</Text>
            <Text style={styles.devDescription}>
              Access developer console to view deck manager sessions, event logs, and export history.
            </Text>

            <TouchableOpacity
              style={styles.devPanelButton}
              onPress={togglePanel}
              activeOpacity={0.8}
            >
              <Text style={styles.devPanelButtonText}>Open Dev Panel</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F2EDD3',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonImage: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  content: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },
  description: {
    fontSize: 18,
    fontFamily: fonts.lato.regular,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  italic: {
    fontStyle: 'italic',
  },
  card: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  ratingCard: {
    backgroundColor: '#FFC107',
  },
  starsImage: {
    width: 280,
    height: 60,
    marginBottom: 12,
  },
  rateText: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  feedbackCard: {
    backgroundColor: '#66BB6A',
  },
  feedbackMessage: {
    fontSize: 18,
    fontFamily: fonts.lato.regular,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: colors.border.black,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
  },
  sendButtonText: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  stickersCard: {
    backgroundColor: '#CE93D8',
  },
  stickersTitle: {
    fontSize: 20,
    fontFamily: fonts.lato.regular,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  stickersLink: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  devCard: {
    backgroundColor: '#E3F2FD',
    borderWidth: 2,
    borderColor: colors.border.card,
  },
  devTitle: {
    fontSize: 20,
    fontFamily: fonts.inter.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 12,
  },
  devDescription: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  devPanelButton: {
    backgroundColor: colors.border.black,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    width: '100%',
  },
  devPanelButtonText: {
    fontSize: 16,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
  },
});
