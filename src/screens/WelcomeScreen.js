import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {responsiveWidth} from '../utils/Responsive';
import styles from '../styles/WelcomeScreenStyle';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Icon = MaterialCommunityIcons;

const WelcomeScreen = () => {
  return (
    <View>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Smart Home</Text>
      </View>
      <View style={styles.Child1}>
        <View style={styles.Welcome}>
          <Text style={styles.TextWelcome}>Welcome</Text>
          <Text style={styles.TextRandom}>
            Random Text Random Text Random Text Random Text Random Text Random
            Text Random Text
          </Text>
        </View>
        <View style={styles.NameAndLine}>
          <Text style={styles.Properties}>First Name</Text>
          <View style={styles.HorizontalLine}></View>
        </View>
        <View>
          <Text style={styles.Properties}>Last Name</Text>
          <View style={styles.HorizontalLine}></View>
        </View>
        <View>
          <Text style={styles.Properties}>E-Mail</Text>
          <View style={styles.HorizontalLine}></View>
        </View>
        <View>
          <Text style={styles.Properties}>Password</Text>
          <View style={styles.HorizontalLine}></View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="checkbox-blank-outline"
            size={15}
            color="white"
            style={{
              // paddingTop: 30,
              // paddingLeft: 35,
              marginLeft: 39,
              marginTop: 31.5,
              backgroundColor: 'white',
              height: 12,
              width: 12,
            }}
          />
          <Text style={styles.TandC}>I Agree</Text>
          {/* <View style={styles.HorizontalLine}></View> */}
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
