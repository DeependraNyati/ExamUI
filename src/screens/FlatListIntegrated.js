import React, {Component} from 'react';
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
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Colors from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/FlatListIntegratedStyle';
import DomainBox from '../components/organisms/DomainBox';
import CreateFlatList from '../components/organisms/CreateFlatList';
import TaskBox from '../components/organisms/TaskBox';

const Icon = MaterialCommunityIcons;

class FlatListIntegrated extends React.Component {
  state = {
    CurrMonth: 4,
  };
  Month = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  render() {
    const PreviousMonth = (this.state.CurrMonth - 1) % 13;
    // console.log('PreviousMonth', PreviousMonth);
    const NextMonth = (this.state.CurrMonth + 1) % 13;
    const CurrentMonth = this.state.CurrMonth % 13;
    const {CurrMonth} = this.state;
    const {Month} = this.Month;
    //  {PreviousMonth} = this.PreviousMonth;
    // const {NextMonth} = this.NextMonth;
    // const {CurrentMonth} = this.CurrentMonth;
    // console.log(this.state);
    // console.log(this.Month);
    // console.log(this.PreviousMonth);
    // console.log(this.NextMonth);

    return (
      <View style={styles.FlatListParent}>
        <View style={styles.Header}>
          <View style={styles.IconArrowLeftHeaderParent}>
            <Icon
              name="arrow-left"
              size={30}
              color={Colors.BLACK}
              style={styles.IconArrowLeftHeader}
            />
          </View>
          <Image
            source={require('../assets/images/MyPhoto.png')}
            style={styles.Image}
          />
        </View>
        <View style={styles.FlatListNavigation}>
          <View style={{flexDirection: 'row', paddingLeft: 20}}>
            <Icon
              name="arrow-left"
              size={20}
              onPress={() => this.setState({CurrMonth: CurrMonth - 1})}
            />
            <Text style={{color: Colors.BLUE}}>
              {this.Month[PreviousMonth]}
            </Text>
          </View>
          <View>
            <Text
              style={{fontSize: 23, color: Colors.BLUE, fontWeight: 'bold'}}>
              {this.Month[CurrentMonth]}
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingRight: 20}}>
            <Text style={{color: Colors.BLUE}}>{this.Month[NextMonth]}</Text>
            <Icon
              name="arrow-right"
              size={20}
              onPress={() => {
                this.setState({CurrMonth: CurrMonth + 1});
                console.log(this.state);
              }}
            />
          </View>
        </View>
        <View style={styles.FlatList}>
          <CreateFlatList />
        </View>
        <View style={styles.MiddlePart}>
          <Text style={styles.TextOngoing}>Ongoing</Text>
        </View>

        <ScrollView style={styles.TaskParent}>
          <TaskBox
            TimeStart="9 AM"
            TimeEnd="10 AM"
            Domain="Mobile App Design"
            Names="Mike and Anita"
            Photo={require('../assets/images/MyPhoto.png')}
            TimeLine="9.00 AM-10.00 AM"
          />
          <View style={{flexDirection: 'row', height: responsiveHeight(5)}}>
            <Text style={{marginLeft: 13, marginTop: 6}}>10 AM</Text>
            <View
              style={{
                marginTop: 11,
                marginLeft: 30,
                borderRadius: 10,
                color: 'red',
                borderWidth: 1,
                height: 10,
                width: 10,
                backgroundColor: 'red',
              }}></View>
            <View
              style={{
                borderWidth: 1,
                width: 295,
                height: 0,
                marginTop: 15,
                left: 6,
                borderColor: 'red',
              }}></View>
          </View>
          <TaskBox
            TimeStart="11 AM"
            TimeEnd="12 AM"
            Domain="Mobile App Design"
            Names="Anita and David"
            Photo={require('../assets/images/MyPhoto.png')}
            TimeLine="10.00 AM-11.20 AM"
          />
          <TaskBox
            TimeStart="1 PM"
            TimeEnd="12 AM"
            Domain="Web Development"
            Names="Mike and Anita"
            Photo={require('../assets/images/MyPhoto.png')}
            TimeLine="1.00 PM-2.00 PM"
          />
          <TaskBox
            TimeStart="1 PM"
            TimeEnd="12 AM"
            Domain="Web Development"
            Names="Mike and Anita"
            Photo={require('../assets/images/MyPhoto.png')}
            TimeLine="1.00 PM-2.00 PM"
          />
        </ScrollView>
      </View>
    );
  }
}

export default FlatListIntegrated;
