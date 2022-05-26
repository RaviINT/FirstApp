import {View, Text} from 'react-native';
import React from 'react';
import Home from './Home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Page_1 from './SelectionList';
import Contact from './RootNavigation';
const MainScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                size={28}
                style={{color: focused ? 'red' : 'blue'}}
              />
            </View>
          ),
        }}
      /><Tab.Screen
      name="Contact"
      component={Contact}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Icon
              name="home"
              size={28}
              style={{color: focused ? 'red' : 'blue'}}
            />
          </View>
        ),
      }}
    />
     <Tab.Screen
        name="Page"
        component={Page_1}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                size={28}
                style={{color: focused ? 'red' : 'blue'}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
