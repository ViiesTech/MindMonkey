/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AppImages from '../../../assets/images/AppImages';
import AppButton from '../../../components/AppButton';
import {useCustomNavigation} from '../../../utils/Hooks';
import SocialShareModal from '../../../components/SocialShareModal';

const contentData = [
  {id: 1, title: 'Calm'},
  {id: 2, title: 'Grateful'},
  {id: 3, title: 'Content'},
  {id: 4, title: 'Overtime'},
  {id: 5, title: 'Exams'},
  {id: 6, title: 'Projects'},
  {id: 7, title: 'Hydration'},
  {id: 8, title: 'Nap'},
  {id: 9, title: 'Dinner'},
  {id: 10, title: 'Reading'},
  {id: 11, title: 'Partner'},
  {id: 12, title: 'Therapy'},
  {id: 13, title: 'Focus Time'},
  {id: 14, title: 'Laundry'},
  {id: 15, title: 'Cloudy'},
  {id: 16, title: 'Hot'},
  {id: 17, title: 'Cycling'},
  {id: 18, title: 'Yoga'},
];

const ShareMood = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <LineBreak space={2} />
      <SocialShareModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons
            name={'close-outline'}
            size={responsiveFontSize(3)}
            color={AppColors.BLACK}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <AppText
            title={'SHARE MOOD'}
            textColor={AppColors.BLACK}
            textSize={3.5}
            textFontWeight
            textAlignment={'center'}
          />

          <LineBreak space={2} />

          <Image
            source={AppImages.smile}
            style={{width: responsiveWidth(100), height: responsiveHeight(10)}}
            resizeMode="contain"
          />

          <LineBreak space={2} />

          <AppText
            title={'i feel good'}
            textColor={AppColors.BLACK}
            textSize={2.5}
            textTransform={'uppercase'}
            textFontWeight
            textwidth={100}
            textAlignment={'center'}
          />
          <LineBreak space={0.5} />
          <AppText
            title={'Mar 2 - 20 : 20 AM'}
            textColor={AppColors.BLACK}
            textSize={1.6}
            textTransform={'uppercase'}
            textwidth={100}
            textAlignment={'center'}
          />
        </View>
        <LineBreak space={2} />

        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: AppColors.LIGHTGRAY,
            borderBottomWidth: 1,
            borderBottomColor: AppColors.LIGHTGRAY,
            paddingVertical: responsiveHeight(2.5),
          }}>
          <FlatList
            data={contentData}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 5,
            }}
            ItemSeparatorComponent={<LineBreak space={0.5} />}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: responsiveWidth(6),
                    paddingVertical: responsiveHeight(0.5),
                    borderRadius: 100,
                    borderColor: AppColors.LIGHTGRAY,
                  }}>
                  <AppText
                    title={item.title}
                    textColor={AppColors.GRAY}
                    textSize={1.6}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <LineBreak space={3} />

        <AppText
          title={
            'Today was a little problem in the team, but i am good an socializing. I feel okay.'
          }
          textColor={AppColors.GRAY}
          textSize={1.6}
          textwidth={60}
          lineHeight={2.5}
        />
        <LineBreak space={3} />

        <ScrollView
          horizontal
          contentContainerStyle={{flexDirection: 'row', gap: 15}}>
          {[...Array(4)].map((_, index) => (
            <TouchableOpacity
              style={{
                width: 70,
                height: 70,
                backgroundColor: AppColors.LIGHTGRAY,
                borderRadius: 5,
              }}
            />
          ))}
        </ScrollView>

        <LineBreak space={5} />

        <View>
          <AppButton
            title={'share mood'}
            handlePress={() => {
              // setModalVisible(true)
              navigateToRoute('AboutYourDay');
            }}
            textSize={1.8}
            leftIcon={
              <View style={{paddingHorizontal: responsiveWidth(2)}}>
                <Feather
                  name={'share-2'}
                  size={responsiveFontSize(3)}
                  color={AppColors.WHITE}
                />
              </View>
            }
            btnBackgroundColor={AppColors.PRIMARY}
            btnPadding={18}
            btnWidth={90}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ShareMood;
