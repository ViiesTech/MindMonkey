/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import LineBreak from '../../../components/LineBreak';
import AppMainHeader from '../../../components/AppMainHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImages from '../../../assets/images/AppImages';

const DailyReminders = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Daily Reminders" />
      <LineBreak space={3} />

      <View
        style={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <AppText
            title={'Daily Reminders'}
            textColor={AppColors.BLACK}
            textSize={2}
          />

          <Ionicons
            name={'toggle-outline'}
            size={responsiveFontSize(4)}
            color={AppColors.PRIMARY}
          />
        </View>
        <LineBreak space={3} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppText
            title={'Reminder Time'}
            textColor={AppColors.BLACK}
            textSize={1.7}
            textFontWeight
          />

          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
            <AppText
              title={'20:00 PM'}
              textColor={AppColors.BLACK}
              textSize={1.7}
            />
            <SimpleLineIcons
              name={'arrow-right'}
              size={responsiveFontSize(1.7)}
              color={AppColors.BLACK}
            />
          </View>
        </View>
        <LineBreak space={2} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppText
            title={'Reminder Time'}
            textColor={AppColors.BLACK}
            textSize={1.7}
            textFontWeight
          />

          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
            <AppText
              title={'Lollipop'}
              textColor={AppColors.BLACK}
              textSize={1.7}
            />
            <SimpleLineIcons
              name={'arrow-right'}
              size={responsiveFontSize(1.7)}
              color={AppColors.BLACK}
            />
          </View>
        </View>
        <LineBreak space={3.5} />
        <Image
          source={AppImages.volume}
          style={{
            alignSelf: 'center',
            width: responsiveWidth(80),
            height: responsiveHeight(5),
          }}
          resizeMode="contain"
        />
        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <AppText
            title={'Vibration'}
            textColor={AppColors.BLACK}
            textSize={1.7}
            textFontWeight
          />

          <Ionicons
            name={'toggle-outline'}
            size={responsiveFontSize(4)}
            color={AppColors.PRIMARY}
          />
        </View>
      </View>
    </View>
  );
};

export default DailyReminders;
