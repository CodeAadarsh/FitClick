import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  View,Modal, StyleSheet
} from 'react-native';
import { COLORS, SIZES, exercises, exercisesDATA } from '../../Constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Constants/Colors';

const ExercisesPage = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);



  return (
    <View style={{ flex: 1, position: 'relative' }}>
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
        <Text style={{ fontSize: 30, lineHeight: 45 }}>{exercises[2].title}</Text>
        <Text style={{ fontSize: 16, opacity: 0.6, marginVertical: 10, color: '#000' }}>
          {exercises[2].duration}
        </Text>
        <Text style={{ fontSize: 16, width: '85%', color: '#000' }}>{exercises[2].subTitle}</Text>

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

     <View style={{flexDirection:'row', width:"90%", alignSelf:'center'}}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
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
              source={require('../Images/ExerciseData.png')}
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
              stretching
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible1(true)}
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
              source={require('../Images/ExData2.jpeg')}
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
              WarmUp
            </Text>
          </TouchableOpacity>
          </View>
     <View style={{flexDirection:'row', width:"90%", alignSelf:'center'}}>
          <TouchableOpacity onPress={() => setModalVisible3(true)}
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
              source={require('../Images/ExData3.jpeg')}
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
                Intermediate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible3(true)}
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
              source={require('../Images/ExData4.jpeg')}
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
              Advance
            </Text>
          </TouchableOpacity>
          </View>

      <View
        style={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          width: '100%',
          height: 0.1 * SIZES.height,
          padding: 30,
          backgroundColor: '#C7B8F5',
          position: 'relative',
        }}>



      </View>
      
      {/* <Modal> */}
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View style={styles.ModalUpperArea}>
        <Text style={{ fontSize: 35, alignSelf: 'baseline' }}> Warm-Up</Text>
              
                          </View>

            <View style={[styles.ModalLowerArea,]}>
              <View style={[styles.ModalLowerInnerArea, {top: -10}]}>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[0].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[0].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[0].sets}</Text>
          </View>

        </View>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[2].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[2].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[0].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[3].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[3].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[3].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[4].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[4].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[4].sets}</Text>
          </View>
        </View>

                </View>
                </View>

          </Modal>

          {/* 1 */}
      {/* <Modal> */}
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              setModalVisible1(false);
            }}>
            <View style={styles.ModalUpperArea}>
        <Text style={{ fontSize: 35, alignSelf: 'baseline' }}> Warm-Up</Text>
              
                          </View>

            <View style={[styles.ModalLowerArea,]}>
              <View style={[styles.ModalLowerInnerArea, {top: -10}]}>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[11].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[11].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[11].sets}</Text>
          </View>

        </View>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[12].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[12].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[12].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[13].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[13].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[13].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[14].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[14].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[14].sets}</Text>
          </View>
        </View>

                </View>
                </View>

          </Modal>

          {/* 1 */}
      {/* <Modal> */}
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              setModalVisible2(false);
            }}>
            <View style={styles.ModalUpperArea}>
        <Text style={{ fontSize: 35, alignSelf: 'baseline' }}> Warm-Up</Text>
              
                          </View>

            <View style={[styles.ModalLowerArea,]}>
              <View style={[styles.ModalLowerInnerArea, {top: -10}]}>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[15].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[15].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[15].sets}</Text>
          </View>

        </View>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[16].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[16].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[16].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[17].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[3].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[17].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[18].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[18].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[18].sets}</Text>
          </View>
        </View>

                </View>
                </View>

          </Modal>

          {/* 1 */}
      {/* <Modal> */}
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible3}
            onRequestClose={() => {
              setModalVisible3(false);
            }}>
            <View style={styles.ModalUpperArea}>
        <Text style={{ fontSize: 35, alignSelf: 'baseline' }}> Warm-Up</Text>
              
                          </View>

            <View style={[styles.ModalLowerArea,]}>
              <View style={[styles.ModalLowerInnerArea, {top: -10}]}>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[19].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[19].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[19].sets}</Text>
          </View>

        </View>
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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[20].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[20].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[20].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[21].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[21].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[21].sets}</Text>
          </View>
        </View>

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
            margin:10
          }}>
          <Image
             source={{uri:exercisesDATA[22].image}}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View style={{left:20}}>
            <Text style={{color:'#000'}}>{exercisesDATA[22].name}</Text>
            <Text style={{color:'#000', fontWeight:'bold'}}>Reps: {exercisesDATA[22].sets}</Text>
          </View>
        </View>

                </View>
                </View>

          </Modal>

          {/* 1 */}
    </View>
    
  );
};

export default ExercisesPage;



const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
    height: 0.15 * SIZES.height,
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