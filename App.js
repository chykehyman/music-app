import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Stacks from './src/config/router';

const App = () => (
  <NavigationContainer>
    <Stacks />
  </NavigationContainer>
);

export default App;
