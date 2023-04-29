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
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button, RadioButton, SegmentedButtons} from 'react-native-paper';

import {COLORS, SIZES, exercises} from '../../Constants/theme';
import Bmicalculator, { BMIVALUE, bmiValue } from './Bmicalculator';
var BMR = 0;
var CALORIES = 0;
var PROTIEN = 0;
var CARBS = 0;
var FATS = 0;

const Diets = ({navigation}) => {
  const [value, setValue] = useState('');
  const [ActivityValue, setActivityValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('Male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmr, setBMR] = useState(null);
  const [Calories, setCalories] = useState("0");
  const [UpdatedCalories, setUpdatedCalories] = useState("0");
  const [Protein, SetProtein] = useState("0");
  const [Carbs, SetCarbs] = useState("0");
  const [Fats, SetFats] = useState("0");
  const BMR_CALC = () => {
    if (checked === 'Male') {
      if (ActivityValue === 'Low') {
        // BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
        BMR =
          88.362 +
          13.397 * parseFloat(weight) +
          4.799 * parseFloat(height) -
          5.677 * parseFloat(age);
        CALORIES = BMR * 1.2;
        CALORIES = CALORIES.toFixed(1);
        BMR = BMR.toFixed(2);
        setBMR(BMR);
        setCalories(CALORIES);
      } else if (ActivityValue === 'Medium') {
        BMR =
          88.362 +
          13.397 * parseFloat(weight) +
          4.799 * parseFloat(height) -
          5.677 * parseFloat(age);
        CALORIES = BMR * 1.5;
        CALORIES = CALORIES.toFixed(1);
        BMR = BMR.toFixed(2);
        setBMR(BMR);
        setCalories(CALORIES);
      } else if (ActivityValue === 'Active') {
        BMR =
          88.362 +
          13.397 * parseFloat(weight) +
          4.799 * parseFloat(height) -
          5.677 * parseFloat(age);
        CALORIES = BMR * 1.9;
        CALORIES = CALORIES.toFixed(1);
        BMR = BMR.toFixed(2);
        setBMR(BMR);
        setCalories(CALORIES);
      }

      // BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
    } else {
      if (ActivityValue === 'Low') {
        BMR =
          447.593 +
          9.247 * parseFloat(weight) +
          3.098 * parseFloat(height) -
          4.33 * parseFloat(age);
        CALORIES = BMR * 1.2;
        CALORIES = CALORIES.toFixed(1);
        BMR = BMR.toFixed(2);
        setBMR(BMR);
        setCalories(CALORIES);
      } else if (ActivityValue === 'Medium') {
        BMR =
          447.593 +
          9.247 * parseFloat(weight) +
          3.098 * parseFloat(height) -
          4.33 * parseFloat(age);
        CALORIES = BMR * 1.5;
        CALORIES = CALORIES.toFixed(1);
        BMR = BMR.toFixed(2);
        setBMR(BMR);
        setCalories(CALORIES);
      } else if (ActivityValue === 'Active') {
        BMR =
          447.593 +
          9.247 * parseFloat(weight) +
          3.098 * parseFloat(height) -
          4.33 * parseFloat(age);
        CALORIES = BMR * 1.9;
        CALORIES = CALORIES.toFixed(1);
        BMR = BMR.toFixed(2);
        setBMR(BMR);
        setCalories(CALORIES);
      }
      // BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
    }
  };
  //New Func
  const BODY_DATA_CAL = () => {
    if (checked === 'Male') {
      if (value === 'fit') {
        const x = Calories - 500;
        PROTIEN = weight * 1;
        CARBS = weight * 1;
        FATS = weight * 0.3;
       
        setUpdatedCalories(x);
        SetCarbs(CARBS);
        SetFats(FATS);
        SetProtein(PROTIEN);
      } else if (value === 'Maintain') {
        const x = Calories;
        PROTIEN = weight * 1.5;
        CARBS = weight * 5;
        FATS = weight * 1.05;
        
        setUpdatedCalories(x);
        SetCarbs(CARBS);
        SetFats(FATS);
        SetProtein(PROTIEN);
      } else if (value === 'Bulk') {
        const x = parseInt(Calories) + 500;
        PROTIEN = weight * 2;
        CARBS = weight * 4;
        FATS = weight * 0.5;
        setUpdatedCalories(x);
        SetCarbs(CARBS);
        SetFats(FATS);
        SetProtein(PROTIEN);
        
      }
      // BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
    } else {
      if (value === 'fit') {
        const x = Calories - 500;

        PROTIEN = weight * 1;
        CARBS = weight * 1;
        FATS = weight * 0.3;
        setUpdatedCalories(x);
        SetCarbs(CARBS);
        SetFats(FATS);
        SetProtein(PROTIEN);
        
      } else if (value === 'Maintain') {
        const x = Calories;

        PROTIEN = weight * 1.5;
        CARBS = weight * 5;
        FATS = weight * 1.05;
        SetCarbs(CARBS);
        SetFats(FATS);
        SetProtein(PROTIEN);
        setUpdatedCalories(x);

        
      } else if (value === 'Bulk') {
        const x = parseInt(Calories) + 500;
        PROTIEN = weight * 2;
        CARBS = weight * 4;
        FATS = weight * 0.5;
        
        setUpdatedCalories(x);
        SetCarbs(CARBS);
        SetFats(FATS);
        SetProtein(PROTIEN);
      }
      // BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
    }
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
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
            top: -30,
            left: -50,
          }}
        />
        <Text style={{fontSize: 30, lineHeight: 45}}>{exercises[0].title}</Text>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.6,
            // marginVertical: 10,
            color: '#000',
          }}>
          Your BMI:
          <Text style={{color: '#000', fontWeight: 'bold'}}> {bmiValue.toFixed(1)}</Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.6,
            // marginVertical: -5,
            color: '#000',
          }}>
          Daily Calories:
          <Text style={{color: '#000', fontWeight: 'bold'}}>
            {' '}
            {UpdatedCalories} Cal/DAY
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.6,
            // marginVertical: 2,
            color: '#000',
          }}>
          Protein Intake:
          <Text style={{color: '#000', fontWeight: 'bold'}}>
            {' '}
            {Protein} g/DAY
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.6,
            // marginVertical: -5,
            color: '#000',
          }}>
          Carbs Intake:
          <Text style={{color: '#000', fontWeight: 'bold'}}>
            {' '}
            {Carbs} g/DAY
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.6,
            // marginVertical: -5,
            color: '#000',
          }}>
          Fats Intake:
          <Text style={{color: '#000', fontWeight: 'bold'}}> {Fats} g/DAY</Text>
        </Text>
        <Text style={{fontSize: 16, width: '85%', color: '#000'}}></Text>

        <Image
          source={exercises[0].image}
          style={{
            position: 'absolute',
            bottom: 0,
            right: -180,
            width: 350,
            height: 350,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View style={{marginTop: -10, marginHorizontal: 30}}>
        <Text style={{marginVertical: 15, fontSize: 20, color: '#000'}}>
          {exercises[0].title}
        </Text>
        <Text style={{left: 9, fontSize: 15, fontWeight: '500', color: '#000'}}>
          Goal:
        </Text>
        <View style={{marginVertical: 10}}>
          <SegmentedButtons
            value={value}
            style={{backgroundColor: '#fff', borderRadius: 20}}
            density="medium"
            onValueChange={setValue}
            buttons={[
              {
                value: 'fit',
                label: 'Get fit',
              },
              {
                value: 'Maintain',
                label: 'Maintain',
              },

              {value: 'Bulk', label: 'Bulk Up'},
            ]}
          />
        </View>
        <View
          style={
            {
              // borderWidth: 1,
            }
          }>
          <Text
            style={{
              color: '#000',
              paddingLeft: 10,
              bottom: 3,
              fontWeight: '500',
            }}>
            Calories:
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '80%',
                backgroundColor: COLORS.white,
                borderRadius: 15,
                shadowColor: '#9e9898',
                elevation: 5,
                marginBottom: 10,
              }}>
              <TextInput style={{color:'#000'}}
                placeholder="Your Daily Calories"
                keyboardType="numeric"
                value={Calories}
                onChangeText={setCalories}
              />
            </View>
            {/* Not sure button */}
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => setModalVisible(true)}>
              <Image
                style={{
                  // position: 'absolute',

                  width: 30,
                  height: 30,
                  // resizeMode: 'contain',
                }}
                source={require('../Images/calc.png')}
              />
              <Text style={{fontSize: 12,fontWeight:'700', color: '#000'}}>Not Sure?</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.WHText}>Male</Text>
            <RadioButton
              value="Male"
              status={checked === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Male')}
            />
            <Text style={styles.WHText}>Female</Text>
            <RadioButton
              value="Female"
              status={checked === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Female')}
            />
          </View>

          <TouchableOpacity
            onPress={BODY_DATA_CAL}
            style={styles.CalculateButton}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontWeight: '400',
              }}>
              Calculate
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              opacity: 0.6,
              top: 25,
              color: '#000',
            }}>
            *Note: For Calculation of Protein,Carbs,Fats
            Click on "Not sure?" Icon
            
          </Text>
          <Text
            style={{
              fontSize: 16,
              opacity: 0.6,
              top: 30,
              color: '#000',
            }}>
            *Note: For Calculation of BMI,get back to BMI Tab
            
          </Text>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View style={styles.ModalUpperArea}>
              <Image
                source={require('../Images/BgPurple.png')}
                style={{
                  position: 'absolute',
                  top: 40,
                  left: 50,
                }}
              />
              <Text style={{fontSize: 30, lineHeight: 45, color: '#fff'}}>
                Calories Calculator
              </Text>
             
              <Text style={{fontSize: 30, lineHeight: 45, color: '#fff'}}>
              Calories: {Calories}
              </Text>

              {/* 
              <Image
                source={exercises[1].image}
                style={{
                  position: 'absolute',
                  bottom: 1,
                  right: -80,
                  width: 250,
                  height: 250,
                  resizeMode: 'contain',(5.677 * parseFloat(age))
                }}
              /> */}
            </View>

            <View style={styles.ModalLowerArea}>
              <View style={[styles.ModalLowerInnerArea, {top: -10}]}>
                <Text style={styles.WHText}>Weight:</Text>
                <View style={styles.Height}>
                  <TextInput style={{color:'#000'}}
                    placeholder="Weight in kg"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                  />
                </View>
                <Text style={styles.WHText}>Age:</Text>
                <View style={styles.Height}>
                  <TextInput style={{color:'#000'}}
                    placeholder="Age"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={setAge}
                  />
                </View>

                <Text style={styles.WHText}>Height:</Text>
                <View style={styles.Height}>
                  <TextInput style={{color:'#000'}}
                    placeholder="Height in meters"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.WHText}>Male</Text>
                  <RadioButton
                    value="Male"
                    status={checked === 'Male' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Male')}
                  />
                  <Text style={styles.WHText}>Female</Text>
                  <RadioButton
                    value="Female"
                    status={checked === 'Female' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Female')}
                  />
                </View>
                <View style={{marginVertical: 10}}>
                  <View>
                    <Text style={styles.WHText}>Activity Level:</Text>
                    <SegmentedButtons
                      value={ActivityValue}
                      style={{backgroundColor: '#fff', borderRadius: 20}}
                      density="medium"
                      onValueChange={setActivityValue}
                      buttons={[
                        {
                          value: 'Low',
                          label: 'Low',
                        },
                        {
                          value: 'Medium',
                          label: 'Medium',
                        },

                        {value: 'Active', label: 'Extreme'},
                      ]}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={BMR_CALC}
                  style={styles.CalculateButton}>
                  <Text
                    style={{
                      color: '#fff',
                      alignSelf: 'center',
                      fontWeight: '400',
                    }}>
                    Calculate
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
    // <View><Text>Hello</Text></View>
  );
};

export default Diets;

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 8,
  },
  Height: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    shadowColor: '#9e9898',
    elevation: 5,
    marginBottom: 10,
  },
  CalculateButton: {
    // padding: 10,
    // borderWidth:1,
    top: 15,
    backgroundColor: COLORS.purple,
    width: '50%',
    height: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    shadowColor: '#9e9898',
    elevation: 5,
  },
  WHText: {
    color: '#000',
    paddingLeft: 12,
    bottom: 3,
    fontWeight: '500',
  },
  ModalUpperArea: {
    width: '95%',
    alignSelf: 'center',
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
    height: 0.3 * SIZES.height,
    padding: 30,
    backgroundColor: '#ff80ef',
    position: 'relative',
  },
  ModalLowerArea: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
    height: 440,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    elevation: 6,
  },
  ModalLowerInnerArea: {
    top: 10,
    width: '90%',
    // borderWidth: 1,
    flexDirection: 'column',
    padding: 15,
    height: 350,
    shadowColor: '#9e9898',
  },
});
