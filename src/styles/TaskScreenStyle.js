import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Colors from '../utils/Colors';
const styles = StyleSheet.create({
  Parent: {
    height: responsiveHeight(100),
    backgroundColor: Colors.TASK_SCREEN_BACKGROUND,
  },
  ImageParent: {
    marginTop: 55,
    marginLeft: 55,
    // borderWidth: 5,
    height: responsiveHeight(40),
  },
  Image: {
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
    height: 300,
  },

  MiddlePart: {
    marginLeft: 40,
    // borderWidth: 5,
    width: responsiveHeight(100),
    height: responsiveHeight(30),
  },
  TextManageYour: {
    marginLeft: 15,
    marginTop: 80,
    fontSize: 30,
    fontWeight: 'bold',
  },
  TextDailyTasks: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  Sentence: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 15,
  },
  Sentence1: {
    marginLeft: 15,
    fontSize: 15,
  },
  Get: {
    marginTop: 20,
    marginLeft: 90,
    // borderWidth: 2,
    width: responsiveWidth(15),
    borderRadius: 50,
    height: 67,
    width: 67,
    backgroundColor: Colors.WHITE,
  },
  TextGet: {
    marginTop: 22,
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  EndPart: {
    // borderWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(14),
    right: 31,
    marginTop: 30,
  },
  TextStarted: {
    marginTop: 24,
    marginLeft: 0,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
