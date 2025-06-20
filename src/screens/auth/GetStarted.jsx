/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import AppColors from '../../utils/AppColors';
import LineBreak from '../../components/LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppImages from '../../assets/images/AppImages';
import AppText from '../../components/AppTextComps/AppText';
import AppButton from '../../components/AppButton';
import SVGXml from '../../components/SVGXML';
import AppIcons from '../../assets/icons/AppIcons';
import {useCustomNavigation} from '../../utils/Hooks';

const GetStarted = () => {
  const {navigateToRoute} = useCustomNavigation();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={AppImages.get_started}
          style={{width: responsiveWidth(100), height: responsiveHeight(23)}}
          resizeMode="contain"
        />

        <AppText
          title={'Let’s get started'}
          textAlignment={'center'}
          textColor={AppColors.BLACK}
          textFontWeight
          textwidth={100}
          textSize={3.5}
          textTransform={'uppercase'}
        />

        <AppText
          title={'Let’s dive into your account'}
          textAlignment={'center'}
          textColor={AppColors.GRAY}
          textwidth={100}
          textSize={2}
        />
        <LineBreak space={5} />

        <View>
          <AppButton
            title={'Continue with Facebook'}
            btnBackgroundColor={AppColors.WHITE}
            textColor={AppColors.BLACK}
            textSize={1.8}
            borderWidth={1}
            btnPadding={15}
            borderColor={AppColors.DARKGRAY}
            btnWidth={90}
            borderRadius={100}
            leftIcon={
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  paddingHorizontal: responsiveWidth(3),
                }}>
                <SVGXml
                  icon={AppIcons.facebook_rounded}
                  width={25}
                  height={25}
                />
              </View>
            }
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppButton
            title={'Continue with Google'}
            btnBackgroundColor={AppColors.WHITE}
            textColor={AppColors.BLACK}
            textSize={1.8}
            borderWidth={1}
            btnPadding={15}
            borderColor={AppColors.DARKGRAY}
            btnWidth={90}
            borderRadius={100}
            leftIcon={
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  paddingHorizontal: responsiveWidth(3),
                }}>
                <SVGXml icon={AppIcons.google_pay} width={25} height={25} />
              </View>
            }
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppButton
            title={'Continue with Apple'}
            btnBackgroundColor={AppColors.WHITE}
            textColor={AppColors.BLACK}
            textSize={1.8}
            borderWidth={1}
            btnPadding={15}
            borderColor={AppColors.DARKGRAY}
            btnWidth={90}
            borderRadius={100}
            leftIcon={
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  paddingHorizontal: responsiveWidth(3),
                }}>
                <SVGXml icon={AppIcons.black_apple} width={25} height={25} />
              </View>
            }
          />
        </View>

        <LineBreak space={2} />
        <View>
          <AppButton
            title={'Continue with X'}
            btnBackgroundColor={AppColors.WHITE}
            textColor={AppColors.BLACK}
            textSize={1.8}
            borderWidth={1}
            btnPadding={15}
            borderColor={AppColors.DARKGRAY}
            btnWidth={90}
            borderRadius={100}
            leftIcon={
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  paddingHorizontal: responsiveWidth(3),
                }}>
                <SVGXml icon={AppIcons.twitter} width={25} height={25} />
              </View>
            }
          />
        </View>

        <LineBreak space={6} />
        <AppButton
          title={'Sign up'}
          handlePress={() => navigateToRoute('SignUp')}
          textSize={2.2}
          btnPadding={15}
          btnWidth={90}
        />
        <LineBreak space={2} />
        <AppButton
          title={'Login'}
          handlePress={() => navigateToRoute('Login')}
          textSize={2.2}
          btnPadding={15}
          btnWidth={90}
          btnBackgroundColor={AppColors.PRIMARY}
        />
        <LineBreak space={5} />

        <AppText
          title={'Privacy Policy  |  Terms & Conditions'}
          textAlignment={'center'}
          textColor={AppColors.GRAY}
          textSize={1.8}
        />
      </View>
    </ScrollView>
  );
};

export default GetStarted;
