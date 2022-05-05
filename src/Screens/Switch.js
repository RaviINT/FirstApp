import {
  View,
  Text,
  Switch,
  StyleSheet,
  Modal,
  Button,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
const SwitchKey = () => {
  const [isEnabled, setIsEnable] = useState(false);
  return (
    <View>
      <Text style={{fontSize: 20, color: 'black', marginTop: 100}}>Switch</Text>
      <Switch
        style={styles.switch}
        onValueChange={() => {
          setIsEnable(!isEnabled);
        }}
        value={isEnabled}
      />
    </View>
  );
};
const ModalBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text>This is Modal</Text>
            <Button
              style={{}}
              title="Hide Modal"
              onPress={() => {
                setIsVisible(!isVisible);
              }}
            />
          </View>
        </View>
      </Modal>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          marginTop: 100,
          textAlign: 'center',
        }}>
        Modal
      </Text>
      <Button
        title="Show Modal"
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      />
    </View>
  );
};
const Toasts = () => {
  function Show() {
    ToastAndroid.show(
      'Hii, This is Ravinder',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
  }
  return (
    <View style={{marginTop: 100}}>
      <Button
        title="Show Toast"
        onPress={() => {
          Show();
        }}
      />
    </View>
  );
};
const KeyThings = () => {
  return (
    <View style={styles.container}>
      <SwitchKey />
      <ModalBox />
      <ActivityIndicator style={{marginTop: 100}} color="red" size="large" />
      <Toasts />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',

    elevation: 5,
  },
});
export default KeyThings;
