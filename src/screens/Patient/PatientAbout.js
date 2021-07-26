import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PatientAbout = () => {
  return (
    <View style={{flex: 1}}>
      <Text>About the Patient</Text>
      <Button
        title="Simon Go Back"
        onPress={() => navigation.navigate('DrawerPatient')}
      />
    </View>
  );
};

export default PatientAbout;
