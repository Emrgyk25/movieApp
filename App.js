import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigationContainer from './src/Router/AppNavigationContainer';
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigationContainer />
    </NavigationContainer>
  );
};

export default App;
