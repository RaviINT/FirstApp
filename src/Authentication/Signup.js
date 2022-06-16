import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {AuthContext} from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDrawerStatus} from '@react-navigation/drawer';
const Signup = ({navigation}) => {
  const {signup} = React.useContext(AuthContext);
  const [oldData, setOldData] = useState([]);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    store();
  };
  const store = async () => {
    try {
      const fetchData = await AsyncStorage.getItem('userData');
      await setOldData(fetchData);

      const data = {
        email: email,
        mobile: mobile,
        password: password,
      };
      await setOldData([{...oldData}, data]);
      console.log(oldData);
      // await AsyncStorage.setItem('userData', JSON.stringify(oldData));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Sign Up</Text>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.box}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            placeholder="Mobile Number"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={e => setMobile(e)}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={e => setEmail(e)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={e => setPassword(e)}
          />
          <View style={styles.btn}>
            <Button title="Submit" onPress={() => handleSignup()} />
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
