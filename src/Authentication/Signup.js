import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import React from 'react';
import {AuthContext} from './Context';
const Signup = ({navigation}) => {
  const {signup} = React.useContext(AuthContext);
  return (
    <View>
      <Text style={styles.heading}>Sign Up</Text>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={styles.input}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.btn}>
            <Button
              title="Submit"
              onPress={() => {
                signup();
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="Login"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    margin: 20,
    fontWeight: 'bold',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: 'black',
    margin: 5,
  },
  input: {
    borderBottomWidth: 2,
    margin: 10,
    width: '80%',
  },
  btn: {
    width: 150,
    margin: 20,
  },
});
export default Signup;
