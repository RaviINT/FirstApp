import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import React from 'react';
const KeyboardAvoid = () => {
  return (
    <KeyboardAvoidingView
      style={styles.box}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={{marginTop:10}}>
          <Text style={styles.head}>Email</Text>
          <TextInput style={styles.input} placeholder="Email Here" />
        </View>
        <View style={{marginTop:50}}>
          <Text style={styles.head}>Password</Text>
          <TextInput style={styles.input} placeholder="Password" />
        </View>

        <View style={styles.btn}>
          <Button title="Submit" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-around',
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btn: {
    marginTop: 60,
  },
});
export default KeyboardAvoid;
