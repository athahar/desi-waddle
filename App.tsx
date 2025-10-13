import React, { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import * as Haptics from 'expo-haptics';
import {
  Sansation_400Regular,
  Sansation_700Bold,
} from '@expo-google-fonts/sansation';
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { fonts } from './src/styles/fonts';
import GameModeScreen from './src/screens/GameModeScreen';
import PackListScreen from './src/screens/PackListScreen';
import PackDetailScreen from './src/screens/PackDetailScreen';
import InfoScreen from './src/screens/InfoScreen';
import CharadesCategoryScreen from './src/screens/CharadesCategoryScreen';
import CharadesScreen from './src/screens/CharadesScreen';
import CharadesResultsScreen from './src/screens/CharadesResultsScreen';
import GuessMovieInstructionsScreen from './src/screens/GuessMovieInstructionsScreen';
import GuessMoviePlayScreen from './src/screens/GuessMoviePlayScreen';
import GuessMovieResultsScreen from './src/screens/GuessMovieResultsScreen';
import DevConsoleScreen from './src/screens/DevConsoleScreen';
import Icon from './src/components/Icon';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    Sansation_400Regular,
    Sansation_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (__DEV__) {
    console.log('App starting in development mode');
  }

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const AppContent = () => {
    // Triple-tap activation for Dev Console
    const [tapCount, setTapCount] = useState(0);
    const tapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleHeaderPress = (navigation: any) => {
      // Only enable in development mode
      if (!__DEV__) return;

      const newTapCount = tapCount + 1;
      setTapCount(newTapCount);

      // Clear existing timeout
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }

      if (newTapCount === 3) {
        // Triple tap detected! Navigate to Dev Console
        try {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        } catch (error) {
          if (__DEV__) {
            console.log('Haptics error (non-critical):', error);
          }
        }
        navigation.navigate('DevConsole');
        setTapCount(0);
      } else {
        // Reset tap count after 500ms
        tapTimeoutRef.current = setTimeout(() => {
          setTapCount(0);
        }, 500);
      }
    };

    return (
    <ErrorBoundary>
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GameMode"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F8F1E9',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontFamily: fonts.sansation.bold,
              fontSize: 28,
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="GameMode"
            component={GameModeScreen}
            options={({ navigation }) => ({
              title: 'Desi Waddle',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: fonts.sansation.bold,
                fontSize: 24,
                marginTop: 5,
              },
              headerTitle: () => (
                <TouchableOpacity onPress={() => handleHeaderPress(navigation)} activeOpacity={0.8}>
                  <Text
                    style={{
                      fontFamily: fonts.sansation.bold,
                      fontSize: 24,
                      marginTop: 5,
                      color: '#000000',
                    }}
                  >
                    Desi Waddle
                  </Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Info')}
                  style={{
                    width: 44,
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 8,
                  }}
                >
                  <Icon name="info-icon" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="PackList"
            component={PackListScreen}
            options={{
              title: 'Choose a Pack',
              headerTitleStyle: {
                fontFamily: fonts.sansation.bold,
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="PackDetail"
            component={PackDetailScreen}
            options={{
              title: 'Categories',
              headerTitleStyle: {
                fontFamily: fonts.sansation.bold,
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="CharadesCategory"
            component={CharadesCategoryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Charades"
            component={CharadesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CharadesResults"
            component={CharadesResultsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GuessMovieInstructions"
            component={GuessMovieInstructionsScreen}
            options={{
              title: 'Guess the Movie',
              headerTitleStyle: {
                fontFamily: fonts.sansation.bold,
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="GuessMoviePlay"
            component={GuessMoviePlayScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GuessMovieResults"
            component={GuessMovieResultsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="DevConsole"
            component={DevConsoleScreen}
            options={{
              title: 'Developer Console',
              headerShown: false,
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </ErrorBoundary>
    );
  };

  return <AppContent />;
}
