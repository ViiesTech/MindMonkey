/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AppButton from '../../../components/AppButton';
import UpgradePlanCard from '../../../components/UpgradePlan';
import {useCustomNavigation} from '../../../utils/Hooks';
import PaymentCard from '../../../components/PaymentCard';
import AppIcons from '../../../assets/icons/AppIcons';

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

const UpgradePlan = () => {
  const [selectedTab, setSelectedTab] = useState('monthly');
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="upgrade plan" />
      <LineBreak space={3} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            backgroundColor:
              selectedTab === 'monthly' ? AppColors.PRIMARY : AppColors.WHITE,
            width: responsiveWidth(45),
            height: responsiveHeight(6),
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setSelectedTab('monthly')}>
          <AppText
            title={'Monthly'}
            textColor={
              selectedTab === 'monthly' ? AppColors.WHITE : AppColors.BLACK
            }
            textSize={1.8}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              selectedTab === 'yearly' ? AppColors.PRIMARY : AppColors.WHITE,
            width: responsiveWidth(45),
            height: responsiveHeight(6),
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setSelectedTab('yearly')}>
          <AppText
            title={'Yearly'}
            textColor={
              selectedTab === 'yearly' ? AppColors.WHITE : AppColors.BLACK
            }
            textSize={1.8}
          />
        </TouchableOpacity>
      </View>

      <LineBreak space={2} />

      {selectedTab === 'monthly' && (
        <UpgradePlanCard
          data={data}
          title="Mind Monkey Premium"
          priceTag="$4.99"
          text="/ Monthly"
        />
      )}

      {selectedTab === 'yearly' && (
        <UpgradePlanCard
          data={data}
          title="Mind Monkey Premium"
          priceTag="$4.99"
          text="/ Yearly"
          selectedTab={selectedTab === 'yearly'}
        />
      )}

      <PaymentCard
        item={{
          id: 1,
          icon: AppIcons.master_card,
          title: 'Matercard',
          subTitle: '___________________44332',
        }}
        onPress={() => navigateToRoute('ChoosePaymentMethod')}
        upgradePlan={'UpgradePlan'}
      />

      <LineBreak space={selectedTab === 'monthly' ? 12 : 10} />

      <View>
        <AppButton
          title={'Continue - $39.99'}
          handlePress={() => navigateToRoute('ChoosePaymentMethod')}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </ScrollView>
  );
};

export default UpgradePlan;
