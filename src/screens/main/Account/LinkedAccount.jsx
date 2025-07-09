/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '../../../utils/AppColors';
import PaymentCard from '../../../components/PaymentCard';
import AppIcons from '../../../assets/icons/AppIcons';
import {useCustomNavigation} from '../../../utils/Hooks';

const data = [
  {id: 1, icon: AppIcons.google, title: 'Google'},
  {id: 2, icon: AppIcons.black_apple, title: 'Apple'},
  {id: 3, icon: AppIcons.facebook, title: 'Facebook'},
];

const LinkedAccount = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader
        heading="Linked Account"
        rightIcon={
          <TouchableOpacity onPress={() => navigateToRoute('AddNewPayment')}>
            <Feather
              name={'plus'}
              size={responsiveFontSize(3)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />
      <LineBreak space={3} />

      <View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <PaymentCard
                item={item}
                onPress={() => {}}
                linkedAccount={'LinkedAccount'}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default LinkedAccount;
