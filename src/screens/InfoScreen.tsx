import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import * as StoreReview from 'expo-store-review';
import { NavigationProps } from '../types/game';
import { fonts } from '../styles/fonts';
import colors from '../styles/colors';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

export default function InfoScreen({ navigation }: Props) {
  const handleRateApp = async () => {
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
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    const email = 'kidsgameslearnandplay@gmail.com';
    const subject = 'Waddle Play: Feedback';
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={styles.title}>About</Text>

        {/* Description */}
        <Text style={styles.description}>
          This app was designed for restaurant waits, car rides, family time, rainy days and learning together!  Suitable for ages 4-99!
        </Text>

        {/* Rate This App Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={handleRateApp}
          activeOpacity={0.8}
        >
          <View style={styles.starsContainer}>
            <Icon name="star" size={48} />
            <Icon name="star" size={48} />
            <Icon name="star" size={48} />
            <Icon name="star" size={48} />
            <Icon name="star" size={48} />
          </View>
          <Text style={styles.rateText}>Rate this app</Text>
        </TouchableOpacity>

        {/* Feedback Card */}
        <View style={styles.card}>
          <Text style={styles.feedbackMessage}>
            Have an idea on improving this app? We read every message!
          </Text>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendFeedback}
            activeOpacity={0.8}
          >
            <Text style={styles.sendButtonText}>Send Feedback</Text>
          </TouchableOpacity>
          <Text style={styles.emailText}>kidsgameslearnandplay@gmail.com</Text>
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
  content: {
    padding: 16,
    paddingTop: 24,
    paddingBottom: 32,
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6,
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6,
    borderBottomColor: colors.border.black,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  rateText: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textAlign: 'center',
  },
  feedbackMessage: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: colors.border.black,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  sendButtonText: {
    fontSize: 18,
    fontFamily: fonts.inter.bold,
    color: colors.primary.white,
  },
  emailText: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
