import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../Constants/Colors';
import {SIZES, exercises} from '../../Constants/theme';
import Diets from './Diets';
export var user = 'User';
const GreetingMessage = ({ user }) => {
  
}

const Workouts = ({navigation}) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
      setGreeting(`Good morning, ${user}!`);
    } else if (hours >= 12 && hours < 18) {
      setGreeting(`Good afternoon, ${user}!`);
    } else {
      setGreeting(`Good evening, ${user}!`);
    }
  }, [user]);
  return (
    <SafeAreaView style={styles.uppercontainer}>
      <StatusBar backgroundColor={'#f4e2df'} barStyle={'dark-content'}
        animated={true} />
      <View
        style={{
          width: '100%',
          height:0.4 * SIZES.height,
          padding: 30,
          backgroundColor: '#f4e2df',
          position: 'relative',
        }}>
        <Image
          source={require('../Images/BgOrange.png')}
          style={{
            position: 'absolute',
            top: 60,
            left: -50,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#f1c4bc',
              marginRight: 0,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 3,
                backgroundColor: '#f4e2df',
                width: '40%',
                marginBottom: 8,
                marginLeft: -5,
                borderRadius: 50,
              }}></View>
            <View
              style={{
                height: 3,
                backgroundColor: '#f4e2df',
                width: '40%',
                marginLeft: 5,
                borderRadius: 50,
              }}></View>
          </View>
        </View>
        <Text style={{fontSize: 30, lineHeight: 45, color: '#000'}}>
          {greeting}
        </Text>

        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#f1c4bc',
            position: 'absolute',
            right: -30,
            bottom: 50,
          }}></View>
      </View>
      <View style={{flexDirection:'column',alignSelf:'center'}}>

      
      <View
        style={{
          // paddingHorizontal: 20,
          marginTop: -60,
          flexDirection:'row'
          // alignItems: 'center',
        }}>
       
          <TouchableOpacity
            onPress={() => navigation.navigate('Diets')}
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.white,
              width: 0.5 * SIZES.width - 35,
              margin: 10,
              height: 180,
              borderRadius: 10,
              padding: 15,
              shadowColor: '#9e9898',
              elevation: 5,
            }}>
            <Image
              source={exercises[0].image}
              style={{
                width: '100%',
                resizeMode: 'cover',
                flex: 1,
              }}
            />
            <Text
              style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 16,
                color: Colors.black,
              }}>
              {exercises[0].title}
            </Text>
          </TouchableOpacity>
       
          <TouchableOpacity
            onPress={() => navigation.navigate('ExercisesPage')}
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.white,
              width: 0.5 * SIZES.width - 35,
              margin: 10,
              height: 180,
              borderRadius: 10,
              padding: 15,
              shadowColor: '#9e9898',
              elevation: 5,
            }}>
            <Image
              source={exercises[2].image}
              style={{
                width: '100%',
                resizeMode: 'cover',
                flex: 1,
              }}
            />
            <Text
              style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 16,
                color: Colors.black,
              }}>
              {exercises[2].title}
            </Text>
          </TouchableOpacity>

      </View>
      <TouchableOpacity
            onPress={() => navigation.navigate('Bmicalculator')}
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.white,
              width: 0.95 * SIZES.width - 35,
              margin: 10,
              height: 180,
              borderRadius: 10,
              padding: 15,
              shadowColor: '#9e9898',
              elevation: 5,
            }}>
            <Image
              source={exercises[1].image}
              style={{
                width: '50%',
                resizeMode: 'cover',
                alignSelf:'center',
                flex: 1,
              }}
            />
            <Text
              style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 16,
                color: Colors.black,
              }}>
              {exercises[1].title}
            </Text>
          </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};
export default Workouts;

const styles = StyleSheet.create({
  uppercontainer: {
    flex: 1,
    position: 'relative',
  },
});
