// PostHog Analytics Service
// Privacy-first analytics following COPPA compliance
// Uses IDFV (Identifier for Vendor) - no ATT required

import { PostHog } from 'posthog-react-native';
import * as Application from 'expo-application';
import * as Device from 'expo-device';

// Singleton PostHog instance
let posthogInstance: PostHog | null = null;

/**
 * Set PostHog instance from usePostHog hook
 * Call this once during app initialization
 */
export const setPostHogInstance = async (instance: PostHog): Promise<void> => {
  posthogInstance = instance;

  // Get device ID using IDFV (privacy-friendly, no ATT required)
  const userId =
    (await Application.getAndroidId()) ||
    (await Application.getIosIdForVendorAsync()) ||
    'anonymous';

  // Identify user with device properties (no personal data)
  await instance.identify(userId, {
    app_name: 'desi-charades',
    app_bundle_id: 'com.desiwaddle.charades',
    app_version: Application.nativeApplicationVersion,
    app_build: Application.nativeBuildVersion,
    device_type: Device.deviceType,
    os_name: Device.osName,
    os_version: Device.osVersion,
    platform: 'ios',
  });

  if (__DEV__) {
    console.log('[Analytics] PostHog initialized with user:', userId);
    console.log('[Analytics] App: desi-charades (com.desiwaddle.charades)');
  }
};

/**
 * Track a custom event
 * Automatically adds app context to all events
 */
export const trackEvent = async (
  eventName: string,
  properties?: Record<string, any>
): Promise<void> => {
  if (!posthogInstance) {
    if (__DEV__) {
      console.log('[Analytics] Event not tracked (PostHog not initialized):', eventName, properties);
    }
    return;
  }

  // Add app context to all events
  const eventProperties = {
    app_name: 'desi-charades',
    app_bundle_id: 'com.desiwaddle.charades',
    platform: 'ios',
    ...properties,
  };

  posthogInstance.capture(eventName, eventProperties);

  if (__DEV__) {
    console.log('[Analytics] Event tracked:', eventName, eventProperties);
  }
};

/**
 * Track screen view
 */
export const trackScreen = async (screenName: string): Promise<void> => {
  await trackEvent('screen_view', { screen_name: screenName });
};

/**
 * Track app opened
 */
export const trackAppOpened = async (): Promise<void> => {
  await trackEvent('app_opened', {
    timestamp: new Date().toISOString(),
  });
};

// ============================================
// GAME TRACKING - Charades
// ============================================

/**
 * Track when a charades game session starts
 */
export const trackCharadesStarted = async (
  packId: string,
  categoryId: string
): Promise<void> => {
  await trackEvent('charades_started', {
    game_name: 'charades',
    pack_id: packId,
    category_id: categoryId,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track when a charades game session completes
 */
export const trackCharadesCompleted = async (
  packId: string,
  categoryId: string,
  score: number,
  totalAttempts: number,
  durationSeconds: number
): Promise<void> => {
  await trackEvent('charades_completed', {
    game_name: 'charades',
    pack_id: packId,
    category_id: categoryId,
    score,
    total_attempts: totalAttempts,
    duration_seconds: durationSeconds,
    accuracy: totalAttempts > 0 ? (score / totalAttempts) * 100 : 0,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track when a charades game is abandoned (user quits early)
 */
export const trackCharadesAbandoned = async (
  packId: string,
  categoryId: string,
  score: number,
  totalAttempts: number,
  durationSeconds: number
): Promise<void> => {
  await trackEvent('charades_abandoned', {
    game_name: 'charades',
    pack_id: packId,
    category_id: categoryId,
    score,
    total_attempts: totalAttempts,
    duration_seconds: durationSeconds,
    timestamp: new Date().toISOString(),
  });
};

// ============================================
// GAME TRACKING - Guess the Movie
// ============================================

/**
 * Track when a Guess the Movie game session starts
 */
export const trackGuessMovieStarted = async (
  packId: string
): Promise<void> => {
  await trackEvent('guess_movie_started', {
    game_name: 'guess_movie',
    pack_id: packId,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track when a Guess the Movie game session completes
 */
export const trackGuessMovieCompleted = async (
  packId: string,
  score: number,
  totalRounds: number,
  durationSeconds: number
): Promise<void> => {
  await trackEvent('guess_movie_completed', {
    game_name: 'guess_movie',
    pack_id: packId,
    score,
    total_rounds: totalRounds,
    duration_seconds: durationSeconds,
    accuracy: totalRounds > 0 ? (score / totalRounds) * 100 : 0,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track when a Guess the Movie game is abandoned
 */
export const trackGuessMovieAbandoned = async (
  packId: string,
  score: number,
  totalRounds: number,
  durationSeconds: number
): Promise<void> => {
  await trackEvent('guess_movie_abandoned', {
    game_name: 'guess_movie',
    pack_id: packId,
    score,
    total_rounds: totalRounds,
    duration_seconds: durationSeconds,
    timestamp: new Date().toISOString(),
  });
};

// ============================================
// ABOUT PAGE TRACKING
// ============================================

/**
 * Track when user views About page
 */
export const trackAboutPageViewed = async (): Promise<void> => {
  await trackScreen('about');
};

/**
 * Track when user taps "Rate this app"
 */
export const trackRateAppTapped = async (): Promise<void> => {
  await trackEvent('rate_app_tapped', {
    source: 'about_page',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track when user taps "Send Feedback"
 */
export const trackFeedbackTapped = async (): Promise<void> => {
  await trackEvent('feedback_tapped', {
    source: 'about_page',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track when user taps "Get stickers"
 */
export const trackStickersTapped = async (): Promise<void> => {
  await trackEvent('stickers_tapped', {
    source: 'about_page',
    timestamp: new Date().toISOString(),
  });
};

// ============================================
// NAVIGATION TRACKING
// ============================================

/**
 * Track pack selection
 */
export const trackPackSelected = async (packId: string): Promise<void> => {
  await trackEvent('pack_selected', {
    pack_id: packId,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track category selection
 */
export const trackCategorySelected = async (
  packId: string,
  categoryId: string
): Promise<void> => {
  await trackEvent('category_selected', {
    pack_id: packId,
    category_id: categoryId,
    timestamp: new Date().toISOString(),
  });
};
