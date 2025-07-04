/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import LineBreak from '../../../components/LineBreak';
import MainHeader from '../../../components/MainHeader';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppImages from '../../../assets/images/AppImages';
import AppText from '../../../components/AppTextComps/AppText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useCustomNavigation} from '../../../utils/Hooks';

const data = [
  {
    id: 1,
    leftIcon: (
      <SimpleLineIcons
        name={'badge'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Achievement',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'Achievements',
  },
  {
    id: 2,
    leftIcon: (
      <Entypo
        name={'star-outlined'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Favorites',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'Favorites',
  },
  {
    id: 3,
    leftIcon: (
      <Feather
        name={'image'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Photo Gallery',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'PhotoGallery',
  },
  {
    id: 4,
    leftIcon: (
      <Feather
        name={'bell'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Daily Reminder',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'DailyReminders',
  },
  {
    id: 5,
    leftIcon: (
      <Feather
        name={'smile'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Edit Moods & Colors',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 6,
    leftIcon: (
      <Feather
        name={'book-open'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Manage Activities',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 7,
    leftIcon: (
      <Feather
        name={'download'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Export Data',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'ExportData',
  },
  {
    id: 8,
    leftIcon: (
      <SimpleLineIcons
        name={'settings'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Preferences',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    navTo: 'Preferences',
  },
  {
    id: 9,
    leftIcon: (
      <FontAwesome5
        name={'layer-group'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Account & Security',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 10,
    leftIcon: (
      <MaterialIcons
        name={'payment'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Payment Methods',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 11,
    leftIcon: (
      <Feather
        name={'clipboard'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Billing & Subscription',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 12,
    leftIcon: (
      <FontAwesome
        name={'link'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Linked Accounts',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 13,
    leftIcon: (
      <Feather
        name={'eye'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'App Appearance',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 14,
    leftIcon: (
      <FontAwesome
        name={'question-circle-o'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Help & Support',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 15,
    leftIcon: (
      <FontAwesome5
        name={'users'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Invite Your Friends',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 16,
    leftIcon: (
      <Entypo
        name={'star-outlined'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
    title: 'Rate Us',
    rightArrow: (
      <SimpleLineIcons
        name={'arrow-right'}
        size={responsiveFontSize(2)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 17,
    leftIcon: (
      <MaterialIcons
        name={'logout'}
        size={responsiveFontSize(2)}
        color={AppColors.RED_COLOR}
      />
    ),
    title: 'LOGOUT',
    rightArrow: '',
  },
];

const Account = () => {
  const {navigateToRoute} = useCustomNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <LineBreak space={3} />
      <MainHeader
        heading={'Account'}
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

      <TouchableOpacity onPress={() => navigateToRoute('UpgradePlan')}>
        <Image
          source={AppImages.account_banner}
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(10),
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <LineBreak space={3} />

      <TouchableOpacity
        style={{
          backgroundColor: AppColors.WHITE,
          borderRadius: 10,
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(1.5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
            <Image
              source={AppImages.profile}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
              }}
            />

            <View>
              <AppText
                title={'Andrew Ainsley'}
                textColor={AppColors.BLACK}
                textSize={2.2}
                textFontWeight
              />
              <LineBreak space={0.5} />
              <AppText
                title={'andrew.ainsley@yourdomain.com'}
                textColor={AppColors.DARKGRAY}
                textSize={1.4}
              />
            </View>
          </View>
          <View>
            <SimpleLineIcons
              name={'arrow-right'}
              size={responsiveFontSize(2)}
              color={AppColors.BLACK}
            />
          </View>
        </View>
      </TouchableOpacity>

      <LineBreak space={1} />

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:
                  item.id <= 3 ||
                  item.id == 5 ||
                  item.id == 6 ||
                  item.id == 7 ||
                  item.id == 8 ||
                  item.id >= 10
                    ? 0
                    : responsiveHeight(1),
                borderTopLeftRadius:
                  item.id == 5 ||
                  item.id == 2 ||
                  item.id == 3 ||
                  item.id == 6 ||
                  item.id == 7 ||
                  item.id == 8 ||
                  item.id >= 10
                    ? 0
                    : 10,
                borderTopRightRadius:
                  item.id == 5 ||
                  item.id == 2 ||
                  item.id == 3 ||
                  item.id == 6 ||
                  item.id == 7 ||
                  item.id == 8 ||
                  item.id >= 10
                    ? 0
                    : 10,
                borderBottomLeftRadius:
                  item.id == 5 ||
                  item.id == 1 ||
                  item.id == 4 ||
                  item.id == 2 ||
                  item.id == 6 ||
                  item.id == 7 ||
                  item.id == 9 ||
                  item.id == 10 ||
                  item.id == 11 ||
                  item.id == 12 ||
                  item.id == 13 ||
                  item.id == 14 ||
                  item.id == 15 ||
                  item.id == 16
                    ? 0
                    : 10,
                borderBottomRightRadius:
                  item.id == 5 ||
                  item.id == 1 ||
                  item.id == 4 ||
                  item.id == 2 ||
                  item.id == 6 ||
                  item.id == 7 ||
                  item.id == 9 ||
                  item.id == 10 ||
                  item.id == 11 ||
                  item.id == 12 ||
                  item.id == 13 ||
                  item.id == 14 ||
                  item.id == 15 ||
                  item.id == 16
                    ? 0
                    : 10,
                paddingVertical: responsiveHeight(1.5),
                paddingHorizontal: responsiveWidth(4),
                backgroundColor: AppColors.WHITE,
              }}
              onPress={() => {
                if(item.navTo){
                  navigateToRoute(item.navTo);
                }
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                {item.leftIcon}
                <AppText
                  title={item.title}
                  textColor={
                    item.id == 17 ? AppColors.RED_COLOR : AppColors.BLACK
                  }
                  textSize={2}
                  textFontWeight
                />
              </View>
              {item.rightArrow}
            </TouchableOpacity>
          );
        }}
      />
      <LineBreak space={2} />
    </ScrollView>
  );
};

export default Account;
