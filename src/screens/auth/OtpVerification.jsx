import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import LineBreak from '../../components/LineBreak';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import {OtpInput} from 'react-native-otp-entry';
import AppButton from '../../components/AppButton';
import {ShowToast, useCustomNavigation} from '../../utils/Hooks';
import {useVerifyOTPMutation} from '../../redux/service';

const OtpVerification = ({route}) => {
  const {navigateToRoute} = useCustomNavigation();
  const [OTPCode, setOTPCode] = useState('');
  const [verifyOTP, {isLoading}] = useVerifyOTPMutation();

  const {type, info} = route?.params;
  // console.log(OTPCode);

  const startTimer = () => {};

  const onResendCode = () => {};

  const onOTPVerify = async () => {
    if (!OTPCode) {
      ShowToast('Please enter your verification code');
      return;
    }
    let data = {
      Otp: OTPCode,
      ...(type === 'Forget'
        ? {email: info?.email}
        : {addSignUpToken: info?.addSignUpToken}),
    };
    await verifyOTP(data)
      .unwrap()
      .then(res => {
        console.log('response of otp verification ===>',res)
        ShowToast(res.message)
        if (res.success) {
          if (type === 'Forget') {
            navigateToRoute('SecureYourAccount', {type, email: info?.email});
          } else {
            navigateToRoute('YourName');
          }
        }
      })
      .catch(error => {
        console.log('error verifying the otp ===>', error);
        ShowToast('Some problem occured');
      });
  };

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
                onFilled={text => setOTPCode(text)}
                onTextChange={text => console.log(text)}
                theme={{
                  pinCodeContainerStyle: {
                    backgroundColor: AppColors.WHITE,
                    borderRadius: 15,
                    width: responsiveWidth(19.5),
                  },
                  filledPinCodeContainerStyle: {
                    backgroundColor: AppColors.LIGHTGRAY,
                  },
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
              handlePress={() => onOTPVerify()}
              textSize={1.8}
              indicator={isLoading}
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
