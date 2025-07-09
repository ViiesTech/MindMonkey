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
import ShiningStar from '../screens/main/Home/ShiningStar';
import ShareAchievement from '../screens/main/Home/ShareAchievement';
import Details from '../screens/main/CalendarSN/Details';
import UpgradePlan from '../screens/main/Account/UpgradePlan';
import ChoosePaymentMethod from '../screens/main/Account/ChoosePaymentMethod';
import BenefitsUnlocked from '../screens/main/Account/BenefitsUnlocked';
import Achievements from '../screens/main/Account/Achievements';
import Favorites from '../screens/main/Account/Favorites';
import PhotoGallery from '../screens/main/Account/PhotoGallery';
import DailyReminders from '../screens/main/Account/DailyReminders';
import ExportData from '../screens/main/Account/ExportData';
import Preferences from '../screens/main/Account/Preferences';
import EditMoodsColors from '../screens/main/Account/EditMoodsColors';
import SetEmojiTheme from '../screens/auth/ProfileSetup/SetEmojiTheme';
import ManageActivities from '../screens/main/Account/ManageActivities';
import ManageActivitiesDetails from '../screens/main/Account/ManageActivitiesDetails';
import SelectActivityEmoji from '../screens/main/Account/SelectActivityEmoji';
import PersonalInfo from '../screens/main/Account/PersonalInfo';
import LinkedAccount from '../screens/main/Account/LinkedAccount';
import BillingAndSubscription from '../screens/main/Account/BillingAndSubscription';
import AddNewPayment from '../screens/main/Account/AddNewPayment';
import AppAppearance from '../screens/main/Account/AppAppearance';
import AppLanguage from '../screens/main/Account/AppLanguage';
import HelpAndSupport from '../screens/main/Account/HelpAndSupport';
import Faq from '../screens/main/Account/Faq';
import ContactSupport from '../screens/main/Account/ContactSupport';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen name="ShiningStar" component={ShiningStar} />
      <Stack.Screen name="ShareAchievement" component={ShareAchievement} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="UpgradePlan" component={UpgradePlan} />
      <Stack.Screen
        name="ChoosePaymentMethod"
        component={ChoosePaymentMethod}
      />
      <Stack.Screen name="BenefitsUnlocked" component={BenefitsUnlocked} />
      <Stack.Screen name="Achievements" component={Achievements} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="PhotoGallery" component={PhotoGallery} />
      <Stack.Screen name="DailyReminders" component={DailyReminders} />
      <Stack.Screen name="ExportData" component={ExportData} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="EditMoodsColors" component={EditMoodsColors} />
      <Stack.Screen name="SetEmojiTheme" component={SetEmojiTheme} />
      <Stack.Screen name="ManageActivities" component={ManageActivities} />
      <Stack.Screen
        name="ManageActivitiesDetails"
        component={ManageActivitiesDetails}
      />
      <Stack.Screen name="SelectActivityEmoji" component={SelectActivityEmoji} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="LinkedAccount" component={LinkedAccount} />
      <Stack.Screen name="BillingAndSubscription" component={BillingAndSubscription} />
      <Stack.Screen name="AddNewPayment" component={AddNewPayment} />
      <Stack.Screen name="AppAppearance" component={AppAppearance} />
      <Stack.Screen name="AppLanguage" component={AppLanguage} />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="ContactSupport" component={ContactSupport} />
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
