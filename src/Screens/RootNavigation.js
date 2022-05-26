import React from 'react';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
