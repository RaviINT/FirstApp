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

const App = () => {
  const Drawer = createDrawerNavigator();
  const [isLoading, setLoading] = React.useState(true);
  const [userToken, setToken] = React.useState(null);
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setToken('dafafsadfad');
      setLoading(false);
    },
    signUp: () => {
      setToken(null);
      setLoading(false);
    },
    signout: () => {
      setToken('dafafsadfad');
      setLoading(false);
    },
  }));
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        size="large"
      />
    );
  }
  console.log(userToken)
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
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
          </Drawer.Navigator>
        ) : (
          <RootNavigation />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
