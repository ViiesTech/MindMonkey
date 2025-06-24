/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import LineBreak from '../../components/LineBreak';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import {OtpInput} from 'react-native-otp-entry';
import AppButton from '../../components/AppButton';
import { useCustomNavigation } from '../../utils/Hooks';

const OtpVerification = () => {
    const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress />
      <LineBreak space={4} />
      <View style={{marginHorizontal: responsiveWidth(5)}}>
        <View>
          <AppText
            title={'enter otp code'}
            textColor={AppColors.BLACK}
            textFontWeight
            textwidth={100}
            textSize={2.5}
            textTransform={'uppercase'}
          />
          <LineBreak space={1} />
          <AppText
            title={
              'Check your email inbox for a message from Mind Monkey. Enter the one-time verification code below to proceed with resetting your password.'
            }
            textColor={AppColors.GRAY}
            textwidth={80}
            lineHeight={3}
            textSize={1.8}
          />

          <LineBreak space={5} />

          <View>
            <View>
              <OtpInput
                numberOfDigits={4}
                type="numeric"
                focusColor={AppColors.PRIMARY}
                onFilled={text => console.log(`OTP is ${text}`)}
                onTextChange={text => console.log(text)}
                theme={{
                  pinCodeContainerStyle: {
                    backgroundColor: AppColors.WHITE,
                    borderRadius: 15,
                    width: responsiveWidth(19.5),
                  },
                  filledPinCodeContainerStyle: {backgroundColor: AppColors.LIGHTGRAY},
                  pinCodeTextStyle: {color: AppColors.BLACK},
                }}
              />
            </View>
            <LineBreak space={5} />
            <AppText
              title={'Resend code in 53 seconds'}
              textColor={AppColors.BLACK}
              textSize={2.1}
              textAlignment={'center'}
            />
            <LineBreak space={3} />
            <TouchableOpacity>
              <AppText
                title={'RESEND CODE'}
                textColor={AppColors.PRIMARY}
                textSize={2.1}
                textAlignment={'center'}
              />
            </TouchableOpacity>
            <LineBreak space={5} />

            <AppButton
                title={'Verify OTP'}
                handlePress={() => navigateToRoute('SecureYourAccount')}
                textSize={1.8}
                btnBackgroundColor={AppColors.PRIMARY}
                btnPadding={18}
                btnWidth={90}
              />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpVerification;
