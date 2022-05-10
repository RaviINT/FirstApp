import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, TextInput, Button, FlatList} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'todo',
});
const App = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS List (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
        [],
        () => {
          console.log('Table Created Succesfully'),
            err => {
              console.log(err.message);
            };
        },
      );
    });
  };

  const addCategory = () => {
    if (!category) {
      alert('Enter Category');
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO List (name) VALUES (?)',
        [category],
        () => {
          console.log(`${category} added succesfully`);
          setCategory('');
        },
        err => {
          console.log(err.message);
        },
      );
    });
  };

  const getList = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM List',
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, name: item.name});
            }

            setCategories(results);
            console.log('List get Succesfully');
          }
        },
        err => {
          console.log(err.message);
        },
      );
    });
  };

  const renderCategory = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text style={{marginRight: 9}}>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };

  useEffect(() => {
    createTable();
    getList();
  }, []);

  return (
    <View style={{margin: 30}}>
      <StatusBar backgroundColor="#222" />

      <TextInput
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
        style={{marginHorizontal: 8}}
      />

      <Button title="Submit" onPress={addCategory} />

      <FlatList
        data={categories}
        renderItem={renderCategory}
        key={cat => cat.id}
      />
    </View>
  );
};

export default App;
