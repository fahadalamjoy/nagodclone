import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import tw from 'twrnc';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './App/Navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </NavigationContainer>
  );
}

