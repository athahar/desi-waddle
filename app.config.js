const path = require('path');

module.exports = {
  expo: {
    name: 'Desi Waddle',
    slug: 'desi-waddle-charades',
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
      buildNumber: '1',
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
    },
    owner: 'athahar',
  },
};
