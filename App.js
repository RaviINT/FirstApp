import React from 'react';

import {View, Text} from 'react-native';
import Home from './src/Screens/Home';
import Page_1 from './src/Screens/SelectionList';
import VectorIcons from './src/Screens/VectorIcons';
import KeyboardAvoid from './src/Screens/KeyboardAvoid';
import Drawer from './src/Screens/drawer';
import Touchable from './src/Screens/Touchable';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page_1" component={Page_1}/>
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={{
         tabBarShowLabel:false,
          tabBarStyle: {
            position: 'absolute',
            margin: 7,
            borderRadius: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                }}>
                <Icon name="home" size={30} style={{color: focused ? 'red' : 'blue'}} />
                <Text style={{color: focused ? 'red' : 'blue', fontSize: 12}}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Page_1"
          component={Page_1}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                  
                }}>
                <Icon name="slideshow" size={30} style={{color: focused ? 'red' : 'blue'}} />
                <Text style={{color: focused ? 'red' : 'blue', fontSize: 12}}>
                  List
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Page_1" component={Page_1} />
        <Drawer.Screen name="VectorIcons" component={VectorIcons} />
        <Drawer.Screen name="KeyboardAvoid" component={KeyboardAvoid} />
        <Drawer.Screen name="Touchable" component={Touchable} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
