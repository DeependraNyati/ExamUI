import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabView} from 'react-native-tab-view';
import PatientHome from '../screens/Patient/PatientHome';
import SpecialistListing from '../screens/Patient/SpecialistListing';
import AppointmentBooking from '../screens/Patient/AppointmentBooking';
import DocumentUpload from '../screens/Patient/DocumentUpload';
const Tab = createBottomTabNavigator();

const ForBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PatientHome" component={PatientHome} />
      <Tab.Screen name="SpecialistListing" component={SpecialistListing} />
      <Tab.Screen name="AppointmentBooking" component={AppointmentBooking} />
      <Tab.Screen name="DocumentUpload" component={DocumentUpload} />
    </Tab.Navigator>
  );
};

export default ForBottomTab;
