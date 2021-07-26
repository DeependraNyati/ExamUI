import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const styles = StyleSheet.create({
  FlatListParent: {
    // borderWidth: 5,
    height: responsiveHeight(100),
    backgroundColor: Colors.LIGHT_BLUE,
  },
  Header: {
    flexDirection: 'row',
    // borderWidth: 5,
    height: responsiveHeight(12),
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  IconArrowLeftHeaderParent: {
    marginLeft: 10,
    width: responsiveWidth(12),
    height: responsiveHeight(7),
    borderWidth: 0.5,
    backgroundColor: '#F5FFFA',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  IconArrowLeftHeader: {
    marginTop: 10,
    marginLeft: 8,
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 40,
  },
  FlatList: {
    height: responsiveHeight(15),
  },
  FlatListNavigation: {
    height: responsiveHeight(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DayAndDateParent: {
    flexDirection: 'row',
    marginLeft: 20,
    height: responsiveHeight(15),
    // borderWidth: 5,
  },
  DayAndDate: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 40,
    backgroundColor: Colors.WHITE,
  },
  Day: {
    color: Colors.BLACK,
    fontSize: 15,
    marginLeft: 5,
  },
  Date: {
    color: Colors.BLUE,
    fontWeight: 'bold',
    fontSize: 25,
  },
  DomainBoxImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    //alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: '1%',
    marginLeft: '4%',
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },
  MiddlePart: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(7),
    // borderWidth: 5,
    //flex: 1,
  },
  DomainBox: {
    // borderWidth: 5,
    // alignSelf: 'center',
    height: responsiveHeight(15),
    width: responsiveWidth(73),
    backgroundColor: Colors.TASK_REVIEW_SCREEN_BACKGROUND,
    paddingTop: 15,
    paddingLeft: 15,
    borderRadius: 20,
    elevation: 8,
    paddingLeft: '2%',
    marginBottom: '3%',
    alignSelf: 'flex-start',
  },
  TaskParent: {
    flexDirection: 'column',
  },
  TextOngoing: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.TIME_COLOR,

    paddingLeft: '5%',
    marginTop: 10,
  },

  TimeLine: {
    color: Colors.WHITE,
    position: 'absolute',
    marginTop: '24%',
    alignSelf: 'flex-end',
    right: 20,
  },
  DomainBoxImage2: {
    width: 40,
    height: 40,
    borderRadius: 40,
    //alignSelf: 'flex-end',
    //marginRight: '1%',
    //marginLeft: '1%',
    marginLeft: '3.5%',
    borderWidth: 2,
    borderColor: Colors.WHITE,
    left: 30,
    bottom: 40,
  },
});

export default styles;
