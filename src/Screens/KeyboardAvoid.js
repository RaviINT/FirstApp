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
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView>
          <View style={styles.inner}>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>

            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.header}>Header</Text>

            <TextInput placeholder="Username" style={styles.textInput} />
            <View style={styles.btnContainer}>
              <Button title="Submit" onPress={() => null} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  // inner: {
  //   padding: 24,
  //   flex: 1,
  //   justifyContent: 'space-around',
  // },
  // header: {
  //   fontSize: 36,
  // },
  // textInput: {
  //   height: 40,
  //   borderColor: '#000000',
  //   borderBottomWidth: 1,
  //   marginBottom: 36,
  // },
  // btnContainer: {
  //   backgroundColor: 'white',
  //   marginTop: 12,
  // },
});
export default KeyboardAvoid;
