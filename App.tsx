import './constants/gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home';
import Game from './screens/Game';
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { StackParamList } from './constants/types';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator<StackParamList>();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'IndieFlower': require('./assets/fonts/IndieFlower-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Game' component={Game} />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
