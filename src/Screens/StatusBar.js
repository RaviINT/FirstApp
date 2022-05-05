import {View, Text, StyleSheet, Button, TouchableHighlight,StatusBar} from 'react-native';
import React from 'react';
import { useState } from 'react';

const Bar = () => {
    const styletype=["default","dark-content","light-content"];
    const [visibleStatusBar,setVisibleStatusBar]=useState(false)
    const [styleStatusBar,setStyleStatusBar]=useState(styletype[0])
    const styleStatus=()=>{
        const styleId=styletype.indexOf(styleStatusBar)+1
        if(styleId===styletype.length){
            return setStyleStatusBar(styletype[0])
        }
        return setStyleStatusBar(styletype[styleId])
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Status Bar</Text>
      <Text style={styles.text}>Status Bar Visibilty:</Text>
      <Text style={styles.text}>Status Bar Style:</Text>
      <StatusBar backgroundColor="blue" hidden={visibleStatusBar} barStyle={styleStatusBar}/>
      <View style={styles.box}>
        <View style={styles.btnbox}>
          <Button style={styles.btn} title="Visibilty" onPress={()=>{
              setVisibleStatusBar(!visibleStatusBar)
          }} />
        </View>
        <View style={styles.btnbox}>
          <Button style={styles.btn} title="Style" onPress={()=>{
              styleStatus()
          }} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  box: {
    padding: 20,
  },
  btn: {
    backgroundColor: 'red',
  },
  btnbox:{
      margin:10
  },
  text:{
      textAlign:"center",
      color:"black",
      fontSize:20
  }
});
export default Bar;
