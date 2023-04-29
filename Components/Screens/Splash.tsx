import React from 'react'
import { StyleSheet, Text, View,Image, StatusBar } from 'react-native'

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('BottomTab')
  }, 2000);
  return (
    <View>
      <StatusBar backgroundColor={"#a6a0a2"}/>
      <Image source={require('../../Components/Images/splash.png')} style={{width:'100%', height:'100%'}} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})