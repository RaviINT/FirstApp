import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Async = () => {
  const store = async () => {
    try {
      await AsyncStorage.setItem('Ravi', 'He is nalla');
      console.log('stored');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text>Async</Text>
      <Button
        title="Press me"
        onPress={() => {
          store();
        }}
      />
    </View>
  );
};

export default Async;
