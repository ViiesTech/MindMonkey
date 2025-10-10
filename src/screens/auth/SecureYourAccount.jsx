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
import {ShowToast, useCustomNavigation} from '../../utils/Hooks';
import { usePasswordUpdateMutation } from '../../redux/service';

const SecureYourAccount = ({route}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const {navigateToRoute} = useCustomNavigation();
  const [passwordUpdate,{isLoading}] = usePasswordUpdateMutation()

  const {type, email} = route?.params;

  // console.log('type,email',type,email)

  const onSaveNewPassword = async () => {
    if(!newPassword) {
      ShowToast('Please enter your new password')
      return
    }

    if(newPassword.length < 8) {
      ShowToast('Password is too short')
      return
    } 

    if(!cPassword) {
      ShowToast('Please re-type your password to confirm')
      return
    }
    
    if(cPassword !== newPassword) {
      ShowToast(`Password doesn't match`)
      return
    }

    let data = {
      email,
      newPassword,
      type,
    }

    await passwordUpdate(data).unwrap().then((res) => {
      console.log('response of password update ===>',res)
      ShowToast(res.message)
      if(res.success) {
        navigateToRoute('AllSet',{type});
      }
    }).catch((error) => {
      console.log('error of password modification ===>',error)
      ShowToast('Some problem occured')
    })
  };

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
              value={newPassword}
              onChangeText={text => setNewPassword(text)}
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
              value={cPassword}
              onChangeText={text => setCPassword(text)}
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
              handlePress={() => onSaveNewPassword()}
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
    </ScrollView>
  );
};

export default SecureYourAccount;
