/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import AppButton from '../../../components/AppButton';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AgePicker from '../../../components/AgePicker';

const YourAge = ({route}) => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [ageYears, setAgeYears] = useState(27);

  console.log('age years ===>', ageYears);

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={3}
        totalSteps={8}
        onBackPress={() => goBack()}
      />
      <LineBreak space={5} />
      <View style={{flex: 1, alignItems: 'center'}}>
        <AppText
          title={'how old are you?'}
          textColor={AppColors.BLACK}
          textFontWeight
          textSize={2.5}
          textTransform={'uppercase'}
        />
        <LineBreak space={0.5} />
        <AppText
          title={'We’d like to know more about you'}
          textColor={AppColors.GRAY}
          lineHeight={3}
          textSize={1.8}
        />

        <LineBreak space={10} />

        <AgePicker
          selectedAge={ageYears}
          setSelectedAge={age => setAgeYears(age)}
        />
      </View>
      <View
        style={{flex: 0.7, justifyContent: 'flex-end', alignItems: 'center'}}>
        <AppButton
          title={'Continue'}
          handlePress={() =>
            navigateToRoute('SetEmojiTheme', {
              ...route?.params?.profileData,
              ageYears,
            })
          }
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
      <LineBreak space={5} />
    </View>
  );
};

export default YourAge;
