import React, {useState} from 'react';
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
import {ShowToast, useCustomNavigation} from '../../utils/Hooks';
import AppButton from '../../components/AppButton';
import {useForgetPasswordMutation} from '../../redux/service';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const {navigateToRoute} = useCustomNavigation();
  const [forgetPassword, {isLoading}] = useForgetPasswordMutation();

  const onForgetEmail = async () => {
    if (!email) {
      ShowToast('Please enter your email');
      return;
    }
    let data = {
      email,
    };
    await forgetPassword(data)
      .unwrap()
      .then(res => {
        console.log('success on the verification of email ===>', res);
        ShowToast(res.message);
        if (res.success) {
          navigateToRoute('OtpVerification', {type: 'Forget', info: res.data});
        }
      })
      .catch(error => {
        console.log('error while verifying the email ===>', error);
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
                value={email}
                onChangeText={(text) => setEmail(text)}
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
                handlePress={() => onForgetEmail()}
                textSize={1.8}
                indicator={isLoading}
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
