/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import MainHeader from '../../../components/MainHeader';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import InsightsChartBg from '../../../components/InsightsChartBg';
import AppImages from '../../../assets/images/AppImages';
import WeeklyMoodChart from '../../../components/WeeklyMoodChart';
import SpeedometerChart from '../../../components/CreditScoreGauge';

const infoData = [
  {id: 1, title: '65', subTitle: 'Largest streak'},
  {id: 2, title: '58', subTitle: 'Current streak'},
  {id: 3, title: '482', subTitle: 'Lifetime days'},
];

const Insights = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <LineBreak space={3} />
      <MainHeader
        heading={'Insights'}
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
      <LineBreak space={3} />

      <FlatList
        data={infoData}
        horizontal
        contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: AppColors.WHITE,
                alignItems: 'center',
                paddingHorizontal: responsiveWidth(5),
                paddingVertical: responsiveHeight(2),
                borderRadius: 10,
              }}>
              <AppText
                title={item.title}
                textColor={AppColors.BLACK}
                textSize={3}
                textFontWeight
              />
              <LineBreak space={0.5} />
              <AppText
                title={item.subTitle}
                textColor={AppColors.DARKGRAY}
                textSize={1.4}
              />
            </View>
          );
        }}
      />

      <LineBreak space={3} />

      <InsightsChartBg
        title="mood chart"
        isShowRightContent={true}
        weeklyChart={<WeeklyMoodChart type="weekly" />}
        monthlyChart={<WeeklyMoodChart type="monthly" />}
        yearlyChart={<WeeklyMoodChart type="yearly" />}
      />

      <LineBreak space={2} />

      <InsightsChartBg
        title="mood count"
        weeklyChart={<SpeedometerChart type="weekly"  />}
        monthlyChart={<SpeedometerChart type="monthly"  />}
        yearlyChart={<SpeedometerChart type="yearly"  />}
      />

      <LineBreak space={2} />

      <InsightsChartBg
        title="average daily mood"
        hideTabs={false}
        simpleRendering={<WeeklyMoodChart type="dayly" />}
      />

      <LineBreak space={2} />

      <InsightsChartBg
        title="mood stability"
        hideTabs={false}
        showText={true}
        simpleRendering={<SpeedometerChart type="score"  />}
      />

      <LineBreak space={3} />
    </ScrollView>
  );
};

export default Insights;
