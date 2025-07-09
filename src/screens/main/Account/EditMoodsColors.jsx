/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import EmojiThemePicker from '../../../components/EmojiThemePicker';
import AppButton from '../../../components/AppButton';
import {useCustomNavigation} from '../../../utils/Hooks';

const emojiThemes = [['😡', '😟', '😐', '🙂', '😄']];
const colorTheme = [
  {
    id: 1,
    color: '#F54336',
    color2: '#FF981F',
    color3: '#FFC02D',
    color4: '#8BC255',
    color5: '#4AAF57',
  },
  {
    id: 2,
    color: '#AC92EB',
    color2: AppColors.PRIMARY,
    color3: '#A0D568',
    color4: '#FFCE54',
    color5: '#ED5564',
  },
  {
    id: 3,
    color: AppColors.PRIMARY,
    color2: '#FDE74C',
    color3: '#9BC53D',
    color4: '#E55934',
    color5: '#FA7921',
  },
];

const EditMoodsColors = () => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [selectedTheme, setSelectedTheme] = useState({id: 1});

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
      }}>
      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
        }}>
        <AppMainHeader heading="Edit Moods & Colors" />
      </View>
      <LineBreak space={2} />
      <View>
        <EmojiThemePicker
          emojiThemes={emojiThemes}
          isEdit={true}
          handleOnEdit={() => navigateToRoute('SetEmojiTheme', {edit: true})}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={colorTheme}
          ItemSeparatorComponent={<LineBreak space={2} />}
          contentContainerStyle={{paddingHorizontal: responsiveWidth(6)}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: selectedTheme.id == item.id ? 3 : 1,
                  borderColor:
                    selectedTheme.id == item.id
                      ? AppColors.PRIMARY
                      : AppColors.LIGHTGRAY,
                  paddingHorizontal: responsiveWidth(5),
                  paddingVertical: responsiveHeight(2),
                  borderRadius: 5,
                }}
                onPress={() => setSelectedTheme({id: item.id})}>
                <View
                  style={{
                    backgroundColor: item.color,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
                <View
                  style={{
                    backgroundColor: item.color2,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
                <View
                  style={{
                    backgroundColor: item.color3,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
                <View
                  style={{
                    backgroundColor: item.color4,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
                <View
                  style={{
                    backgroundColor: item.color5,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <LineBreak space={2} />

      <View style={{flex: 1, alignItems: 'center'}}>
        <AppButton
          title={'save'}
          handlePress={() => {}}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </ScrollView>
  );
};

export default EditMoodsColors;
