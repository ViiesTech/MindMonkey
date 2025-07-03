/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, FlatList, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import AppColors from '../../../utils/AppColors';
import Entypo from 'react-native-vector-icons/Entypo';
import AppIcons from '../../../assets/icons/AppIcons';
import PaymentCard from '../../../components/PaymentCard';
import AppButton from '../../../components/AppButton';
import {useCustomNavigation} from '../../../utils/Hooks';

const data = [
  {
    id: 1,
    icon: AppIcons.paypal,
    title: 'PayPal',
    subTitle: 'andrew.ainsley@yourdomain.com',
  },
  {
    id: 2,
    icon: AppIcons.google_main,
    title: 'Google pay',
    subTitle: 'andrew.ainsley@yourdomain.com',
  },
  {
    id: 3,
    icon: AppIcons.master_card,
    title: 'Matercard',
    subTitle: 'andrew.ainsley@yourdomain.com',
  },
  {
    id: 4,
    icon: AppIcons.apple_pay,
    title: 'Apple pay',
    subTitle: 'andrew.ainsley@yourdomain.com',
  },
  {
    id: 5,
    icon: AppIcons.visa,
    title: 'Visa',
    subTitle: '-----------9865',
  },
  {
    id: 6,
    icon: AppIcons.express,
    title: 'American Express',
    subTitle: '-----------------------8754',
  },
];

const ChoosePaymentMethod = () => {
  const [isSelected, setIsSelected] = useState({id: 0});
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader
        heading="Choose Payment Method"
        rightIcon={
          <TouchableOpacity>
            <Entypo
              name={'plus'}
              size={responsiveFontSize(3)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />
      <LineBreak space={5} />

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <PaymentCard
              item={item}
              isSelected={isSelected?.id == item.id}
              onPress={() => setIsSelected({id: item.id})}
            />
          );
        }}
      />

      <LineBreak space={1} />

      <View>
        <AppButton
          title={'Finish'}
          handlePress={() => navigateToRoute('BenefitsUnlocked')}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </ScrollView>
  );
};

export default ChoosePaymentMethod;
