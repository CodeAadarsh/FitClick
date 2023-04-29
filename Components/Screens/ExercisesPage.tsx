import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES, exercises, exercisesDATA} from '../../Constants/theme';

const ExercisesPage = ({route}) => {
    

  return (
    <ScrollView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={'#C7B8F5'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.3 * SIZES.height,
          padding: 30,
          backgroundColor: '#C7B8F5',
          position: 'relative',
        }}>
        <Image
          source={require('../Images/BgPurple.png')}
          style={{
            position: 'absolute',
            top: -90,
            left: -50,
          }}
        />
        <Text style={{fontSize: 30, lineHeight: 45}}>{exercises[2].title}</Text>
        <Text style={{fontSize: 16, opacity: 0.6, marginVertical: 10, color:'#000'}}>
          {exercises[2].duration}
        </Text>
        <Text style={{fontSize: 16, width: '85%', color:'#000'}}>{exercises[2].subTitle}</Text>
        
        <Image
          source={exercises[2].image}
          style={{
            position: 'absolute',
            bottom: -70,
            right: -170,
            width: 350,
            height: 350,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View style={{marginTop: -30, marginHorizontal: 30}}>
        
        <Text style={{marginVertical: 15, fontSize: 20,color:"#000"}}>{exercises[2].title1}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white,
            borderRadius: 15,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
          }}>
          <Image
             source={{uri:exercisesDATA[0].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View>
            <Text style={{color:'#000'}}>{exercisesDATA[0].name}</Text>
            <Text style={{color:'#000'}}>Start your deepen you practice</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExercisesPage;
