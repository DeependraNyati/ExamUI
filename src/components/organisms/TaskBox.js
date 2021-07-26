import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';
import DomainBox from './DomainBox';
import * as Colors from '../../utils/Colors';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const styles = StyleSheet.create({
  TaskBoxParent: {
    flexDirection: 'row',
    height: responsiveHeight(18),
    width: responsiveWidth(100),
    // borderWidth: 5,
  },
  Time: {
    justifyContent: 'space-between',
  },
  TextTimeStart: {
    marginTop: 18,
    marginLeft: 14,
    color: Colors.TIME_COLOR,
  },
  TextTimeEnd: {
    marginBottom: 33,
    marginLeft: 14,
    color: Colors.TIME_COLOR,
  },
});
const TaskBox = props => {
  return (
    <View style={styles.TaskBoxParent}>
      <View style={styles.Time}>
        <Text style={styles.TextTimeStart}>{props.TimeStart}</Text>
        <Text style={styles.TextTimeEnd}>{props.TimeEnd}</Text>
      </View>
      <View style={{marginLeft: 40, marginTop: 5}}>
        <DomainBox
          Domain={props.Domain}
          Names={props.Names}
          Photo={props.Photo}
          TimeLine={props.TimeLine}
        />
      </View>
    </View>
  );
};

export default TaskBox;
