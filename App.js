import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import KeyboardAvoid from './src/Screens/KeyboardAvoid';
import RootNavigation from './src/Screens/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './src/Screens/MainScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Bar from './src/Screens/StatusBar';
import KeyThings from './src/Screens/Switch';
import VirtualizedListExample from './src/Screens/VirtualizedListExample';
import Async from './src/Screens/Async';
import SQ from './src/Screens/SQLite';
import {AuthContext} from './src/Authentication/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bottomsheet from './src/Screens/BottomSheet';
const App = () => {
  const Drawer = createDrawerNavigator();
  const initialState = {
    userEmail: null,
    userToken: "dsfdsfds",
    isLoading: false,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'INITIALTOKEN':
        return {...prevState, isLoading: false, userToken: action.token};
      case 'LOGIN':
        return {
          ...prevState,
          isLoading: false,
          userEmail: action.id,
          userToken: action.token,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          isLoading: false,
          userEmail: null,
          userToken: null,
        };
      case 'SIGNUP':
        return {
          ...prevState,
          isLoading: false,
          userEmail: action.id,
          userToken: action.token,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialState);
  const authContext = React.useMemo(
    () => ({
      signIn: async (Email, password) => {
        try {
          let userToken = null;
          if ((Email == 'user', password == 'pass')) {
            userToken =
              Math.random().toString(36).substring(2, 15) +
              Math.random().toString(36).substring(2, 15);
            await AsyncStorage.setItem('userToken', userToken);
          } else {
            alert('check your credientials');
          }
          dispatch({type: 'LOGIN', id: Email, token: userToken});
        } catch (err) {
          console.log(err);
        }
      },
      signout: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (err) {
          console.log(err);
        }
        dispatch({type: 'LOGOUT'});
      },
      signup: async (email, mobile, password) => {
        try {
          let userToken = null;
          if ((email != '', mobile != '', password != '')) {
            userToken =
              Math.random().toString(36).substring(2, 15) +
              Math.random().toString(36).substring(2, 15);
            await AsyncStorage.setItem('userToken', userToken);
            dispatch({
              type: 'SIGNUP',
              id: email,
              mobile: mobile,
              password: password,
              token: userToken,
            });
          } else {
            alert('check your credientials');
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
    [],
  );
  useEffect(() => {
    setTimeout(() => {
      // dispatch({type: 'INITIALTOKEN', token: '213sdfawr1'});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        size="large"
      />
    );
  }
  // console.log(userToken);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Main" component={MainScreen} />
            <Drawer.Screen name="Keyboard" component={KeyboardAvoid} />
            <Drawer.Screen name="Status Bar" component={Bar} />
            <Drawer.Screen name="KeyThings" component={KeyThings} />
            <Drawer.Screen
              name="Virtualized List"
              component={VirtualizedListExample}
            />
            <Drawer.Screen name="Async Storage" component={Async} />
            <Drawer.Screen name="SQ Lite" component={SQ} />
            <Drawer.Screen name="BottomSheet" component={Bottomsheet} />
          </Drawer.Navigator>
        ) : (
          <RootNavigation />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
