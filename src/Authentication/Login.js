import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {AuthContext} from '../Authentication/Context';

const Login = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    signIn(Email,password)
  };
  return (
    <View>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          name="Email"
          value={Email}
          onChangeText={e => setEmail(e)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          name="password"
          value={password}
          onChangeText={e => setPassword(e)}
        />
        <View style={styles.btn}>
          <Button title="Submit" onPress={() => handleLogin()} />
        </View>
        <View style={styles.btn}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
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
    margin: 10,
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
export default Login;
