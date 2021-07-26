import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Header from './src/components/molecules/Header';
import MapLocation from './src/screens/MapLocation';
import Login from './src/screens/Login';
import TaskScreen from './src/screens/TaskScreen';
import TaskReviewScreen from './src/screens/TaskReviewScreen';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import FlatListIntegrated from './src/screens/FlatListIntegrated';
import TaskBox from './src/components/organisms/TaskBox';
import LoginForNavigation from './src/screens/LoginForNavigation';
import Auth from './src/navigations/Auth';
const App = () => {
  return (
    // <MapLocation />
    // <Login />
    // <LoginForNavigation />
    <Auth />
    // <TaskScreen />
    // <BottomTabNavigator />
    // <FlatListIntegrated />
    // <TaskBox />
  );
};

export default App;
