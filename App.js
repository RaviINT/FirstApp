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
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainScreen from './src/Screens/MainScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page_1" component={Page_1}/>
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Icon
                  name="home"
                  size={28}
                  style={{color: focused ? 'red' : 'blue'}}
                />
                {/* <Text style={{color: focused ? 'red' : 'blue', fontSize: 15}}>
                  Home
                </Text> */}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Page_1"
          component={Page_1}
          options={{
            // tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Icon
                  name="slideshow"
                  size={28}
                  style={{color: focused ? 'red' : 'blue'}}
                />
                {/* <Text style={{color: focused ? 'red' : 'blue', fontSize: 15}}>
                  List
                </Text> */}
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
