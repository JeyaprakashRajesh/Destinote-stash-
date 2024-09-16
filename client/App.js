import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

//this is the sample line
export default function App() {
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      console.log(token) //token
      if (token === null) {
        setScreen(<AuthScreen />);
      } else {
        setScreen(<MainScreen />);
      }
    };

    checkToken();
  }, []);
  return (
    <NavigationContainer>
      {screen}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
