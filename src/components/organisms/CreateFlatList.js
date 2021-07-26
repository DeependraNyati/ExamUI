import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import styles from '../../styles/FlatListIntegratedStyle';

const DATA = [
  {date: 12, day: 'Wed'},
  {date: 13, day: 'Thu'},
  {date: 14, day: 'Fri'},
  {date: 15, day: 'Sat'},
  {date: 16, day: 'Sun'},
  {date: 17, day: 'Mon'},
  {date: 18, day: 'Tue'},
];
const CreateFlatList = () => {
  return (
    <FlatList
      horizontal={true}
      data={DATA}
      renderItem={({item}) => {
        return (
          <View style={styles.DayAndDateParent}>
            <View style={styles.DayAndDate}>
              <Text style={styles.Date}>{item.date}</Text>
              <Text style={styles.Day}>{item.day}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default CreateFlatList;
