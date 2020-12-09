import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Stacks from './src/config/router';

LogBox.ignoreAllLogs(true);

const App = () => (
  <NavigationContainer>
    <Stacks />
  </NavigationContainer>
);

export default App;
