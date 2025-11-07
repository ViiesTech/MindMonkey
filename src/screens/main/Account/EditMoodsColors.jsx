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
import {ShowToast, useCustomNavigation} from '../../../utils/Hooks';
import {useCreateUpdateProfileMutation} from '../../../redux/service';
import { useSelector } from 'react-redux';

const emojiThemes = [
  ['😡', '😟', '😐', '🙂', '😄'],
  ['🥵', '🥺', '😳', '😊', '🥰'],
  ['🎃', '😠', '🎃', '😐', '🎃'],
  ['😤', '😣', '😌', '😃', '😶'],
  ['😡', '😊', '😵', '😀'],
  ['😠', '😐', '😶', '😄'],
];
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

const EditMoodsColors = ({route}) => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const {data} = route?.params;
  const [selectedColor, setSelectedColor] = useState({id: data?.colors || 0});
  const [selectedTheme, setSelectedTheme] = useState({id: data?.moods || 0});
  const {_id} = useSelector(state => state.persistedData.user)
  const [createUpdateProfile, {isLoading}] = useCreateUpdateProfileMutation();

  console.log(data);

  const onEditMoodsColors = async () => {
    let data = new FormData();
    data.append('emojiTheme', selectedTheme.id);
    data.append('emojiColor', selectedColor.id);
    data.append('id',_id)

    await createUpdateProfile(data)
      .unwrap()
      .then(res => {
        console.log('response of edit moods and colors', res);
        // ShowToast(res.message);
        if (res.success) {
          ShowToast('Updated successfully!')
          goBack();
        }
      })
      .catch(error => {
        console.log('error while updating moods and colors', error);
        ShowToast('Some problem occured');
      });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
      }}
      contentContainerStyle={{paddingBottom: responsiveHeight(10)}}>
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
          selectedThemeIndex={selectedTheme}
          setSelectedThemeIndex={setSelectedTheme}
          // isEdit={true}
          // handleOnEdit={() => navigateToRoute('SetEmojiTheme', {edit: true})}
        />
      </View>
      <LineBreak space={4} />
      <View style={{flex: 1}}>
        <FlatList
          data={colorTheme}
          ItemSeparatorComponent={<LineBreak space={2} />}
          contentContainerStyle={{paddingHorizontal: responsiveWidth(6)}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: selectedColor.id == index ? 3 : 1,
                  borderColor:
                    selectedColor.id == index
                      ? AppColors.PRIMARY
                      : AppColors.LIGHTGRAY,
                  paddingHorizontal: responsiveWidth(5),
                  paddingVertical: responsiveHeight(2),
                  borderRadius: 5,
                }}
                onPress={() => setSelectedColor({id: index})}>
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
          handlePress={() => onEditMoodsColors()}
          textSize={1.8}
          indicator={isLoading}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </ScrollView>
  );
};

export default EditMoodsColors;
