import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';
import styles from '../../styles/HeaderStyle';
const Icon = MaterialCommunityIcons;

// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     height: responsiveHeight(15),
//     width: responsiveWidth(100),
//   },

//   Text: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   TextAriuka: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   TextGoodMorning: {
//     marginLeft: 17,
//     fontSize: 13,
//   },

//   Icon: {
//     alignSelf: 'center',
//     marginRight: 20,
//   },

//   ImageParent: {
//     marginLeft: 20,
//     justifyContent: 'center',
//   },

//   Image: {
//     height: 50,
//     width: 50,
//     // alignSelf: 'center',
//   },
// });

const Header = () => {
  return (
    <View style={styles.Parent}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ImageParent}>
          <Image
            source={require('../../assets/images/Ireland_Cricket.png')}
            style={styles.Image}
          />
        </View>
        <View style={styles.Text}>
          <Text style={styles.TextGoodMorning}>Good Morning</Text>
          <Text style={styles.TextAriuka}> Ariuka</Text>
        </View>
      </View>

      <View style={styles.Icon}>
        <Icon name="home-outline" size={30} />
      </View>
    </View>
  );
};

export default Header;
