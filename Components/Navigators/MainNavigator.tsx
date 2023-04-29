import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import BottomTab from './BottomNavigator';
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="Splash" component={Splash} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
export default MainNavigator;