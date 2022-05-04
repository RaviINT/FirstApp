import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={styles.image}>
        <View style={styles.bottombox}></View>
        <View style={styles.box}>
          <View style={styles.heading}>
            <Text style={styles.my}>My</Text>
            <Text style={styles.shop}>Shop</Text>
          </View>

          <Text style={styles.subHead}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Made By Ravi');
            }}>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate('Page_1');
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  bottombox: {
    width: '65%',
    height: '45%',
    backgroundColor: '#DBA509',
    position: 'absolute',
    top: '55%',
    right: 0,
    borderTopLeftRadius: 120,
    opacity: 0.7,
  },
  box: {
    width: '100%',
    height: '38%',
    backgroundColor: '#8B09DB',
    position: 'absolute',
    top: '62%',
    right: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  heading: {
    flexDirection: 'row',
  },

  my: {
    flex: 1,
    width: 200,
    textAlign: 'right',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#DBA509',
    marginTop: 20,
    // borderWidth: 1,

    height: 60,
  },
  shop: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    height: 60,
    // borderWidth: 1,
  },
  subHead: {
    margin: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Cursive',
    // borderWidth: 1,
    height: 60,
    fontSize: 20,
    // backgroundColor:"red"
  },
  btn: {
    backgroundColor: '#F6B20A',
    padding: 20,
    width: '60%',
    marginLeft: '20%',
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default Home;
