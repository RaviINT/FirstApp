import React from 'react';

import {View, Text} from 'react-native';
import Home from './src/Screens/Home';
import Page_1 from './src/Screens/SelectionList';
import VectorIcons from './src/Screens/VectorIcons';
import Touchable from './src/Screens/Touchable';
import KeyboardAvoid from './src/Screens/KeyboardAvoid';
import Drawer from './src/Screens/drawer';
import Contact from './src/Screens/Contact';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainScreen from './src/Screens/MainScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Keyboard" component={KeyboardAvoid} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
