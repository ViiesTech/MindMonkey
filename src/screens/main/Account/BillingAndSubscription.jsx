/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import AppMainHeader from '../../../components/AppMainHeader';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AppColors from '../../../utils/AppColors';
import UpgradePlanCard from '../../../components/UpgradePlan';
import AppText from '../../../components/AppTextComps/AppText';

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

const BillingAndSubscription = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Billing & Subscription" />
      <LineBreak space={3} />
      <UpgradePlanCard
        data={data}
        title="Mind Monkey Premium"
        priceTag="$49.99"
        text="/ Yearly"
        selectedTab={true}
      />
      <LineBreak space={8} />

      <View style={{alignItems: 'center'}}>
        <AppText
          title={'Your Current plan'}
          textColor={AppColors.GRAY}
          textSize={1.8}
        />
        <LineBreak space={2} />
        <AppText
          title={'Your subscription will expire on 22 DEC, 2025'}
          textColor={AppColors.GRAY}
          textSize={1.6}
        />
      </View>
    </View>
  );
};

export default BillingAndSubscription;
