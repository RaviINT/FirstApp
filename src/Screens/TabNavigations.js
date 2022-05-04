import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const TabNavigations = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
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
        />
        <Tab.Screen
          name="Page_1"
          component={Page_1}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Icon
                  name="slideshow"
                  size={28}
                  style={{color: focused ? 'red' : 'blue'}}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};

export default TabNavigations;
