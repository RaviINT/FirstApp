import {
  View,
  Text,
  DrawerLayoutAndroid,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/Entypo';
const Drawer = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View>
      <TouchableOpacity>
        <Icons
          onPress={() => drawer.current.closeDrawer()}
          name="cross"
          style={styles.cross}
        />
      </TouchableOpacity>
      <Text style={styles.text}>I'm in the Drawer!</Text>
    </View>
  );

  return (
    <>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <TouchableOpacity>
          <View>
            <Icon
              onPress={() => drawer.current.openDrawer()}
              style={styles.btn}
              name="three-bars"
              size={20}
            />
          </View>
          <Text style={styles.head}>This is Home Page</Text>
        </TouchableOpacity>
      </DrawerLayoutAndroid>
    </>
  );
};
const styles = StyleSheet.create({
  btn: {
    margin: 9,
    color: 'red',
    fontSize: 40,
    marginTop: 20,
  },
  cross: {
    fontSize: 50,
    textAlign: 'right',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'green',
    marginTop: 20,
  },
  head: {
    fontSize: 50,
    textAlign:"center",
color:"blue",
marginTop:50
  },
});

export default Drawer;
