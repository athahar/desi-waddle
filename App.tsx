import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';
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
import {
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';
import { PostHogProvider, usePostHog } from 'posthog-react-native';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { fonts } from './src/styles/fonts';
import { DevPanel } from './src/devlog/DevPanel';
import { useDevModeStore } from './src/devlog/devMode';
import { setPostHogInstance, trackAppOpened } from './src/services/analytics';
import GameModeScreen from './src/screens/GameModeScreen';
import PackListScreen from './src/screens/PackListScreen';
import PackDetailScreen from './src/screens/PackDetailScreen';
import InfoScreen from './src/screens/InfoScreen';
import CharadesScreen from './src/screens/CharadesScreen';
import CharadesResultsScreen from './src/screens/CharadesResultsScreen';
import GuessMoviePlayScreen from './src/screens/GuessMoviePlayScreen';
import GuessMovieResultsScreen from './src/screens/GuessMovieResultsScreen';
import Icon from './src/components/Icon';

const Stack = createNativeStackNavigator();

// PostHog Initializer Component
// Connects usePostHog hook to analytics service
const PostHogInitializer: React.FC = () => {
  const posthog = usePostHog();

  React.useEffect(() => {
    const setup = async () => {
      if (posthog) {
        await setPostHogInstance(posthog);
        await trackAppOpened();

        if (__DEV__) {
          console.log('[Analytics] PostHog initialized from hook');
        }
      }
    };
    setup();
  }, [posthog]);

  return null;
};

// Conditional PostHog Provider Wrapper
// Only enables analytics if environment variables are configured
const PostHogProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get credentials - fallback to hardcoded values for development
  const apiKey = process.env.EXPO_PUBLIC_POSTHOG_API_KEY || 'phc_ykO5YVqj9fkao7VoVWlbJgyCi48xhD1y4WDNE6SfXdP';
  const host = process.env.EXPO_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
  const analyticsEnabled = process.env.EXPO_PUBLIC_ENABLE_ANALYTICS !== 'false'; // Enabled by default

  // Disable analytics if explicitly disabled or invalid key
  if (!analyticsEnabled || !apiKey || apiKey === 'phc_disabled' || apiKey === 'phc_your_key_here') {
    if (__DEV__) {
      console.log('[Analytics] Disabled - PostHog will not track events');
    }
    return <>{children}</>;
  }

  if (__DEV__) {
    console.log('[Analytics] Enabled - PostHog will track events');
    console.log('[Analytics] API Key:', apiKey.substring(0, 10) + '...');
    console.log('[Analytics] Host:', host);
  }

  return (
    <PostHogProvider
      apiKey={apiKey}
      options={{
        host,
        captureAppLifecycleEvents: false,
      }}
      autocapture={false}
    >
      <PostHogInitializer />
      {children}
    </PostHogProvider>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Sansation_400Regular,
    Sansation_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Lato_400Regular,
    Lato_700Bold,
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
    const { initialize } = useDevModeStore();

    React.useEffect(() => {
      // Initialize dev mode on app start
      initialize();
    }, [initialize]);

    return (
    <ErrorBoundary>
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PackList"
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#F2EDD3',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontFamily: fonts.sansation.bold,
              fontSize: 28,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              navigation.canGoBack() ? (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{
                    width: 44,
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 8,
                  }}
                >
                  <Image
                    source={require('./assets/DesiGames/icon-Back.png')}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : null
            ),
          })}
        >
          <Stack.Screen
            name="GameMode"
            component={GameModeScreen}
            options={({ navigation }) => ({
              title: 'Desi Games',
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
            options={({ navigation }) => ({
              title: 'Desi Charades',
              headerTitleStyle: {
                fontFamily: fonts.sansation.bold,
                fontSize: 20,
              },
              headerLeft: () => null,
              headerBackVisible: false,
              gestureEnabled: false,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Info')}
                  style={{
                    width: 44,
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 8,
                    marginTop: -5,
                  }}
                >
                  <Icon name="info-icon" size={30} />
                </TouchableOpacity>
              ),
            })}
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
      {/* DevPanel overlay - renders above navigation when visible */}
      <DevPanel />
    </ErrorBoundary>
    );
  };

  return (
    <PostHogProviderWrapper>
      <AppContent />
    </PostHogProviderWrapper>
  );
}
