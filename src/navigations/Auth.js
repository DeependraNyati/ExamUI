import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForBottomTab from './ForBottomTab';
import AboutPatient from '../screens/Patient/AboutPatient';
import HelpPatient from '../screens/Patient/HelpPatient';
import SpecialistListing from '../screens/Patient/SpecialistListing';
import SpecialistDetail from '../screens/Patient/SpecialistDetail';
import SpecialistDetail1 from '../screens/Patient/SpecialistDetail1';
import LoginForNavigation from '../screens/LoginForNavigation';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

class Auth extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginForNavigation"
            component={LoginForNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerPatient"
            component={DrawerPatient}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AboutPatient"
            component={AboutPatient}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="HelpPatient"
            component={HelpPatient}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="SpecialistDetail"
            component={SpecialistDetail}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="SpecialistDetail1"
            component={SpecialistDetail1}
            // options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function DrawerPatient({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ForBottomTab} />
      <Drawer.Screen name="PatientAbout" component={PatientAbout} />
      <Drawer.Screen name="PatientHelp" component={PatientHelp} />
    </Drawer.Navigator>
  );
}

function PatientAbout({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Patient About"
        onPress={() => navigation.navigate('AboutPatient')}
      />
    </View>
  );
}
function PatientHelp({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Button
        title="HelpPatient"
        onPress={() => navigation.navigate('HelpPatient')}
      />
      <Button
        title="Simon Go Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Auth;
