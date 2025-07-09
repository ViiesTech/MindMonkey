/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';

const data = [
  {
    id: 1,
    title: 'Effective Date: December 19 , 2024',
    subTitle:
      'Mind Monkey, LLC (“Mind Monkey, “We,” or “us”) respects the privacy of its users (“you” or “your”). This privacy policy describes how we collect, use, disclose, and store your information when you use our mobile application, Mind Monkey (the “App”).',
  },
  {
    id: 2,
    title: '1.Use of the App',
    subTitle:
      '. Account information when you create an account. we collect your email address and a nickname u choose to use within the app. Optional information you may optionally provide additional information such as your age and gender ( demographic data ). Usage Data we collect information about your use of the App, such as your mood selections, activities tracked, and any notes you add',
  },
  {
    id: 3,
    title: '2.Intellectual Property:',
    subTitle:
      'The app and all content contained therein including trademark, copyrights and other intellectual property rights, ae the property of Mind Monkey or its licensors',
  },
];

const TermsOfService = () => {
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Privacy Policy" />
      <LineBreak space={4} />

      <FlatList
        data={data}
        ItemSeparatorComponent={<LineBreak space={2} />}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: AppColors.WHITE,
                paddingHorizontal: responsiveWidth(5),
                paddingVertical: responsiveHeight(2),
                borderRadius: 10,
              }}>
              <AppText
                title={item.title}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textFontWeight
              />
              <LineBreak space={1} />
              <AppText
                title={item.subTitle}
                textColor={AppColors.GRAY}
                textSize={1.7}
                lineHeight={2.5}
              />
            </View>
          );
        }}
      />
      <LineBreak space={2} />
    </ScrollView>
  );
};

export default TermsOfService;
