/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import AppIcons from '../../../assets/icons/AppIcons';
import SVGXml from '../../../components/SVGXML';
import AppText from '../../../components/AppTextComps/AppText';
import {useCustomNavigation} from '../../../utils/Hooks';

const data = [
  {id: 1, icon: AppIcons.star, title: 'Mind Monkey'},
  {id: 2, icon: AppIcons.king_white, title: 'Mood Master'},
  {id: 3, icon: AppIcons.label_rounded, title: 'Consistent Logger'},
  {id: 4, icon: AppIcons.leaf_white, title: 'Zen Guru'},
  {id: 5, icon: AppIcons.hummer_white, title: 'Persistent Performer'},
  {id: 6, icon: AppIcons.sun_rounded, title: 'Early Bird'},
  {id: 7, icon: AppIcons.mode, title: 'Night Owl'},
  {id: 8, icon: AppIcons.search_rounded, title: 'Insight Seeker'},
  {id: 9, icon: AppIcons.green_leaf, title: 'wellness Warrior'},
  {id: 10, icon: AppIcons.knife, title: 'Health Hero'},
  {id: 11, icon: AppIcons.brush, title: 'Creative Soul'},
  {id: 12, icon: AppIcons.red_heart, title: 'Well Done'},
  {id: 13, icon: AppIcons.brain, title: 'Mindful Mover'},
  {id: 14, icon: AppIcons.hand_white, title: 'Fitness Fanatic'},
  {id: 15, icon: AppIcons.direction, title: 'Mood Explorer'},
];

const Achievements = () => {
  const {navigateToRoute} = useCustomNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <AppMainHeader heading="Achievements" textTransform="normal" />
      <LineBreak space={4} />

      <FlatList
        data={data}
        numColumns={3}
        contentContainerStyle={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(4),
          borderRadius: 20,
        }}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={<LineBreak space={3} />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => navigateToRoute('ShareAchievement')}>
              <SVGXml icon={item.icon} width={90} height={90} />
              <LineBreak space={1.5} />
              <AppText
                title={item.title}
                textColor={AppColors.GRAY}
                textSize={1.5}
                textAlignment={'center'}
              />
            </TouchableOpacity>
          );
        }}
      />
      <LineBreak space={4} />
    </ScrollView>
  );
};

export default Achievements;
