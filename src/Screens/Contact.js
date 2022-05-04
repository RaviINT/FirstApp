import {View, Text} from 'react-native';
import React from 'react';
import VectorIcons from './VectorIcons';
import Touchable from './Touchable';
import KeyboardAvoid from './KeyboardAvoid';
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Contact = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Keyboard" component={KeyboardAvoid} />
      <Stack.Screen name="Touchable" component={Touchable} />
    </Stack.Navigator>
  );
};

export default Contact;
