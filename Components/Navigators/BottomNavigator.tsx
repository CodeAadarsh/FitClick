import { Image, StyleSheet, Text, View } from 'react-native'
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
      <Tab.Screen options={{tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../Images/home-active.png') : require('../Images/home-inactive.png')}
              style={{height:20, width:20}}
            />
          )
        }} name="Home" component={HomeNavigator} />
      <Tab.Screen options={{tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../Images/dumbbells.png') : require('../Images/dumbbells-inactive.png')}
              style={{height:20, width:20}}
            />
          )
        }} name="Workouts" component={Home}/>
      {/* <Tab.Screen name="Playlists" component={Playlists} /> */}
      <Tab.Screen options={{tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../Images/profile-active.png') : require('../Images/profile.png')}
              style={{height:20, width:20}}
            />
          )
        }} name="Account" component={Account} />
    </Tab.Navigator>
  );
}
export default BottomTab;