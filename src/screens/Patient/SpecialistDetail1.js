import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const SpecialistDetail1 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>I am Deependra</Text>
      <Text>I am D-Pain</Text>
      <Button
        title="Simon Go Back"
        onPress={() => navigation.navigate('SpecialistListing')}
      />
    </View>
  );
};

export default SpecialistDetail1;
