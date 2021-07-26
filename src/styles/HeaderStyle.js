import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  Parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(15),
    width: responsiveWidth(100),
    // borderWidth: 5,
    // position: 'absolute',
  },

  Text: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextAriuka: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  TextGoodMorning: {
    marginLeft: 17,
    fontSize: 13,
    color: 'grey',
  },

  Icon: {
    alignSelf: 'center',
    marginRight: 20,
  },

  ImageParent: {
    marginLeft: 20,
    justifyContent: 'center',
  },

  Image: {
    height: 40,
    width: 40,
    // alignSelf: 'center',
  },
});

export default styles;
