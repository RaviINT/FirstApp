import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';
import SQLite from 'react-native-sqlite-storage';
import {useEffect} from 'react';
import {useState} from 'react';
const SQ = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    createTable();
  }, []);
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
  const store = async () => {
    try {
      await db.transaction(
        async tx => {
          await tx.executeSql(
            "INSERT INTO Users(Name, Age) VALUES ('" + name + "'," + age + ')',
          );
        },
        () => {
          console.log('Success');
        },
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text style={styles.Heading}>SQLite</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onChangeText={e => setName(e)}
          value={name}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          onChangeText={e => setAge(e)}
          value={age}
          style={styles.input}
        />
        <View style={styles.btn}>
          <Button
            title="Save"
            onPress={() => {
              store();
            }}
          />
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
    fontSize: 25,
  },
  btn: {
    width: '50%',

    marginHorizontal: '25%',
  },
});
export default SQ;
