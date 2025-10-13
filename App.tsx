import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
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

  const AppContent = () => (
    <ErrorBoundary>
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GameMode"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F8F1E9',
              height: 70,
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontFamily: fonts.sansation.bold,
              fontSize: 28,
            },
            headerBackTitleVisible: false,
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
        </Stack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </ErrorBoundary>
  );

  return <AppContent />;
}
