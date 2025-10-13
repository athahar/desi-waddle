# Test Suite for Charades Game

This directory contains comprehensive tests for the Charades game functionality, focusing on the accelerometer-based gameplay and navigation flows.

## Test Files

### 1. `accelerometer.test.ts` - Unit Tests
Tests the state machine logic for accelerometer-based tilt detection.

**Coverage:**
- ✅ Single fire when holding down tilt (prevents machine-gun triggers)
- ✅ Requires return to neutral before another trigger
- ✅ Up tilt triggers pass, not correct
- ✅ Cooldown prevents rapid fire
- ✅ Short tilt (less than dwell time) does not trigger
- ✅ Hysteresis prevents trigger at border
- ✅ Alternating tilts work correctly

**Key Tested Behaviors:**
- State machine: NEUTRAL → ARMED → TRIGGER
- Dwell time: 250ms hold required
- Cooldown: 800ms lockout after trigger
- Hysteresis bands: arm threshold (0.55) and neutral threshold (0.25)

### 2. `charades.finish.test.tsx` - Component Tests
Tests the Finish button behavior and sensor/haptics disabling.

**Coverage:**
- ✅ Finish button disables sensors immediately
- ✅ Finish prevents further haptics after pressed
- ✅ Finish navigates to results with correct params
- ✅ Finish stops timer countdown

**Key Tested Behaviors:**
- Sensors stop listening after Finish
- Haptics are disabled after Finish
- Navigation uses reset() to ensure proper back navigation
- Timer countdown stops when finishing

### 3. `results.nav.test.tsx` - Component Tests
Tests the CharadesResults screen navigation behavior.

**Coverage:**
- ✅ Home button navigates to Home screen
- ✅ Play Again button navigates to CharadesCategory
- ✅ Play Again triggers haptic feedback
- ✅ Displays correct score message (singular/plural)
- ✅ Displays correct and incorrect attempts with proper styling
- ✅ Back navigation goes to CharadesCategory (via reset)

**Key Tested Behaviors:**
- Navigation from results screen
- Score display formatting
- Attempt list rendering
- Haptic feedback on interactions

## Running Tests

### Run all tests
```bash
npm test
```

### Run specific test file
```bash
npm test accelerometer.test.ts
npm test charades.finish.test.tsx
npm test results.nav.test.tsx
```

### Run with coverage
```bash
npm test -- --coverage
```

### Watch mode (run tests on file changes)
```bash
npm test -- --watch
```

## Test Configuration

- **Framework**: Jest with jest-expo preset
- **Testing Library**: @testing-library/react-native
- **Setup**: `jest.setup.js` mocks expo modules
- **Config**: `jest.config.js` defines test patterns and coverage

## Mocked Dependencies

All Expo modules are mocked to allow tests to run without native dependencies:
- `expo-haptics` - Haptic feedback
- `expo-sensors` - Accelerometer
- `expo-screen-orientation` - Screen rotation
- `expo-keep-awake` - Keep screen awake
- `@react-native-async-storage/async-storage` - AsyncStorage

## Test Philosophy

These tests follow the ChatGPT specification for ensuring:
1. **State machine correctness** - Tilt detection doesn't repeat when holding
2. **Resource cleanup** - Sensors and haptics stop when appropriate
3. **Navigation integrity** - Back button flows work correctly
4. **User experience** - Haptics provide proper feedback

## Sanity Checklist (Pre-Merge)

Before merging Charades changes, verify:

- ✅ Hook hysteresis + dwell verified; holding angle doesn't retrigger
- ✅ Finish: stops sensors and haptics immediately; navigates with reset
- ✅ Results Home goes to CharadesCategory, never back to Play
- ✅ All screens wrapped in SafeAreaView
- ✅ Long screens use ScrollView with paddingBottom: 32
- ✅ All console statements wrapped in `if (__DEV__)`

## Adding New Tests

When adding new Charades features, ensure tests cover:
1. **Unit tests** for pure logic (like state machines)
2. **Component tests** for UI behavior and user interactions
3. **Integration tests** for multi-step flows
4. **Edge cases** like empty states, errors, and boundary conditions

## CI/CD Integration

These tests should be run:
- On every pull request
- Before merging to main
- As part of pre-deployment checks

## Troubleshooting

**Tests failing with module not found:**
- Check `transformIgnorePatterns` in jest.config.js
- Ensure all expo modules are mocked in jest.setup.js

**Async tests timing out:**
- Use `waitFor()` from @testing-library/react-native
- Increase timeout with `jest.setTimeout(10000)`

**Mock not working:**
- Clear mocks with `jest.clearAllMocks()` in beforeEach
- Verify mock path matches actual import path
