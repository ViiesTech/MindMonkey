/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import AppColors from '../../../utils/AppColors';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppImages from '../../../assets/images/AppImages';
import AppText from '../../../components/AppTextComps/AppText';
import UpgradePlanCard from '../../../components/UpgradePlan';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AppButton from '../../../components/AppButton';
import {useCustomNavigation} from '../../../utils/Hooks';

const data = [
  {
    id: 1,
    icon: (
      <FontAwesome6
        name={'check'}
        size={responsiveFontSize(3)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Add-free experience.',
  },
  {
    id: 2,
    icon: (
      <FontAwesome6
        name={'check'}
        size={responsiveFontSize(3)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Unlock and unlimited access to all premium contents.',
  },
  {
    id: 3,
    icon: (
      <FontAwesome6
        name={'check'}
        size={responsiveFontSize(3)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Advanced insights and mood chart',
  },
  {
    id: 4,
    icon: (
      <FontAwesome6
        name={'check'}
        size={responsiveFontSize(3)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Sync data across multiple devices.',
  },
  {
    id: 5,
    icon: (
      <FontAwesome6
        name={'check'}
        size={responsiveFontSize(3)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Early access to new features and beta tests.',
  },
  {
    id: 6,
    icon: (
      <FontAwesome6
        name={'check'}
        size={responsiveFontSize(3)}
        color={AppColors.GRAY}
      />
    ),
    title: 'Priority customer support.',
  },
];

const BenefitsUnlocked = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(6),
      }}>
      <LineBreak space={4} />
      <Image
        source={AppImages.king}
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(12),
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
      <LineBreak space={2} />
      <View style={{alignItems: 'center'}}>
        <AppText
          title={'Congratulations!'}
          textColor={AppColors.BLACK}
          textSize={3}
          textTransform={'uppercase'}
          textAlignment={'center'}
          textwidth={100}
          textFontWeight
        />
        <LineBreak space={1.5} />
        <AppText
          title={'You’re now a Mind Monkey Premium Member'}
          textColor={AppColors.DARKGRAY}
          textSize={1.6}
        />
      </View>
      <LineBreak space={5} />
      <AppText
        title={'Benefits Unlocked'}
        textColor={AppColors.BLACK}
        textSize={2}
        textAlignment={'center'}
        textwidth={100}
        textFontWeight
      />
      <LineBreak space={4} />
      <UpgradePlanCard data={data} />
      <LineBreak space={4} />
      <AppText
        title={
          'Your subscription will automatically renew annually unless canceled. Manage your subscription in your account settings.'
        }
        textAlignment={'center'}
        textColor={AppColors.GRAY}
        textwidth={80}
        lineHeight={2.8}
        textSize={2}
      />
      <LineBreak space={3} />
      <View>
        <AppButton
          title={'Start Exploring Premium Features'}
          handlePress={() => navigateToRoute('Main')}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </ScrollView>
  );
};

export default BenefitsUnlocked;
