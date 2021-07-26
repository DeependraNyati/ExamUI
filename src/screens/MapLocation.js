import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../components/molecules/Header';
import StepCircle from '../components/molecules/StepCircle';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../utils/Colors';
import GetLoction from '../GetLocation';
import Svg from 'react-native-svg';

const Icon = MaterialCommunityIcons;
const styles = StyleSheet.create({
  Parent: {
    // borderWidth: 5,
    // flex:1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },

  StepsEnergyAndDurationParent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    height: responsiveHeight(35),
  },

  Icon: {
    marginTop: 290,
    // borderWidth: 5,
    // borderBottomEndRadius: 50,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    // borderTopLeftRadius: -80,

    backgroundColor: Colors.WHITE,
    height: 100,
    width: '25%',
    alignSelf: 'flex-end',
    // marginLeft: 280,
    // borderWidth: 5,
    position: 'absolute',
    // marginEnd: 20,
    paddingBottom: 60,
    justifyContent: 'center',
    paddingTop: 25,
    right: 25,
    elevation: 10,
  },

  VerticalLine: {
    marginTop: 20,
    width: 1,
    height: 50,
    borderWidth: 1,
  },

  DurationAndEnergy: {
    // height: responsiveHeight(30),
    // width: responsiveWidth(100),
    marginTop: 10,
    justifyContent: 'space-between',
  },

  Duration: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  TextDuration: {
    fontSize: 15,
  },

  TextEnergy: {
    fontSize: 15,
  },
  Energy: {
    marginBottom: 120,
    fontWeight: 'bold',
    fontSize: 25,
  },
  TextAndEnergy: {
    marginTop: 10,
  },

  ExceptMap: {
    elevation: 10,
    position: 'absolute',
    backgroundColor: 'white',
    borderBottomLeftRadius: 95,
    // padding: 20,
    // paddingBottom: 60,
    height: responsiveHeight(40),
    // zIndex: 11,
  },

  Location: {
    // borderWidth: 5,
    flex: 1,
    // borderTopStartRadius: 60,
    height: responsiveHeight(41),
  },
});
const MapLocation = () => {
  return (
    <View style={styles.Parent}>
      <View style={styles.Location}>
        <GetLoction />
      </View>
      <View style={styles.ExceptMap}>
        <Header />

        <View style={styles.StepsEnergyAndDurationParent}>
          {/* <View> */}
          <StepCircle />
          {/* </View> */}
          <View style={styles.VerticalLine}></View>
          <View style={styles.DurationAndEnergy}>
            <View>
              <Text style={styles.TextDuration}>Duration</Text>
              <Text style={styles.Duration}>0:37:21</Text>
            </View>
            <View style={styles.TextAndEnergy}>
              <Text style={styles.TextEnergy}>Energy</Text>
              <Text style={styles.Energy}>75.5 kcal</Text>
            </View>
            {/* <View style={styles.Icon}>
              <Icon
                name="pause"
                size={25}
                color="white"
                style={{alignSelf: 'center', marginTop: 25, borderWidth: 1}}
              />
            </View> */}
          </View>
        </View>
      </View>

      <View style={styles.Icon}>
        <Icon
          name="pause"
          size={25}
          color="white"
          style={{
            alignSelf: 'center',
            marginTop: 25,
            // borderWidth: 1,
            backgroundColor: 'red',
            width: 80,
            height: 80,
            borderRadius: 40,
            padding: 28,
            // marginBottom: 50,
          }}
        />
      </View>
    </View>
  );
};

export default MapLocation;
