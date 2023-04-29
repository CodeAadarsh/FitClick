import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { MaleBack, MaleFront } from './MaleSVG';
import { useState } from 'react';

const Male = () => {
  const [whichSide, setwhichSide] = useState(true);
  const [text, setText] = useState('Front');
  const [showFront, setShowComponentA] = useState(true);
  const [textColor, setTextColor] = useState('#000');
  const handleImagePress = () => {
    if (whichSide) {
      setText('Back');
      setTextColor('#000');
      setShowComponentA(!showFront);
    } else {
      setText('Front');
      setTextColor('#000');
      setShowComponentA(!showFront);
    }
    setwhichSide(!whichSide);
  };
  return (
    <View>
      <View style={styles.ScrollArea}>
        <View style={styles.Body}>
          <View style={{right:120, top:10}}>
            <TouchableOpacity style={{
              width: 90,
              height: 35,
              alignItems:'center',
              justifyContent:'center',
            }}
              onPress={handleImagePress}>
      
              <Text
                style={[
                  styles.text,
                  {
                    alignSelf: 'center',
                    color: textColor,
                    borderColor: "#00f",
                  },
                ]}>
                {text}
              </Text>
            </TouchableOpacity>
          </View>
          {/* body */}
          <View style={{ alignItems: 'center', justifyContent: 'center',  }}>
            {/* <View style={{position:'absolute',width:1080,height:500}}>
              <Text>Helo</Text>
            </View> */}
            {showFront ? <MaleFront /> : <MaleBack />}</View>
        </View>
      </View>
    </View>
  );
};

export default Male;

const styles = StyleSheet.create({
  ScrollArea: {
    backgroundColor:'#fff',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    position: 'absolute',
    width: '100%',
    height:1920,
    top: 65,
  },
  Body: {
    flex:1,
    // borderWidth:1,
    // borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    borderWidth: 2,
    borderRadius: 5,
    top: 2,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    width: 80,
    height: 25,
  },
});
