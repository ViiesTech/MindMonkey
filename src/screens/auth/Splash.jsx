/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useCustomNavigation} from '../../utils/Hooks';
import AppColors from '../../utils/AppColors';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';

const Splash = () => {
  const {navigateToRoute} = useCustomNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigateToRoute('OnBoarding');
    }, 2000);
  }, [navigateToRoute]);

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: AppColors.PRIMARY,
      }}>
      <Image
        source={AppImages.cloud_one}
        style={{
          width: responsiveWidth(58),
          height: responsiveHeight(30),
          alignSelf: 'flex-end',
        }}
        resizeMode="contain"
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={AppImages.app_logo}
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(30),
          }}
          resizeMode="contain"
        />
      </View>
      <Image
        source={AppImages.cloud_two}
        style={{
          width: responsiveWidth(59),
          height: responsiveHeight(30),
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
