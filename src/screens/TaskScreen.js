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
import styles from '../styles/TaskScreenStyle';

const TaskScreen = () => {
  return (
    <View style={styles.Parent}>
      <View style={styles.ImageParent}>
        <Image
          source={require('../assets/images/Random_Image.jpg')}
          style={styles.Image}
        />
      </View>
      <View style={styles.MiddlePart}>
        <Text style={styles.TextManageYour}>Manage your</Text>
        <Text style={styles.TextDailyTasks}>daily tasks</Text>
        <Text style={styles.Sentence}>Teams and Project management with </Text>
        <Text style={styles.Sentence1}>solution providing App</Text>
      </View>

      <View style={styles.EndPart}>
        <View style={styles.Get}>
          <Text style={styles.TextGet}>Get</Text>
        </View>
        <View style={styles.Started}>
          <Text style={styles.TextStarted}>Started</Text>
        </View>
      </View>
    </View>
  );
};

export default TaskScreen;
