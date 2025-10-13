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
import HomeScreen from './src/screens/HomeScreen';
import GuessAnimalScreen from './src/screens/GuessAnimalScreen';
import GuessCountryScreen from './src/screens/GuessCountryScreen';
import WouldYouRatherScreen from './src/screens/WouldYouRatherScreen';
import StoryStarterScreen from './src/screens/StoryStarterScreen';
import InfoScreen from './src/screens/InfoScreen';
import SimonSaysHomeScreen from './src/screens/SimonSaysHomeScreen';
import SimonSaysPlayScreen from './src/screens/SimonSaysPlayScreen';
import ScavengerHuntModePickerScreen from './src/screens/ScavengerHuntModePickerScreen';
import ScavengerHuntPlayScreen from './src/screens/ScavengerHuntPlayScreen';
import CharadesCategoryScreen from './src/screens/CharadesCategoryScreen';
import CharadesScreen from './src/screens/CharadesScreen';
import CharadesResultsScreen from './src/screens/CharadesResultsScreen';
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
          initialRouteName="Home"
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
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: 'Waddle Play',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: fonts.sansation.bold,
                fontSize: 20,
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
            name="GuessAnimal"
            component={GuessAnimalScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GuessCountry"
            component={GuessCountryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WouldYouRather"
            component={WouldYouRatherScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StoryStarter"
            component={StoryStarterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SimonSaysHome"
            component={SimonSaysHomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SimonSaysPlay"
            component={SimonSaysPlayScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScavengerHuntModePicker"
            component={ScavengerHuntModePickerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScavengerHuntPlay"
            component={ScavengerHuntPlayScreen}
            options={{ headerShown: false }}
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
