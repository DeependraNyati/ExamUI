import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TaskReviewScreen from '../screens/TaskReviewScreen';
import React from 'react';
import Chat from '../screens/Chat';
import People from '../screens/People';
import Notifications from '../screens/Notifications';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TaskReviewScreen"
        tabBarOptions={{
          //   activeTintColor: 'blue',
          style: {
            backgroundColor: '#1916A5',
          },
        }}>
        <Tab.Screen
          name="TaskReviewScreen"
          component={TaskReviewScreen}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="home-outline"
                color="white"
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <MaterialCommunityIcons name="chat" color="white" size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="People"
          component={People}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" color="white" size={35} />
            ),
            // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="bell-outline"
                color="white"
                size={35}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
