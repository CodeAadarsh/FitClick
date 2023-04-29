import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './Components/Navigators/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}