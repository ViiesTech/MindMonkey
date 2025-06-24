/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import LineBreak from '../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppTextInput from '../../components/AppTextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppButton from '../../components/AppButton';
import {useCustomNavigation} from '../../utils/Hooks';

const SecureYourAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress />
      <LineBreak space={4} />
      <View style={{marginHorizontal: responsiveWidth(5)}}>
        <View>
          <AppText
            title={'secure your account'}
            textColor={AppColors.BLACK}
            textFontWeight
            textwidth={100}
            textSize={2.5}
            textTransform={'uppercase'}
          />
          <LineBreak space={1} />
          <AppText
            title={
              'Check your email inbox for a message from Mind Monkey. Enter the one-time verification code below to proceed with resetting your password. '
            }
            textColor={AppColors.GRAY}
            textwidth={80}
            lineHeight={3}
            textSize={1.8}
          />

          <LineBreak space={5} />

          <View>
            <AppText
              title={'New Password'}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textFontWeight
            />
            <LineBreak space={0.5} />
            <AppTextInput
              inputPlaceHolder={'Password'}
              logo={
                <MaterialIcons
                  name={'lock'}
                  size={responsiveFontSize(2)}
                  color={AppColors.GRAY}
                />
              }
              rightIcon={
                <TouchableOpacity
                  onPress={() => setShowPassword(prevState => !prevState)}>
                  <FontAwesome
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={responsiveFontSize(2)}
                    color={AppColors.GRAY}
                  />
                </TouchableOpacity>
              }
              secureTextEntry={!showPassword}
            />
          </View>

          <LineBreak space={2} />

          <View>
            <AppText
              title={'Confirm New Password'}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textFontWeight
            />
            <LineBreak space={0.5} />
            <AppTextInput
              inputPlaceHolder={'Password'}
              logo={
                <MaterialIcons
                  name={'lock'}
                  size={responsiveFontSize(2)}
                  color={AppColors.GRAY}
                />
              }
              rightIcon={
                <TouchableOpacity
                  onPress={() =>
                    setShowConfirmPassword(prevState => !prevState)
                  }>
                  <FontAwesome
                    name={showConfirmPassword ? 'eye' : 'eye-slash'}
                    size={responsiveFontSize(2)}
                    color={AppColors.GRAY}
                  />
                </TouchableOpacity>
              }
              secureTextEntry={!showConfirmPassword}
            />
          </View>

          <LineBreak space={5} />

          <View>
            <AppButton
              title={'Save New Password'}
              handlePress={() => navigateToRoute('AllSet')}
              textSize={1.8}
              btnBackgroundColor={AppColors.PRIMARY}
              btnPadding={18}
              btnWidth={90}
            />
          </View>

          <LineBreak space={2} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SecureYourAccount;
