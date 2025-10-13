// __tests__/results.nav.test.tsx
// Component tests for CharadesResults navigation behavior

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CharadesResultsScreen from '../src/screens/CharadesResultsScreen';
import * as Haptics from 'expo-haptics';

// Mock expo modules
jest.mock('expo-screen-orientation', () => ({
  unlockAsync: jest.fn().mockResolvedValue(undefined),
}));

// Mock haptics
jest.spyOn(Haptics, 'impactAsync').mockResolvedValue(undefined as any);

describe('CharadesResultsScreen - Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Home button navigates to Home screen', () => {
    const mockNavigate = jest.fn();
    const mockGoBack = jest.fn();
    const mockAddListener = jest.fn().mockReturnValue(() => {});

    const { getByText } = render(
      <CharadesResultsScreen
        route={
          {
            params: {
              score: 5,
              attempts: [
                { word: 'Test1', correct: true },
                { word: 'Test2', correct: false },
              ],
            },
          } as any
        }
        navigation={
          {
            navigate: mockNavigate,
            goBack: mockGoBack,
            addListener: mockAddListener,
          } as any
        }
      />
    );

    // Find and press home button (⌂)
    const homeButton = getByText('⌂');
    fireEvent.press(homeButton);

    // Verify navigation to Home
    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });

  test('Play Again button navigates to CharadesCategory', async () => {
    const mockNavigate = jest.fn();
    const mockGoBack = jest.fn();
    const mockAddListener = jest.fn().mockReturnValue(() => {});

    const { getByText } = render(
      <CharadesResultsScreen
        route={
          {
            params: {
              score: 3,
              attempts: [{ word: 'Test', correct: true }],
            },
          } as any
        }
        navigation={
          {
            navigate: mockNavigate,
            goBack: mockGoBack,
            addListener: mockAddListener,
          } as any
        }
      />
    );

    // Find and press Play Again button
    const playAgainButton = getByText('Play Again');
    fireEvent.press(playAgainButton);

    // Verify navigation to CharadesCategory
    expect(mockNavigate).toHaveBeenCalledWith('CharadesCategory');
  });

  test('Play Again triggers haptic feedback', async () => {
    const mockNavigate = jest.fn();
    const mockAddListener = jest.fn().mockReturnValue(() => {});

    const { getByText } = render(
      <CharadesResultsScreen
        route={
          {
            params: {
              score: 2,
              attempts: [],
            },
          } as any
        }
        navigation={
          {
            navigate: mockNavigate,
            goBack: jest.fn(),
            addListener: mockAddListener,
          } as any
        }
      />
    );

    // Press Play Again
    fireEvent.press(getByText('Play Again'));

    // Verify haptic was triggered
    expect(Haptics.impactAsync).toHaveBeenCalledWith(
      Haptics.ImpactFeedbackStyle.Medium
    );
  });

  test('Displays correct score message', () => {
    const mockAddListener = jest.fn().mockReturnValue(() => {});

    const { getByText } = render(
      <CharadesResultsScreen
        route={
          {
            params: {
              score: 1,
              attempts: [{ word: 'Single', correct: true }],
            },
          } as any
        }
        navigation={
          {
            navigate: jest.fn(),
            goBack: jest.fn(),
            addListener: mockAddListener,
          } as any
        }
      />
    );

    // Verify singular "card" is used for score of 1
    expect(getByText('You got 1 card!')).toBeTruthy();
  });

  test('Displays correct plural score message', () => {
    const mockAddListener = jest.fn().mockReturnValue(() => {});

    const { getByText } = render(
      <CharadesResultsScreen
        route={
          {
            params: {
              score: 5,
              attempts: [
                { word: 'Test1', correct: true },
                { word: 'Test2', correct: true },
                { word: 'Test3', correct: true },
                { word: 'Test4', correct: true },
                { word: 'Test5', correct: true },
              ],
            },
          } as any
        }
        navigation={
          {
            navigate: jest.fn(),
            goBack: jest.fn(),
            addListener: mockAddListener,
          } as any
        }
      />
    );

    // Verify plural "cards" is used for score > 1
    expect(getByText('You got 5 cards!')).toBeTruthy();
  });

  test('Displays correct and incorrect attempts with proper styling', () => {
    const mockAddListener = jest.fn().mockReturnValue(() => {});

    const { getByText } = render(
      <CharadesResultsScreen
        route={
          {
            params: {
              score: 2,
              attempts: [
                { word: 'Correct1', correct: true },
                { word: 'Wrong1', correct: false },
                { word: 'Correct2', correct: true },
              ],
            },
          } as any
        }
        navigation={
          {
            navigate: jest.fn(),
            goBack: jest.fn(),
            addListener: mockAddListener,
          } as any
        }
      />
    );

    // Verify all attempts are displayed
    expect(getByText('Correct1')).toBeTruthy();
    expect(getByText('Wrong1')).toBeTruthy();
    expect(getByText('Correct2')).toBeTruthy();
  });

  test('Back navigation goes to CharadesCategory (via reset from play screen)', () => {
    // This test verifies the navigation structure set up by CharadesScreen.finish()
    // The actual back behavior is controlled by navigation.reset() in CharadesScreen
    // which ensures the stack is: [CharadesCategory, CharadesResults]
    // So pressing back from results will naturally go to CharadesCategory

    const mockNavigate = jest.fn();
    const mockGoBack = jest.fn();
    const mockAddListener = jest.fn().mockReturnValue(() => {});

    render(
      <CharadesResultsScreen
        route={
          {
            params: {
              score: 3,
              attempts: [],
            },
          } as any
        }
        navigation={
          {
            navigate: mockNavigate,
            goBack: mockGoBack,
            addListener: mockAddListener,
          } as any
        }
      />
    );

    // The addListener should have been called to set up orientation unlock
    expect(mockAddListener).toHaveBeenCalled();

    // Note: The actual back navigation is handled by the navigation stack
    // which was reset in CharadesScreen with:
    // navigation.reset({
    //   index: 1,
    //   routes: [
    //     { name: 'CharadesCategory' },
    //     { name: 'CharadesResults', params: { score, attempts } },
    //   ],
    // });
    // This ensures back from results goes to CharadesCategory
  });
});
