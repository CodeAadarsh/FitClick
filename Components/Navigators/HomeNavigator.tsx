import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Workouts from '../Screens/Workouts';
import Diets from '../Screens/Diets';
import ExercisesPage from '../Screens/ExercisesPage';
import Yoga from '../Screens/Yoga';

import Bmicalculator from '../Screens/Bmicalculator';
const Stack = createStackNavigator();
const HomeNavigator = () => {
    console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTintColor: colors.white,
        // headerBackTitle: 'back',
        // headerStatusBarHeight:0,
        // headerStyle: {backgroundColor: colors.primary},
        headerShown: false,
      }}
      initialRouteName={'Workouts'}>
      <Stack.Screen
        name={'Workouts'}
        component={Workouts}
        options={{headerShown: false}}
      />
        
        
        <Stack.Screen
          name={'ExercisesPage'}
          component={ExercisesPage}
          options={{headerShown: false}}
        />
      <Stack.Screen
        name={'Diets'}
        component={Diets}
        options={{headerShown: false}}
      />
        <Stack.Screen
          name={'Bmicalculator'}
          component={Bmicalculator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Yoga'}
          component={Yoga}
          options={{headerShown: false}}
        />
      
    </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})