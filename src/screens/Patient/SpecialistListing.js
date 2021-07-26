import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SpecialistListing = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text onPress={() => navigation.navigate('SpecialistDetail')}>
        Specialist Listing1
      </Text>
      <Text onPress={() => navigation.navigate('SpecialistDetail1')}>
        Specialist Listing2
      </Text>
    </View>
  );
};

export default SpecialistListing;
