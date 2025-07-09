/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import LineBreak from '../../../components/LineBreak';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import AppText from '../../../components/AppTextComps/AppText';
import EmojiThemePicker from '../../../components/EmojiThemePicker';
import AppButton from '../../../components/AppButton';
import {responsiveWidth} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';

const emojiThemes = [
  ['😡', '😟', '😐', '🙂', '😄'],
  ['🥵', '🥺', '😳', '😊', '🥰'],
  ['🎃', '😠', '🎃', '😐', '🎃'],
  ['😤', '😣', '😌', '😃', '😶'],
  ['😡', '😊', '😵', '😀'],
  ['😠', '😐', '😶', '😄'],
];

const data = [['😡', '😟', '😐', '🙂', '😄']];

const SetEmojiTheme = ({route}) => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const edit = route?.params?.edit;

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      {!edit && (
        <CustomHeaderProgress
          currentStep={4}
          totalSteps={8}
          onBackPress={() => goBack()}
        />
      )}
      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
        }}>
        <AppMainHeader heading="change emoji theme" />
      </View>

      <LineBreak space={edit ? 2 : 5} />
      {!edit && (
        <AppText
          title={'choose your emoji theme'}
          textColor={AppColors.BLACK}
          textFontWeight
          textSize={2.5}
          textAlignment={'center'}
          textTransform={'uppercase'}
        />
      )}
      {!edit && <LineBreak space={0.5} />}
      {!edit && (
        <AppText
          title={'Make mood tracking fun. Pick the emoji theme you prefer.'}
          textColor={AppColors.GRAY}
          textSize={1.8}
          lineHeight={2.5}
          textwidth={80}
          textAlignment={'center'}
        />
      )}

      {edit && (
        <View>
          <EmojiThemePicker emojiThemes={data} />
        </View>
      )}

      <ScrollView>
        <EmojiThemePicker
          emojiThemes={emojiThemes}
          selectedThemeIndex={selectedThemeIndex}
          setSelectedThemeIndex={setSelectedThemeIndex}
        />
        <View style={{alignItems: 'center'}}>
          <AppButton
            title={edit ? 'save' : 'Continue'}
            handlePress={() => {
              if(edit){
                navigateToRoute('Main');
              }else {
                navigateToRoute('ChooseColorTheme');
              }
            }}
            textSize={1.8}
            btnBackgroundColor={AppColors.PRIMARY}
            btnPadding={18}
            btnWidth={90}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SetEmojiTheme;
