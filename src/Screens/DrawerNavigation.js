import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      
     
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        {/* <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Page_1" component={Page_1} />
        <Drawer.Screen name="VectorIcons" component={VectorIcons} />
        <Drawer.Screen name="KeyboardAvoid" component={KeyboardAvoid} />
        <Drawer.Screen name="Touchable" component={Touchable} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation