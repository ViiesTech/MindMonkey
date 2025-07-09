/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {responsiveWidth} from '../../../utils/Responsive_Dimensions';
import AppTextInput from '../../../components/AppTextInput';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import FAQScreen from '../../../components/FAQ';

const tabs = [
  {id: 1, title: 'General'},
  {id: 2, title: 'Account'},
  {id: 3, title: 'Services'},
];

const Faq = () => {
  const [selectedTab, setSelectedTab] = useState({id: 1});
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="FAQ" />
      <LineBreak space={4} />

      <View>
        <AppTextInput
          inputPlaceHolder={'Search'}
          inputHeight={8}
          placeholderTextColor={'green'}
        />
        <LineBreak space={3} />

        <FlatList
          data={tabs}
          horizontal
          contentContainerStyle={{gap: 15}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedTab({id: item.id})}
                style={{
                  borderWidth: selectedTab.id == item.id ? 0 : 1,
                  width: 105,
                  backgroundColor:
                    selectedTab.id == item.id
                      ? AppColors.PRIMARY
                      : 'transparent',
                  height: 40,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AppText
                  title={item.title}
                  textColor={
                    selectedTab.id == item.id
                      ? AppColors.WHITE
                      : AppColors.BLACK
                  }
                  textSize={1.8}
                  textFontWeight
                />
              </TouchableOpacity>
            );
          }}
        />

        <FAQScreen />
      </View>
    </ScrollView>
  );
};

export default Faq;
