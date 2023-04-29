import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Constants/Colors'
const Account = () => {
  return (
    <ScrollView style={styles.MainView}>
        <View style={styles.ImageTextContainer}>
        <View style={styles.ImageIcon}>
          <Image source={{uri:'https://scontent-bom1-1.cdninstagram.com/v/t51.2885-15/318108803_195208003014330_5306788016129613790_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=5wLIlSizh_IAX-UonrY&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjk4NjM5NjU3NzA5NTkxNTM4Mw%3D%3D.2-ccb7-5&oh=00_AfBJNu0nXoHHgcqZl_t2kEJoctrwjoVzbCMe6uYym9rnjA&oe=641884ED&_nc_sid=1527a3'}} style={{height:195,width:195,borderRadius:195/2, }} />
        </View>
        <View>
          <Text style={styles.GreetingText}>Hello, there!</Text>
        </View>
        </View>
      <View style={styles.DownCard}>
      {/* <View style={{}}> */}

      {/* </View> */}
        <View>
          <View style={styles.Cards}>
            <Text style={styles.CardText}>Articles</Text>
          </View>
          <View style={styles.Cards}>
            <Text style={styles.CardText}>Videos</Text>
          </View>
          </View>
          <View>
          {/* <Text style={{width:'100%'}}>More</Text> */}
          <View style={styles.Cards}>
            <Text style={styles.CardText}>Music</Text>
          </View>
          <View style={styles.Cards}>
            <Text style={[styles.CardText]}>Personal Trainer</Text>
          </View>
        </View>

      </View>
      <StatusBar backgroundColor={Colors.bgColor} />
    </ScrollView>
  )
}

export default Account

const styles = StyleSheet.create({
  MainView:{
    backgroundColor:Colors.bgColor,
    width:'100%',
    height:'100%',
  },
  DownCard:{
    opacity:1,
    height:1080,
    width:'100%',
    top:150,
    // borderWidth:20,
    borderRadius:20,
    backgroundColor:Colors.white,
    borderColor:'#000',
    borderWidth:1,
    flexDirection:'row',
    padding:5,
    justifyContent:'center'
  },
  ImageIcon:{
    alignItems:'center',
    justifyContent:'center',
    height:200,
    width:200,
    borderRadius:200/2,
    alignSelf:'center',
    backgroundColor:'#0288d1',
    elevation:10
  },
  ImageTextContainer:{top:50},
  GreetingText:{
    color:Colors.black,
    alignSelf:'center',
    top:25,
    fontSize:25,
    fontWeight:700,
    
  },
  Cards:{
    height:150,
    width:150,
    backgroundColor:Colors.bgColor,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    elevation:5
  },
  CardText:{
    fontSize:25,
    fontWeight:'600',
    color:Colors.white,
    alignSelf:'center'
  }
})