/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from './LineBreak';
import AppIcons from '../assets/icons/AppIcons';
import SVGXml from './SVGXML';

// const emojiData = [
//   {id: 1, title: 'Calm', emoji: AppIcons.family},
//   {id: 2, title: 'Calm', emoji: AppIcons.family},
//   {id: 3, title: 'Calm', emoji: AppIcons.family},
//   {id: 4, title: 'Calm', emoji: AppIcons.family},
//   {id: 5, title: 'Calm', emoji: AppIcons.family},
//   {id: 6, title: 'Calm', emoji: AppIcons.family},
//   {id: 7, title: 'Calm', emoji: AppIcons.family},
//   {id: 8, title: 'Calm', emoji: AppIcons.family},
//   {id: 9, title: 'Calm', emoji: AppIcons.family},
//   {id: 10, title: 'Calm', emoji: AppIcons.family},
//   {id: 11, title: 'Calm', emoji: AppIcons.family},
//   {id: 12, title: 'Calm', emoji: AppIcons.family},
//   {id: 13, title: 'Calm', emoji: AppIcons.family},
//   {id: 14, title: 'Calm', emoji: AppIcons.family},
//   {id: 15, title: 'Calm', emoji: AppIcons.family},
//   {id: 16, title: 'Calm', emoji: AppIcons.family},
// ];

const AboutYourDayComp = ({data, title,selectedItems,toggleSelect}) => {


  return (
    <View
      style={{
        backgroundColor: AppColors.WHITE,
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: AppColors.LIGHTGRAY,
          paddingBottom: responsiveHeight(1.5),
        }}>
        <AppText
          title={title}
          textColor={AppColors.BLACK}
          textSize={2}
          textTransform={'uppercase'}
          textFontWeight
        />

        {/* <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <TouchableOpacity onPress={() => {}}>
            <Entypo
              name={'plus'}
              size={responsiveFontSize(3)}
              color={AppColors.PRIMARY}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name={'chevron-up'}
              size={responsiveFontSize(3)}
              color={AppColors.GRAY}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      <LineBreak space={2} />

      <FlatList
        data={data}
        numColumns={4}
        columnWrapperStyle={{gap: 20}}
        ItemSeparatorComponent={<LineBreak space={2.5} />}
        renderItem={({item}) => {
          const isSelected = selectedItems?.includes(item._id);
          return (
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => toggleSelect(item._id)}>
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: isSelected
                    ? AppColors.PRIMARY
                    : 'transparent',
                  borderColor: AppColors.PRIMARY,
                  width: 60,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}>
                {/* <SVGXml icon={item.emoji} width={30} height={30} /> */}
                <AppText textSize={2.7} title={item.emoji} />
              </View>
              <LineBreak space={0.5} />
              <AppText
                title={item.subCategoryName}
                textColor={AppColors.GRAY}
                textSize={1.7}
              />
            </TouchableOpacity>
          );
        }}
      />

      <LineBreak space={2} />

      {/* <TouchableOpacity>
        <AppText
          title={'Show More...'}
          textColor={'#F48A88'}
          textSize={1.7}
          textAlignment={'center'}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default AboutYourDayComp;
