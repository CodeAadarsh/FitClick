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
import {TouchableOpacity} from 'react-native-gesture-handler';
export var bmiValue=0;
export var BMIVALUE= '';
const Bmicalculator = ({route}) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const [show, setshow] = useState('');
  const calculateBmi = () => {
    bmiValue = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    setBmi(bmiValue.toFixed(2));
    if(bmiValue<18.5){
      BMIVALUE = 'Underweight'
      setshow(BMIVALUE);
    }else if (bmiValue<25 && bmiValue> 18.5){
      BMIVALUE = 'Normal weight'
      setshow(BMIVALUE);
    }else if(bmiValue>25 && bmiValue< 30){
      BMIVALUE = 'Overweight'
      setshow(BMIVALUE);
    }else if(bmiValue>=30){
      BMIVALUE = 'Overweight'
      setshow(BMIVALUE);
      
    }else{
      BMIVALUE = 'Invalid Inputs'
      setshow(BMIVALUE);
    }
     
  };

  // Underweight: BMI < 18.5
  // : 18.5 <= BMI < 25
  // Overweight: 25 <= BMI < 30
  // Obese: BMI >= 30
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
        <Text style={{fontSize: 30, lineHeight: 45}}>{exercises[1].title}</Text>
        <Text style={{marginTop:20,fontSize: 16, width: '70%', color: '#000'}}>
          {exercises[1].subTitle}
        </Text>
        <Text
          style={{
            fontSize: 40,
            width: '85%',
            fontWeight: 'bold',
            color: '#000',
          }}>
          BMI: {bmi}
        </Text>
        <Text
          style={{
            fontSize: 20,
            width: '85%',
            fontWeight: 'bold',
            color: '#000',
          }}>
          {show}
        </Text>

        <Image
          source={exercises[1].image}
          style={{
            position: 'absolute',
            bottom: 70,
            right: -75,
            width: 250,
            height: 250,
            resizeMode: 'contain',
          }}
          />
      </View>

      <View style={{marginTop: -50, marginHorizontal: 30}}>
        <Text
          style={{marginVertical: 20, top: 30, fontSize: 20, color: '#000'}}>
          {exercises[1].title}
        </Text>
        <View
          style={{
            top: 10,
            // borderWidth:1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: 15,
            height: 350,
            shadowColor: '#9e9898',
          }}>
 

          <View>
            <Text
              style={{
                color: '#000',
                paddingLeft: 12,
                bottom: 3,
                fontWeight: '500',
              }}>
              Weight:
            </Text>
            <View
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 15,
                shadowColor: '#9e9898',
                elevation: 5,
                marginBottom: 10,
              }}>
              <TextInput
                placeholder="Weight in kg"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#000',
                paddingLeft: 12,
                bottom: 3,
                fontWeight: '500',
              }}>
              Height:
            </Text>
            <View
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 15,
                shadowColor: '#9e9898',
                elevation: 5,
                marginBottom: 10,
              }}>
              <TextInput
                placeholder="Height in meters"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
              />
            </View>
          </View>

          <TouchableOpacity onPress={calculateBmi}
            style={{
              padding: 15,
              // borderWidth:1,
              top: 15,
              backgroundColor: COLORS.purple,
              width: '50%',
              height: '40%',
              alignSelf: 'center',
              borderRadius: 25,
              shadowColor: '#9e9898',
              elevation: 5,
            }}>
            <Text
              style={{color: '#fff', alignSelf: 'center', fontWeight: '400'}}>
              Calculate
            </Text>
          </TouchableOpacity>

            {/* Diet Recom */}
            <View
          style={{
            top:-50,
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
            source={exercises[0].image}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View>
            <Text style={{color:'#000'}}>Wieght Loss Diet</Text>
            <Text style={{color:'#000'}}>Get fit with our special Diets</Text>
          </View>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Bmicalculator;
