import {View, Text, Button, TextInput, StyleSheet,ToastAndroid} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

const Async = () => {
  const [text, setText] = useState('');
  const [getText, setGetText] = useState('');
  const store = async () => {
    console.log(text);
    try {
      await AsyncStorage.setItem('Ravi', text);
      ToastAndroid.show("Data Stored",ToastAndroid.TOP,ToastAndroid.CENTER)
    } catch (err) {
      console.log(err);
    }
  };
  const get = async () => {
    try {
      const newText = await AsyncStorage.getItem('Ravi');
      setGetText(newText);
      console.log('Get');
    } catch (err) {
      console.log(err);
    }
  };
  const del = async () => {
    try {
      const newText = await AsyncStorage.removeItem('Ravi');
      ToastAndroid.show("Data Deleted",ToastAndroid.TOP,ToastAndroid.CENTER)
      setGetText('');
     setText("")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20}}>Async</Text>
      <TextInput
      value={text}
        onChangeText={e => setText(e)}
        style={styles.input}
        placeholder="Type Text Here"
      />
      <View style={{margin: 40}}>
        <Button
          title="Store Data"
          onPress={() => {
            store();
          }}
        />
      </View>
      <Text style={{textAlign: 'center', fontSize: 40, color: 'black'}}>
        {getText}
      </Text>
      <View style={{margin: 40}}>
        <Button
          title="Get Data"
          onPress={() => {
            get();
          }}
        />
      </View>
      <View style={{margin: 40}}>
        <Button
          title="Delete Data"
          onPress={() => {
            del();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    marginHorizontal: 40,
    fontSize: 20,
  },
});
export default Async;
