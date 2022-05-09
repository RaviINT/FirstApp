import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';
import SQLite from 'react-native-sqlite-storage';
import {useEffect} from 'react';
const SQ = () => {
  useEffect(() => {
    createTable();
  });
  const db = SQLite.openDatabase(
    {
      name: 'MainDB',
      location: 'default',
    },
    () => {
      console.log('Database Created');
    },
    err => {
      console.log(err);
    },
  );

  const createTable = () => {
    db.transaction(
      tx => {
        tx.executeSql(
          'CREATE TABLE IF DOES NOT EXISTS' +
            'USERS' +
            '(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT, AGE INTEGER)',
        );
      },
      () => {
        console.log('table created');
      },
    );
  };
  return (
    <View>
      <Text style={styles.Heading}>SQLite</Text>
      <View style={styles.container}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Age" style={styles.input} />
        <View style={styles.btn}>
          <Button title="Save" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Heading: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    margin: 10,
  },
  container: {
    // borderWidth: 1,
    // flex: 1,
    width: '60%',
    margin: '20%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    margin: 20,
    fontSize:25

    
  },
  btn: {
    width:"50%",
    
    marginHorizontal:"25%"
  },
});
export default SQ;
