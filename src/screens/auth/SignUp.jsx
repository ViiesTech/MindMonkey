/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import LineBreak from '../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import AppTextInput from '../../components/AppTextInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppIcons from '../../assets/icons/AppIcons';
import SVGXml from '../../components/SVGXML';
import AppButton from '../../components/AppButton';
import {ShowToast, useCustomNavigation} from '../../utils/Hooks';
import {useRegisterMutation} from '../../redux/service';

const socialIcons = [
  {
    id: 1,
    icon: <SVGXml icon={AppIcons.facebook_rounded} width={25} height={25} />,
  },
  {
    id: 2,
    icon: <SVGXml icon={AppIcons.google_pay} width={25} height={25} />,
  },
  {
    id: 3,
    icon: <SVGXml icon={AppIcons.black_apple} width={25} height={25} />,
  },
  {
    id: 4,
    icon: <SVGXml icon={AppIcons.twitter} width={25} height={25} />,
  },
];

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const {navigateToRoute} = useCustomNavigation();
  const [register, {isLoading}] = useRegisterMutation();

  const onSignupPress = async () => {
    if (!email) {
      ShowToast('Please enter your email');
      return;
    }
    if (!password) {
      ShowToast('Please enter your password');
      return;
    }
    if (password.length < 8) {
      ShowToast('Password is too short');
      return;
    }
    if (!cPassword) {
      ShowToast('Please re-type your password');
      return;
    }
    if (cPassword !== password) {
      ShowToast(`Password doesn't match`);
      return;
    }
    if (!rememberMe) {
      ShowToast('Please agree to our terms and conditions');
      return;
    }
    let data = {
      email,
      password,
    };

    await register(data)
      .unwrap()
      .then(res => {
        console.log('success while registering the account ===>', res);
        ShowToast(res.message);
        if (res.success) {
          navigateToRoute('OtpVerification', {
            signupData: {type: 'create', info: res.data},
          });
        }
      })
      .catch(error => {
        console.log('error while registering the account ===>', error);
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
            title={'JOIN MIND MONKEY TODAY'}
            textColor={AppColors.BLACK}
            textFontWeight
            textwidth={100}
            textSize={2.5}
            textTransform={'uppercase'}
          />
          <LineBreak space={1} />
          <AppText
            title={'Start tracking your moods and earn achievement badges.'}
            textColor={AppColors.GRAY}
            textwidth={80}
            lineHeight={3}
            textSize={1.8}
          />

          <LineBreak space={5} />

          <View>
            <View>
              <AppText
                title={'Email'}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textFontWeight
              />
              <LineBreak space={0.5} />
              <AppTextInput
                value={email}
                onChangeText={text => setEmail(text)}
                inputPlaceHolder={'Email'}
                logo={
                  <MaterialIcons
                    name={'email'}
                    size={responsiveFontSize(2)}
                    color={AppColors.GRAY}
                  />
                }
              />
            </View>
            <LineBreak space={2} />

            <View>
              <AppText
                title={'Password'}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textFontWeight
              />
              <LineBreak space={0.5} />
              <AppTextInput
                inputPlaceHolder={'Password'}
                value={password}
                onChangeText={text => setPassword(text)}
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
                title={'Confirm Password'}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textFontWeight
              />
              <LineBreak space={0.5} />
              <AppTextInput
                inputPlaceHolder={'Confirm Password'}
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
                    onPress={() => setShowcPassword(prevState => !prevState)}>
                    <FontAwesome
                      name={showcPassword ? 'eye' : 'eye-slash'}
                      size={responsiveFontSize(2)}
                      color={AppColors.GRAY}
                    />
                  </TouchableOpacity>
                }
                secureTextEntry={!showcPassword}
              />
            </View>
            <LineBreak space={2} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: responsiveHeight(3),
                  width: responsiveHeight(3),
                  borderWidth: rememberMe ? 0 : 3,
                  borderRadius: 7,
                  borderColor: AppColors.PRIMARY,
                  backgroundColor: rememberMe
                    ? AppColors.PRIMARY
                    : 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setRememberMe(prevState => !prevState)}>
                {rememberMe ? (
                  <FontAwesome
                    name={'check'}
                    size={responsiveFontSize(1.7)}
                    color={AppColors.WHITE}
                  />
                ) : (
                  <View />
                )}
              </TouchableOpacity>
              <AppText
                title={'I agree to Mind Monkey Terms & Conditions'}
                textColor={AppColors.BLACK}
                textSize={1.8}
              />
            </View>
            <LineBreak space={2} />

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                gap: 10,
                alignItems: 'center',
              }}>
              <AppText
                title={'Already have an account?'}
                textAlignment={'center'}
                textColor={AppColors.GRAY}
                textSize={2}
              />
              <TouchableOpacity onPress={() => navigateToRoute('Login')}>
                <AppText
                  title={'Sign in'}
                  textAlignment={'center'}
                  textColor={AppColors.PRIMARY}
                  textSize={2}
                />
              </TouchableOpacity>
            </View>

            <LineBreak space={5} />

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                gap: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: AppColors.GRAY,
                  width: responsiveWidth(23),
                  height: responsiveHeight(0.1),
                }}
              />
              <AppText
                title={'or continue with'}
                textAlignment={'center'}
                textColor={AppColors.GRAY}
                textSize={2}
              />
              <View
                style={{
                  backgroundColor: AppColors.GRAY,
                  width: responsiveWidth(23),
                  height: responsiveHeight(0.1),
                }}
              />
            </View>
            <LineBreak space={5} />
            <FlatList
              data={socialIcons}
              horizontal
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                gap: 10,
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: AppColors.appBgColor,
                      width: responsiveWidth(18),
                      height: responsiveHeight(6),
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {item.icon}
                  </TouchableOpacity>
                );
              }}
            />

            <LineBreak space={5} />

            <AppButton
              title={'Sign Up'}
              handlePress={() => onSignupPress()}
              textSize={1.8}
              btnBackgroundColor={AppColors.PRIMARY}
              btnPadding={18}
              indicator={isLoading}
              btnWidth={90}
            />
            <LineBreak space={2} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
