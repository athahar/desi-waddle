// jest.setup.js
// Setup file for Jest tests

// Mock expo-haptics
jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn().mockResolvedValue(undefined),
  notificationAsync: jest.fn().mockResolvedValue(undefined),
  ImpactFeedbackStyle: {
    Light: 'light',
    Medium: 'medium',
    Heavy: 'heavy',
  },
  NotificationFeedbackType: {
    Success: 'success',
    Warning: 'warning',
    Error: 'error',
  },
}));

// Mock expo-sensors
jest.mock('expo-sensors', () => ({
  Accelerometer: {
    addListener: jest.fn(() => ({ remove: jest.fn() })),
    setUpdateInterval: jest.fn(),
  },
}));

// Mock expo-screen-orientation
jest.mock('expo-screen-orientation', () => ({
  lockAsync: jest.fn().mockResolvedValue(undefined),
  unlockAsync: jest.fn().mockResolvedValue(undefined),
  OrientationLock: {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT: 'PORTRAIT',
  },
}));

// Mock expo-keep-awake
jest.mock('expo-keep-awake', () => ({
  useKeepAwake: jest.fn(),
}));

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn().mockResolvedValue(undefined),
  getItem: jest.fn().mockResolvedValue(null),
  removeItem: jest.fn().mockResolvedValue(undefined),
  clear: jest.fn().mockResolvedValue(undefined),
}));

// Suppress console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};
