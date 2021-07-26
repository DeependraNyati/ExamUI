import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {responsiveWidth} from '../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveHeight} from '../utils/Responsive';
import * as Colors from '../utils/Colors';

const Icon = MaterialCommunityIcons;

const styles = StyleSheet.create({
  Parent: {
    height: responsiveHeight(100),
    backgroundColor: 'blue',
  },
  Icon: {
    marginTop: 5,
    marginLeft: 5,

    // borderWidth: 5,
  },
  MenuIcon: {
    marginTop: 25,
    marginLeft: 20,
  },
  IconParent: {
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 60,
    backgroundColor: 'white',
    height: 40,
    width: 40,
  },
});
const IconScreen = () => {
  return (
    <View style={styles.Parent}>
      <View style={styles.MenuIcon}>
        <Icon name="menu" size={30} color={Colors.WHITE} style={styles.Icon} />
      </View>
      {/* <View style={styles.IconParent}>
        <Icon name="home-outline" size={30} color={Colors.BLACK} style={styles.Icon} />
      </View> */}
      <View style={{marginTop: 80}}>
        <View style={styles.IconParent}>
          <Icon
            name="cellphone"
            size={30}
            color={Colors.BLACK}
            style={styles.Icon}
          />
        </View>
        <View style={styles.IconParent}>
          <Icon
            name="bell"
            size={30}
            color={Colors.BLACK}
            style={styles.Icon}
          />
        </View>
        <View style={styles.IconParent}>
          <Icon name="cog" size={30} color={Colors.BLACK} style={styles.Icon} />
        </View>
        <View style={styles.IconParent}>
          <Icon
            name="power"
            size={30}
            color={Colors.BLACK}
            style={styles.Icon}
          />
        </View>
      </View>
    </View>
  );
};

export default IconScreen;
