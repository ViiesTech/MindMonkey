/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import Feather from 'react-native-vector-icons/Feather';

const language = [
  {id: 1, title: 'Customer Support'},
  {id: 2, title: 'Website'},
  {id: 3, title: 'WhatsApp'},
  {id: 4, title: 'Facebook'},
  {id: 5, title: 'X (Formerly Twitter)'},
  {id: 6, title: 'Instagram'},
];

const ContactSupport = () => {
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Contact Support" />
      <LineBreak space={4} />

      <FlatList
        data={language}
        ItemSeparatorComponent={<LineBreak space={2} />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: AppColors.WHITE,
                paddingHorizontal: responsiveWidth(5),
                paddingVertical: responsiveHeight(2),
                borderRadius: 10,
              }}
              onPress={() => {}}>
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

export default ContactSupport;
