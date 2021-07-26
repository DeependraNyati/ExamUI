import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import WelcomeScreen from '../screens/WelcomeScreen';
import IconScreen from '../screens/IconScreen';
import * as Colors from '../utils/Colors';

const Icon = MaterialCommunityIcons;

const Login = () => {
  return (
    <View style={styles.LoginParent}>
      <View style={styles.IconScreen}>
        <IconScreen />
      </View>
      <View style={styles.WelcomeScreen}>
        <WelcomeScreen />
      </View>
      <View style={styles.SignUp}>
        <TouchableOpacity title="Sign Up">
          <Text style={styles.TextSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 80,
          marginLeft: 30,
          position: 'absolute',
          // borderWidth: 5,
          height: 90,
          width: 90,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 90,
        }}>
        <View style={styles.HomeIconParent}>
          <Icon
            name="home-outline"
            size={50}
            color="blue"
            style={styles.HomeIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  LoginParent: {
    flexDirection: 'row',
  },

  WelcomeScreen: {
    width: responsiveWidth(80),
    height: responsiveHeight(100),
    // borderWidth: 5,
    backgroundColor: Colors.BLACK,
  },

  IconScreen: {
    width: responsiveWidth(20),
    height: responsiveHeight(100),
    // borderWidth: 5,
  },
  HomeIconParent: {
    // position: 'absolute',
    // marginTop: 90,
    // marginLeft: 40,
    borderRadius: 60,
    backgroundColor: Colors.WHITE,
    height: 60,
    width: 60,
  },
  SignUp: {
    width: responsiveWidth(73),
    marginLeft: 55,
    marginTop: 620,
    borderRadius: 60,
    // borderWidth: 1,
    // alignSelf: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    position: 'absolute',
    height: responsiveHeight(8),
  },
  TextSignUp: {
    color: Colors.WHITE,
    marginTop: 0,
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  HomeIcon: {
    marginTop: 5,
    marginLeft: 5,

    // borderWidth: 5,
  },
});
