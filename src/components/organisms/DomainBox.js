import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import styles from '../../styles/FlatListIntegratedStyle';

const DomainBox = props => {
  return (
    <View style={styles.DomainBox}>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
          marginTop: -10,
          paddingLeft: 10,
          fontSize: 20,
        }}>
        {props.Domain}
      </Text>
      <Text style={{color: 'white', paddingLeft: 10, marginTop: 5}}>
        {props.Names}
      </Text>
      <Image source={props.Photo} style={styles.DomainBoxImage} />
      <View>
        <Image source={props.Photo} style={styles.DomainBoxImage2} />
      </View>
      <Text style={styles.TimeLine}>{props.TimeLine}</Text>
    </View>
  );
};

export default DomainBox;
