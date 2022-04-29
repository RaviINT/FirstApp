import {View, Text, FlatList, SectionList} from 'react-native';
import React from 'react';

const Page_1 = () => {
  const Data = [
    {
      name: 'Ravi',

      city: ['Mumbai', 'Delhi', 'Nainital'],
    },
    {
      name: 'Shailaja',
      city: ['Patna', 'Kolkata', 'Shimla'],
    },
    {
      name: 'Keerthana',
      city: ['Manali', 'Punjab', 'ShriNagar'],
    },
    {
      name: 'Yash',
      city: ['Banglore', 'Pune', 'Chennai'],
    },
    {
      name: 'Sagar',
      city: ['Goa', 'Bhopal', 'Sikkim'],
    },
    {
      name: 'Prajal',
      city: ['Almora', 'Haldwani', 'Kathgodam'],
    },
  ];

  return (
    <View>
      <Text>Flat List</Text>
      <SectionList
        data={Data}
        // keyExtractor={e => e.name}
        renderItem={e => {
          return console.log(e);
        }}
      />
    </View>
  );
};

export default Page_1;
