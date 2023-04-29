import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Diets from '../Screens/Diets';
import Account from '../Screens/Account';
import Workouts from '../Screens/Workouts';
import Home from '../Screens/Home';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Workouts" component={Home}/>
      {/* <Tab.Screen name="Playlists" component={Playlists} /> */}
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
export default BottomTab;