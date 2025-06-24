/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import {useCustomNavigation} from '../../../utils/Hooks';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';


const YourRecord = () => {
  const {goBack, navigateToRoute} = useCustomNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={6}
        totalSteps={8}
        onBackPress={() => goBack()}
      />
      <LineBreak space={5} />
      <AppText
        title={'what do you want to record?'}
        textColor={AppColors.BLACK}
        textFontWeight
        textSize={2.8}
        lineHeight={3}
        textwidth={70}
        textAlignment={'center'}
        textTransform={'uppercase'}
      />
      <LineBreak space={0.5} />
      <AppText
        title={'Track activities that matter to you. Choose the types of activities you want to log'}
        textColor={AppColors.GRAY}
        textSize={1.5}
        lineHeight={2.5}
        textwidth={70}
        textAlignment={'center'}
      />
    </View>
  );
};

export default YourRecord;
