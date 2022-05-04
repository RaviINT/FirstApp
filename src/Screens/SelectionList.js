import {View, Text, FlatList, SectionList} from 'react-native';
import React from 'react';

const Page_1 = () => {
  const DATA = [
    {
      title: 'Ravi',
      data: ['Mumbai', 'Delhi', 'Nainital'],
    },
    {
      title: 'Shailaja',
      data: ['Patna', 'Kolkata', 'Shimla'],
    },
    {
      title: 'Keerthana',
      data: ['Manali', 'Punjab', 'ShriNagar'],
    },
    {
      title: 'Yash',

      data: ['Banglore', 'Pune', 'Chennai'],
    },
    {
      title: 'Sagar',
      data: ['Goa', 'Bhopal', 'Sikkim'],
    },
    {
      title: 'Prajal',
      data: ['Almora', 'Haldwani', 'Kathgodam'],
    },
  ];

  return (
    <View>
      <Text>Section List</Text>
      <SectionList
        sections={DATA}
        renderItem={({item}) => (
          <View>
            <Text>City:{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text style={{fontSize: 30}}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Page_1;
