import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useCustomNavigation} from '../../../utils/Hooks';
import AppColors from '../../../utils/AppColors';
import LineBreak from '../../../components/LineBreak';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import AppText from '../../../components/AppTextComps/AppText';
import EmojiThemePicker from '../../../components/EmojiThemePicker';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppButton from '../../../components/AppButton';

// const emojiThemes = [['😡', '😟', '😐', '🙂', '😄']];
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

const ChooseColorTheme = ({route}) => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [selectedColor, setSelectedColor] = useState({id: 0});
  const {selectedTheme} = route?.params;

  // console.log('selectedTheme ===>',selectedTheme)

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={5}
        totalSteps={8}
        onBackPress={() => goBack()}
      />
      <LineBreak space={5} />
      <AppText
        title={'choose your color palette'}
        textColor={AppColors.BLACK}
        textFontWeight
        textSize={2.5}
        textAlignment={'center'}
        textTransform={'uppercase'}
      />
      <LineBreak space={0.5} />
      <AppText
        title={'Customize your emoji theme . pick the color you like the most.'}
        textColor={AppColors.GRAY}
        textSize={1.5}
        lineHeight={2.5}
        textwidth={70}
        textAlignment={'center'}
      />

      <View>
        <EmojiThemePicker emojiThemes={[selectedTheme?.face]} />
      </View>

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
      <View style={{flex: 1, alignItems: 'center'}}>
        <AppButton
          title={'Continue'}
          handlePress={() =>
            navigateToRoute('YourRecord', {
              ...route?.params,
              selectedColorPalette: selectedColor.id,
            })
          }
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </View>
  );
};

export default ChooseColorTheme;
