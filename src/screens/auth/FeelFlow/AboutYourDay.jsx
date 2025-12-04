/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AboutYourDayComp from '../../../components/AboutYourDayComp';
import AppButton from '../../../components/AppButton';

const titles = [
  {id: 1, title: 'Emotions'},
  {id: 2, title: 'Work'},
  {id: 3, title: 'School'},
  {id: 4, title: 'Health'},
  {id: 5, title: 'Sleep'},
  {id: 6, title: 'Food'},
  {id: 7, title: 'Hobbies'},
  {id: 8, title: 'Social'},
  {id: 8, title: 'Self Improvement'},
  {id: 9, title: 'Productive/Creative'},
  {id: 10, title: 'Spiritual/Nature'},
];

const AboutYourDay = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();

  return (
    <>
      <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
        <LineBreak space={2} />
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons
            name={'close-outline'}
            size={responsiveFontSize(3)}
            color={AppColors.BLACK}
          />
        </TouchableOpacity>
        <LineBreak space={2} />
        <AppText
          title={'Tell Us About Your Day'}
          textColor={AppColors.BLACK}
          textSize={3}
          textFontWeight
          textwidth={100}
          textTransform={'uppercase'}
          textAlignment={'center'}
        />
        <LineBreak space={3} />
        <View>
          <FlatList
            data={titles}
            ItemSeparatorComponent={<LineBreak space={2} />}
            ListFooterComponent={<LineBreak space={2} />}
            renderItem={({item}) => <AboutYourDayComp title={item.title} />}
          />
        </View>
      </ScrollView>
      <View style={{alignItems: 'center', backgroundColor: 'transprant'}}>
        <AppButton
          title={'Continue'}
          handlePress={() => {
            navigateToRoute('Main');
          }}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
        <LineBreak space={2} />
      </View>
    </>
  );
};

export default AboutYourDay;
