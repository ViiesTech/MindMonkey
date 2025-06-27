/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import Home from '../screens/main/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Insights from '../screens/main/Insights/Insights';
import CalendarSN from '../screens/main/CalendarSN/CalendarSN';
import Account from '../screens/main/Account/Account';

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
        tabBarActiveTintColor: AppColors.BTNCOLOURS,
        tabBarStyle: {
          height: responsiveHeight(10),
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: responsiveHeight(1.5),
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          backgroundColor: AppColors.WHITE,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Insights') {
            iconName = focused ? 'bar-chart-sharp' : 'bar-chart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Calendar" component={CalendarSN} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default Main;
