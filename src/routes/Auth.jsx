import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screens/auth/OnBoarding';
import GetStarted from '../screens/auth/GetStarted';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import ForgotPassword from '../screens/auth/ForgotPassword';
import OtpVerification from '../screens/auth/OtpVerification';
import SecureYourAccount from '../screens/auth/SecureYourAccount';
import AllSet from '../screens/auth/AllSet';
import YourName from '../screens/auth/ProfileSetup/YourName';
import YourGender from '../screens/auth/ProfileSetup/YourGender';
import YourAge from '../screens/auth/ProfileSetup/YourAge';
import SetEmojiTheme from '../screens/auth/ProfileSetup/SetEmojiTheme';
import ChooseColorTheme from '../screens/auth/ProfileSetup/ChooseColorTheme';
import YourRecord from '../screens/auth/ProfileSetup/YourRecord';
import DailyReminder from '../screens/auth/ProfileSetup/DailyReminder';
import YourSocialRecord from '../screens/auth/ProfileSetup/YourSocialRecord';
import ProfileFinalization from '../screens/auth/ProfileSetup/ProfileFinalization';
import Feel from '../screens/auth/FeelFlow/Feel';
import MoreDetails from '../screens/auth/FeelFlow/MoreDetails';
import ShareMood from '../screens/auth/FeelFlow/ShareMood';
import AboutYourDay from '../screens/auth/FeelFlow/AboutYourDay';
import Splash from '../screens/auth/Splash';

const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="SecureYourAccount" component={SecureYourAccount} />
      <Stack.Screen name="AllSet" component={AllSet} />
      <Stack.Screen name="YourName" component={YourName} />
      <Stack.Screen name="YourGender" component={YourGender} />
      <Stack.Screen name="YourAge" component={YourAge} />
      <Stack.Screen name="SetEmojiTheme" component={SetEmojiTheme} />
      <Stack.Screen name="ChooseColorTheme" component={ChooseColorTheme} />
      <Stack.Screen name="YourRecord" component={YourRecord} />
      <Stack.Screen name="DailyReminder" component={DailyReminder} />
      <Stack.Screen name="YourSocialRecord" component={YourSocialRecord} />
      <Stack.Screen
        name="ProfileFinalization"
        component={ProfileFinalization}
      />
      <Stack.Screen name="Feel" component={Feel} />
      <Stack.Screen name="MoreDetails" component={MoreDetails} />
      <Stack.Screen name="ShareMood" component={ShareMood} />
      <Stack.Screen name="AboutYourDay" component={AboutYourDay} />
    </Stack.Navigator>
  );
};

export default Auth;
