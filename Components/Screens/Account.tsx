import { Image,TouchableOpacity, ScrollView, StatusBar, StyleSheet, Text, View, Modal, Linking } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Constants/Colors'
import { COLORS, SIZES, exercises, exercisesDATA } from '../../Constants/theme'
import { user } from './Workouts'
const Account = () => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  return (
    <ScrollView style={{
      width: '100%',
      alignSelf: 'center',
      height: 1 * SIZES.height,
      backgroundColor: '#e8c7f0',
      position: 'relative',

    }}>

      <View style={styles.ImageTextContainer}>
        {/* <View style={styles.ImageIcon}> */}
          {/* <Image source={{ uri: 'https://scontent-bom1-1.cdninstagram.com/v/t51.2885-15/318108803_195208003014330_5306788016129613790_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=5wLIlSizh_IAX-UonrY&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjk4NjM5NjU3NzA5NTkxNTM4Mw%3D%3D.2-ccb7-5&oh=00_AfBJNu0nXoHHgcqZl_t2kEJoctrwjoVzbCMe6uYym9rnjA&oe=641884ED&_nc_sid=1527a3' }} style={{ height: 195, width: 195, borderRadius: 195 / 2, }} /> */}
        {/* </View> */}
        <View>
          <Image style={{position:'absolute',left:70,top:-40}} source={require('../Images/BgPurple.png')}/>
          <Text style={{fontWeight:'bold',fontSize:80, margin:10,justifyContent:'flex-start'}}>Hello, {user}</Text>
        </View>
      </View>
      <View style={styles.DownCard}>
        {/* <View style={{}}> */}

        {/* </View> */}
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => setModalVisible2(true)} style={{
            height: 150,
            width: 320,
            backgroundColor: Colors.white,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            elevation: 5
          }}>
            <Image style={{ height: '70%', width: '70%' }} source={require('../Images/music.jpeg')} />
            <Text style={{
              marginTop: 20,
              textAlign: 'center',
              fontSize: 16,
              color: Colors.black,
            }}>Music</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            {/* <Text style={{width:'100%'}}>More</Text> */}
            {/* <TouchableOpacity onPress={() => setModalVisible3(true)} style={styles.Cards}> */}
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3zDyAbBIzZM&list=PLX8QIwhN83ZXRbmrql6WqHTrVXSmsdVhd')} style={styles.Cards}>
              <Image style={{ height: '70%', width: '70%' }} source={require('../Images/Videos.jpeg')} />
              <Text style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 16,
                color: Colors.black,
              }}>Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible1(true)} style={styles.Cards}>
              <Image style={{ height: '70%', width: '90%', alignSelf: 'center' }} source={require('../Images/Personal.jpeg')} />
              <Text style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 16,
                color: Colors.black,
              }}>Personal Trainers +</Text>
            </TouchableOpacity>
          </View>

        </View>


      </View>
      <StatusBar backgroundColor='#e8c7f0' barStyle={'dark-content'}
        animated={true} />



      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(false);
        }}>
        <View style={styles.ModalUpperArea}>
          <Text style={{ fontSize: 35, alignSelf: 'center', color: '#fff' }}>Premium Soon</Text>

        </View>

        <View style={[styles.ModalLowerArea,]}>
          <Text style={{ color: '#0f0f0f', fontWeight: 'bold', fontSize: 30, }}>Coming Soon</Text>
          <Image style={[styles.ModalLowerInnerArea, { borderRadius: 200, borderWidth: 0 }]} source={require('../Images/Premium.gif')} />
          <View style={[styles.ModalLowerInnerArea, { top: -10, justifyContent: "center", alignItems: 'center' },]}>

          </View>
        </View>

      </Modal>
      {/* modal 2 Music */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(false);
        }}>
        <View style={{
          width: '80%',
          top: 300,
          alignSelf: 'center',
          borderTopStartRadius: 20,
          borderTopRightRadius: 20,
          height: 0.1 * SIZES.height,
          justifyContent:'center',
          backgroundColor: '#5e5f62',
          position: 'relative',
        }}>
          <Text style={{ fontSize: 35, alignSelf: 'center', color: '#fff' }}>Listen Music on ?</Text>

        </View>

        <View style={{
          top: 300,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#c0c3c9',
          width: '80%',
          alignSelf: 'center',
          height: 80,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          elevation: 6,

        }}>
          <TouchableOpacity onPress={()=> Linking.openURL('https://open.spotify.com/playlist/1nvb2n40sho2nivz3QXxGh?si=8ZhKeRv0Q2G9AJxLU5Fh7g&nd=1')} style={{justifyContent:'center',alignItems:'center'}}>

            <Image style={{ height: 50, width: 50 }} source={require('../Images/spotify.png')} />
          <Text style={{ fontSize: 16, alignSelf: 'center', color: '#fff' }}>Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Linking.openURL('https://www.youtube.com/playlist?list=PLu0ocO48LFms5WsI1ipaeanxqRjn2fC_5')} style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{ height: 50, width: 50 }} source={require('../Images/youtube.png')} />
          <Text style={{ fontSize: 16, alignSelf: 'center', color: '#fff' }}>Youtube</Text>
            
          </TouchableOpacity>

        </View>

      </Modal>





 



{/* modal3 */}
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          setModalVisible3(false);
        }}>
        <View style={styles.ModalUpperArea}>
          <Text style={{ fontSize: 35, alignSelf: 'center', color: '#fff' }}>Premium Soon</Text>

        </View>

        <View style={[styles.ModalLowerArea,]}>
          <Text style={{ color: '#0f0f0f', fontWeight: 'bold', fontSize: 30, }}>Coming Soon</Text>
          <View style={[styles.ModalLowerInnerArea, { top: -10, justifyContent: "center", alignItems: 'center' },]}>
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
          <View>
            <Text style={{paddingHorizontal:80,color:'#000'}}>Full</Text>
          </View>
        </View>
          </View>
        </View>

      </Modal> */}



    </ScrollView>
  )
}

export default Account

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Colors.bgColor,
    width: '100%',
    height: '100%',
  },
  DownCard: {
    opacity: 1,
    height: '90%',
    width: '100%',
    top: 20,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderColor: '#000',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 20,
    marginVertical: 50,
    justifyContent: 'center'
  },
  ImageIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    top: -35,
    borderRadius: 200 / 2,
    alignSelf: 'center',
    backgroundColor: '#0288d1',
    elevation: 10
  },
  ImageTextContainer: { top: 50 },
  GreetingText: {
    color: Colors.black,
    alignSelf: 'center',
    top: -20,
    fontSize: 25,
    fontWeight: 700,

  },
  Cards: {
    height: 150,
    width: 150,
    backgroundColor: Colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 5
  },
  CardText: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center'
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
    backgroundColor: '#5e5f62',
    position: 'relative',

  },
  ModalLowerArea: {
    alignItems: 'center',
    backgroundColor: '#c0c3c9',
    width: '95%',
    alignSelf: 'center',
    height: 450,
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
})