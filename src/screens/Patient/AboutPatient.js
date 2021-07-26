import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const AboutPatient = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>About Patient</Text>
      <Button
        title="Simon Go Back"
        onPress={() => navigation.navigate('DrawerPatient')}
      />
    </View>
  );
};

export default AboutPatient;
