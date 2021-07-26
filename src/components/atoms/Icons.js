import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {StyleSheet} from 'react-native';
import * as Colors from '../../utils/Colors';

const Icon = MaterialCommunityIcons;
const Icons = props => {
  return <Icon name={props.IconName} size={props.Size} color={Colors.WHITE} />;
};

export default Icons;
