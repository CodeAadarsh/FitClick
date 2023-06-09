import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Male from '../other_components/Male';
import Female from '../other_components/Female';
const Home = ({navigation}) => {
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
    <View style={{flexDirection:'column',}}>
      <View style={styles.UpperContainer}>
        <StatusBar backgroundColor={'#f2f2f2'}
        barStyle={'dark-content'}
        animated={true}/>
        <TouchableOpacity style={{flexDirection:'row',borderRadius:60/2,top:2.5,
          left:5}} onPress={handleImagePress}>
            <Image source={imageSource} style={styles.Gender}/>
            <View style={{flexDirection:'column'}}>
            <Text style={[styles.AppName, {alignSelf:'center', color: textBorderColor }]}>FitClick</Text>
            <Text style={[styles.text, {alignSelf:'center', color: textColor, borderColor: textBorderColor }]}>{text}</Text>
            </View>
          </TouchableOpacity>
          <View>
          <TouchableOpacity style={{height:500,}} onPress={()=>{navigation.navigate('Account')}} >
          <Image style={{width:40,height:40,right:10,alignSelf:'center'}} source={require('../Images/profile-active.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
        <View style={{}}>
        {Gender ? <Male /> : <Female />}
        </View>
        
    </View>
    );
  };
  
  export default Home;

  const styles = StyleSheet.create({
    UpperContainer:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:70,
        // borderWidth:1,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        paddingTop:5,
        top:-2,
        elevation:1
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