import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../../utils/Colors';
import Responsive, {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive';

const Icon = MaterialCommunityIcons;
const styles = StyleSheet.create({
  Parent: {
    borderRadius: 80,
    backgroundColor: Colors.STEP_BACKGROUND_COLOR,
    width: responsiveWidth(35),
    height: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 10,
  },

  numberOfSteps: {
    // margin: 0,
    // marginLeft: 50,
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 30,
  },

  TextSteps: {
    // margin: 0,
    // marginLeft: 50,
    color: Colors.WHITE,

    fontSize: 10,
  },

  icon: {
    // margin: 20,
  },
});
const StepCircle = () => {
  return (
    <View style={styles.Parent}>
      <Icon name="walk" size={20} color="white" style={styles.icon} />
      <Text style={styles.numberOfSteps}> 7470 </Text>
      <Text style={styles.TextSteps}>Steps </Text>
    </View>
  );
};

export default StepCircle;
