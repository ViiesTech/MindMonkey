/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
import AppColors from '../../utils/AppColors';
import LineBreak from '../../components/LineBreak';
import AppHeader from '../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppTextInput from '../../components/AppTextInput';
import {useCustomNavigation} from '../../utils/Hooks';
import AppButton from '../../components/AppButton';

const ForgotPassword = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress />
      <LineBreak space={4} />
      <View style={{marginHorizontal: responsiveWidth(5)}}>
        <View>
          <AppText
            title={'forgot your password'}
            textColor={AppColors.BLACK}
            textFontWeight
            textwidth={100}
            textSize={2.5}
            textTransform={'uppercase'}
          />
          <LineBreak space={1} />
          <AppText
            title={
              'Enter the email associated with your Mind Monkey account below. We’ll send you an OTP code to reset your password.'
            }
            textColor={AppColors.GRAY}
            textwidth={80}
            lineHeight={3}
            textSize={1.8}
          />

          <LineBreak space={5} />

          <View style={{flex: 1}}>
            <View>
              <AppText
                title={'your registered Email'}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textFontWeight
                textTransform={'uppercase'}
              />
              <LineBreak space={0.5} />
              <AppTextInput
                inputPlaceHolder={'andrew.ainsley@yourdomain.com'}
                logo={
                  <MaterialIcons
                    name={'email'}
                    size={responsiveFontSize(2)}
                    color={AppColors.GRAY}
                  />
                }
              />
            </View>
            <LineBreak space={5} />

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <AppButton
                title={'Send Otp Code'}
                handlePress={() => navigateToRoute('OtpVerification')}
                textSize={1.8}
                btnBackgroundColor={AppColors.PRIMARY}
                btnPadding={18}
                btnWidth={90}
              />
            </View>
            <LineBreak space={2} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
