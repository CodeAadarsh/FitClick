import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Male from './Male';
import Female from './Female';
const HeaderLogo = () => {
    const [Gender, setGender] = useState(true);
    const [imageSource, setImageSource] = useState(require('../Images/male.png'));
    const [isImage1, setIsImage1] = useState(true);
    var [text, setText] = useState('Male');
    const [textColor, setTextColor] = useState('#000');
    const [textBorderColor, setTextBorderColor] = useState('#00f');
    const handleImagePress = () => {
      if (isImage1) {
        setImageSource(require('../Images/female.png'));
        setText('Female');
        setTextColor('#000');
        setTextBorderColor('#fe1394');
        setGender(!Gender);
        
      } else {
        setImageSource(require('../Images/male.png'));
        setText('Male');
        setTextColor('#000');
        setTextBorderColor('#00f');
        setGender(!Gender);
      }
      setIsImage1(!isImage1);
    };
    
    
    return (
      <View style={styles.UpperContainer}>
        <TouchableOpacity style={{flexDirection:'row',borderRadius:60/2,top:2.5,
          left:5}} onPress={handleImagePress}>
            <Image source={imageSource} style={styles.Gender}/>
            <View style={{flexDirection:'column'}}>
            <Text style={[styles.AppName, {alignSelf:'center', color: textBorderColor }]}>FitClick</Text>
            <Text style={[styles.text, {alignSelf:'center', color: textColor, borderColor: textBorderColor }]}>{text}</Text>
            </View>
          </TouchableOpacity>
          <View>
          <TouchableOpacity >
          <Image style={{width:50,height:50,right:10,top:1}} source={require('../Images/male.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default HeaderLogo;

  const styles = StyleSheet.create({
    UpperContainer:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:60,
        // borderWidth:1,
        top:5
    },
    AppName:{
        left:-10,
        fontSize:12,
        // color:Colors.primary,
        fontWeight:'bold'
    },
    text: {
        borderWidth: 2,
        borderRadius: 5,
        top:2,
        textAlign: 'center',
        justifyContent:'center',
        fontSize: 18,
        width:80,
        height:25,
        left:5,


      },

    Gender:{
        justifyContent:'center',
        top:1,
        left:2.5,
        width:50,
        height:50
    }

})