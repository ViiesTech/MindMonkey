/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';

const UpgradePlan = () => {
  const [selectedTab, setSelectedTab] = useState('monthly');

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
      <Text>UpgradePlan</Text>
    </ScrollView>
  );
};

export default UpgradePlan;
