/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, FlatList, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import Feather from 'react-native-vector-icons/Feather';
import {useCustomNavigation} from '../../../utils/Hooks';

const language = [
  {id: 1, title: 'FAQ', navTo: 'Faq'},
  {id: 2, title: 'Contact Support', navTo: 'ContactSupport'},
  {id: 3, title: 'Privacy Policy', navTo: ''},
  {id: 4, title: 'Terms of Service', navTo: ''},
  {id: 5, title: 'Partner', navTo: ''},
  {id: 6, title: 'Job Vacancy', navTo: ''},
  {id: 7, title: 'Accessiblity', navTo: ''},
  {id: 8, title: 'Feedback', navTo: ''},
  {id: 9, title: 'About us', navTo: ''},
  {id: 10, title: 'Rate us', navTo: ''},
  {id: 11, title: 'Visit our Website', navTo: ''},
  {id: 12, title: 'Follow us on social media', navTo: ''},
];

const HelpAndSupport = () => {
  const {navigateToRoute} = useCustomNavigation();
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Help & Support" />
      <LineBreak space={4} />

      <FlatList
        data={language}
        contentContainerStyle={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(6),
          paddingVertical: responsiveHeight(3),
          borderRadius: 10,
        }}
        ItemSeparatorComponent={<LineBreak space={3} />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => {
                if (item.navTo) {
                  navigateToRoute(item.navTo);
                }
              }}>
              <AppText
                title={item.title}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textFontWeight
              />
              <Feather
                name={'chevron-right'}
                size={responsiveFontSize(3)}
                color={AppColors.GRAY}
              />
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default HelpAndSupport;
