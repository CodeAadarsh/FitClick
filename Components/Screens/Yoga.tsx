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
import {COLORS, SIZES, exercises} from '../../Constants/theme';


const Yoga = ({route}) => {
    

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
          height: 0.4 * SIZES.height,
          padding: 30,
          backgroundColor: '#C7B8F5',
          position: 'relative',
        }}>
        <Image
          source={require('../Images/BgPurple.png')}
          style={{
            position: 'absolute',
            top: 40,
            left: -50,
          }}
        />
        <Text style={{fontSize: 30, lineHeight: 45}}>{exercises[3].title}</Text>
        <Text style={{fontSize: 16, opacity: 0.6, marginVertical: 10, color:'#000'}}>
          {exercises[3].duration}
        </Text>
        <Text style={{fontSize: 16, width: '85%', color:'#000'}}>{exercises[3].subTitle}</Text>
        
        <Image
          source={exercises[3].image}
          style={{
            position: 'absolute',
            bottom: 40,
            right: -150,
            width: 350,
            height: 350,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View style={{marginTop: -30, marginHorizontal: 30}}>
        
        <Text style={{marginVertical: 15, fontSize: 20,color:"#000"}}>{exercises[3].title1}</Text>
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
            source={exercises[3].image}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View>
            <Text style={{color:'#000'}}>Basic 2</Text>
            <Text style={{color:'#000'}}>Start your deepen you practice</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Yoga;
