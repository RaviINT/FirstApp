import {
  View,
  Text,
  VirtualizedList,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const VirtualizedListExample = () => {
  const DATA = [];
  const getItemCount = data => 50;
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Box ${index + 1}`,
  });
  return (
    <View>
      <SafeAreaView>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 30,
            margin: 10,
          }}>
          VirtualizedListExample
        </Text>

        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({item}) => (
            <View style={styles.box}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: '50%',
    borderWidth: 1,
    backgroundColor: '#03e3fc',
    marginHorizontal: '25%',
    marginTop: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default VirtualizedListExample;
