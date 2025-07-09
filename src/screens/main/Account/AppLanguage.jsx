/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, FlatList, TouchableOpacity} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const language = [
  {id: 1, title: 'English'},
  {id: 2, title: 'Spanish'},
  {id: 3, title: 'Mandarin Chinese'},
  {id: 4, title: 'Hindi'},
  {id: 5, title: 'Arabic'},
  {id: 6, title: 'Bengali'},
  {id: 7, title: 'Portuguese'},
  {id: 8, title: 'Russian'},
  {id: 9, title: 'Japanese'},
  {id: 10, title: 'German'},
  {id: 11, title: 'French'},
  {id: 12, title: 'Urdu'},
];

const AppLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({id: 1});
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="App Language" />
      <LineBreak space={4} />

      <FlatList
        data={language}
        contentContainerStyle={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(8),
          paddingVertical: responsiveHeight(3),
          borderRadius: 10,
        }}
        ItemSeparatorComponent={<LineBreak space={3} />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => setSelectedLanguage({id: item.id})}>
              <AppText
                title={item.title}
                textColor={AppColors.BLACK}
                textSize={1.8}
                textFontWeight
              />
              {selectedLanguage.id == item.id && (
                <FontAwesome
                  name={'check'}
                  size={responsiveFontSize(2)}
                  color={AppColors.PRIMARY}
                />
              )}
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default AppLanguage;
