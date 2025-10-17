const path = require('path');

module.exports = {
  expo: {
    name: 'Charadesi',
    slug: 'desi-waddle',
    version: '0.1.0',
    orientation: 'portrait',
    icon: path.resolve(__dirname, './assets/icon.png'),
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: path.resolve(__dirname, './assets/splash-screen.png'),
      resizeMode: 'contain',
      backgroundColor: '#F5EFE6',
    },
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'com.desiwaddle.charades',
      buildNumber: '3',
      icon: path.resolve(__dirname, './assets/icon.png'),
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
        UIViewControllerBasedStatusBarAppearance: false,
        UIRequiredDeviceCapabilities: ['armv7'],
        UIDeviceFamily: [1],
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.desiwaddle.charades',
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    assetBundlePatterns: ['**/*'],
    plugins: ['expo-localization', 'expo-font', 'expo-secure-store'],
    extra: {
      eas: {
        projectId: '850609f7-3aa4-443c-99f0-0561fd1858cc',
      },
      // PostHog Analytics Configuration
      posthog: {
        apiKey: process.env.EXPO_PUBLIC_POSTHOG_API_KEY || 'phc_ykO5YVqj9fkao7VoVWlbJgyCi48xhD1y4WDNE6SfXdP',
        host: process.env.EXPO_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        enabled: process.env.EXPO_PUBLIC_ENABLE_ANALYTICS !== 'false', // Enabled by default
      },
    },
    owner: 'athahar',
  },
};
