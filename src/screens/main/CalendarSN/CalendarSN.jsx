/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import MainHeader from '../../../components/MainHeader';
import AppColors from '../../../utils/AppColors';
import Feather from 'react-native-vector-icons/Feather';
import AppText from '../../../components/AppTextComps/AppText';

const CalendarSN = () => {
  const [selectedTab, setSelectedTab] = useState('monthly');
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <LineBreak space={3} />
      <MainHeader
        heading={'Calendar'}
        rightIcon={
          <TouchableOpacity>
            <Feather
              name={'more-vertical'}
              size={responsiveFontSize(3)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />

      <LineBreak space={1.5} />

      <View
        style={{
          backgroundColor: AppColors.LIGHTGRAY,
          paddingHorizontal: responsiveWidth(2),
          paddingVertical: responsiveHeight(1),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedTab === 'monthly' ? AppColors.PRIMARY : '#EFEFEF',
              width: responsiveWidth(40),
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
                selectedTab === 'yearly' ? AppColors.PRIMARY : '#EFEFEF',
              width: responsiveWidth(46),
              height: responsiveHeight(6),
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setSelectedTab('yearly')}>
            <AppText
              title={'Year in Pixels'}
              textColor={
                selectedTab === 'yearly' ? AppColors.WHITE : AppColors.BLACK
              }
              textSize={1.8}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CalendarSN;
