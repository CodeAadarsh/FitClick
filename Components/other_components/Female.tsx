import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { FemaleFront, FemaleBack } from './FemaleSVG';
import { useState } from 'react';

const Female = () => {
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
      <ScrollView style={styles.ScrollArea}>
        <View style={styles.Body}>
          <View style={{right:120, top:10}}>
            <TouchableOpacity style={{
              width: 90,
              height: 35,
              alignItems:'center',
              justifyContent:'center'
            }}
              onPress={handleImagePress}>
      
              <Text
                style={[
                  styles.text,
                  {
                    alignSelf: 'center',
                    color: textColor,
                    borderColor: "#fe1394",
                  },
                ]}>
                {text}
              </Text>
            </TouchableOpacity>
          </View>
          {/* body */}
          <View style={{ alignItems: 'center', justifyContent: 'center',  }}>
            {showFront ? <FemaleFront /> : <FemaleBack />}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Female;

const styles = StyleSheet.create({
  ScrollArea: {
    position: 'absolute',
    width: '100%',
    top: 65,
  },
  Body: {
    flex:1,
    borderRadius: 20,
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
