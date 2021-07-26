import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Colors from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomTabNavigator from '../navigations/BottomTabNavigator';
import styles from '../styles/TaskReviewScreenStyle';
import {NavigationContainer} from '@react-navigation/native';
const Icon = MaterialCommunityIcons;

const TaskReviewScreen = () => {
  return (
    <View style={styles.Parent}>
      <View style={styles.Header}>
        <Icon name="menu" size={20} color="white" style={{marginLeft: 10}} />
        <Image
          source={require('../assets/images/MyPhoto.png')}
          style={styles.Image}
        />
      </View>
      <View style={styles.Salutation}>
        <Text style={styles.Name}>Hi Ghulam</Text>
        <Text style={styles.TextNoOfTasksPending}>6 Tasks are pending</Text>
      </View>
      <View style={styles.MobileAppDesign}>
        <Text style={styles.TextMobileAppDesign}>Mobile App Design</Text>
        <Text style={styles.TextTwoNames}>Mike and Anita</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', marginLeft: 15}}>
            <Image
              source={require('../assets/images/MyPhoto.png')}
              style={styles.ImageBetween1}
            />
            <Image
              source={require('../assets/images/MyPhoto.png')}
              style={styles.ImageBetween2}
            />
          </View>
          <Text style={styles.TextNow}>Now</Text>
        </View>
        <View style={styles.MiddlePart}>
          <Text style={styles.TextMonthlyReview}>Monthly Review</Text>
          <View style={styles.IconParent}>
            <Icon
              name="home-outline"
              size={30}
              color="white"
              style={styles.Icon}
            />
          </View>
        </View>
        {/* End part starts */}
        <View style={styles.EndPart}>
          <View style={styles.EndPartColumnChild1}>
            <View style={styles.TaskDoneParent}>
              <View>
                <Text style={styles.TextNoOfTasksDone}>22</Text>
              </View>
              <View>
                <Text style={styles.TextDone}>Done</Text>
              </View>
            </View>

            <View style={styles.TaskOngoingParent}>
              <View>
                <Text style={styles.TextNoOfTasksOngoing}>10</Text>
              </View>
              <View>
                <Text style={styles.TextOngoing}>Ongoing</Text>
              </View>
            </View>
          </View>
          <View style={styles.EndPartColumnChild2}>
            <View style={styles.TaskInProgressParent}>
              <View>
                <Text style={styles.TextNoOfTasksInProgress}>7</Text>
              </View>
              <View>
                <Text style={styles.TextInProgress}>In progress</Text>
              </View>
            </View>

            <View style={styles.TaskWaitingForReviewParent}>
              <View>
                <Text style={styles.TextNoOfTasksWaitingForReview}>12</Text>
              </View>
              <View>
                <Text style={styles.TextWaitingForReview}>
                  Waiting for Review
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskReviewScreen;
