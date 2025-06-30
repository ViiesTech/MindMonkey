/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LineBreak from '../../../components/LineBreak';
import AppImages from '../../../assets/images/AppImages';
import AppText from '../../../components/AppTextComps/AppText';
import AppButton from '../../../components/AppButton';

const ShiningStar = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <LineBreak space={2} />

      <View style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons
            name={'close-outline'}
            size={responsiveFontSize(3)}
            color={AppColors.BLACK}
          />
        </TouchableOpacity>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={AppImages.star}
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(25),
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
          <LineBreak space={4} />
          <AppText
            title={'shining star'}
            textColor={AppColors.BLACK}
            textSize={3}
            textTransform={'uppercase'}
            textFontWeight
            textAlignment={'center'}
          />
          <LineBreak space={1} />
          <AppText
            title={
              'Fantastic, Andrew! You earned the shinning star badge. Your dedication is rock'
            }
            textColor={AppColors.GRAY}
            textSize={2}
            textAlignment={'center'}
          />
        </View>

        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              gap: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AppButton
              title={'Back to home'}
              handlePress={() => goBack()}
              textSize={1.8}
              textColor={AppColors.GRAY}
              textFontWeight={false}
              btnBackgroundColor={AppColors.LIGHTGRAY}
              btnPadding={18}
              borderRadius={20}
              btnWidth={42}
            />
            <AppButton
              title={'Share achievement'}
              handlePress={() => navigateToRoute('ShareAchievement')}
              textSize={1.8}
              textFontWeight={false}
              btnBackgroundColor={AppColors.PRIMARY}
              btnPadding={18}
              borderRadius={20}
              btnWidth={42}
            />
          </View>
          <LineBreak space={2} />
        </View>
      </View>
    </View>
  );
};

export default ShiningStar;
