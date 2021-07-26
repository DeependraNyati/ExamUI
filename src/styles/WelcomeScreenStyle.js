import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Colors from '../utils/Colors';

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
    marginTop: 25,
    paddingTop: 3,
  },
  HeaderText: {
    color: Colors.WHITE,
  },

  Welcome: {
    marginTop: 60,
    marginLeft: 60,
  },
  TextWelcome: {
    color: 'blue',
    fontSize: 30,
  },
  TextRandom: {
    marginTop: 20,
    color: Colors.WHITE,
    marginRight: 20,
  },

  Child1: {
    justifyContent: 'space-evenly',
  },
  NameAndLine: {
    justifyContent: 'space-between',
  },
  Properties: {
    marginTop: 30,
    marginLeft: 60,
    fontSize: 15,
    color: Colors.WHITE,
  },
  TandC: {
    color: Colors.WHITE,
    marginTop: 28,
    paddingLeft: 7,
  },
  HorizontalLine: {
    width: responsiveWidth(40),
    borderWidth: 1,
    marginLeft: 60,
    marginTop: 20,
    borderColor: Colors.WHITE,
  },

  SignUp: {
    width: responsiveWidth(60),
    marginTop: 40,
    borderRadius: 60,
    borderWidth: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
  },

  TextSignUp: {
    color: Colors.WHITE,
    marginTop: 20,
    marginLeft: 60,
  },
});

export default styles;
