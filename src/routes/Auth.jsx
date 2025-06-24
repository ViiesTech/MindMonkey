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

const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{headerShown: false}}>
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
    </Stack.Navigator>
  );
};

export default Auth;
