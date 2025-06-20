/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import Home from '../screens/main/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MyTabs} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontSize: responsiveFontSize(1.4)},
        tabBarActiveTintColor: AppColors.WHITE,
        tabBarStyle: {
          height: responsiveHeight(10),
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          paddingTop: responsiveHeight(1.5),
          backgroundColor: AppColors.BTNCOLOURS,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Help Me') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Lists') {
            iconName = focused ? 'clipboard-list' : 'clipboard-list';
          } else if (route.name === 'My Journal') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Discover') {
            iconName = focused ? 'explore' : 'explore';
          }

          if (route.name === 'Discover') {
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Lists') {
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Discover" component={Explore} />
      <Tab.Screen name="My Journal" component={Favorites} />
      <Tab.Screen name="Lists" component={Lists} />
      <Tab.Screen name="Help Me" component={Profile} /> */}
    </Tab.Navigator>
  );
}

export default Main;
