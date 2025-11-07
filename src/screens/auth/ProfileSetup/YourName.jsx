/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View} from 'react-native';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import {ShowToast, useCustomNavigation} from '../../../utils/Hooks';
import LineBreak from '../../../components/LineBreak';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';

const YourName = () => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [name,setName] = useState('')

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={1}
        totalSteps={8}
        onBackPress={() => goBack()}
      />

      <LineBreak space={5} />

      <View style={{flex: 1, alignItems: 'center'}}>
        <AppText
          title={'what should we call you?'}
          textColor={AppColors.BLACK}
          textFontWeight
          textSize={2.5}
          textTransform={'uppercase'}
        />
        <LineBreak space={0.5} />
        <AppText
          title={'what should we call you?'}
          textColor={AppColors.GRAY}
          lineHeight={3}
          textSize={1.8}
        />

        <LineBreak space={2} />

        <AppTextInput
          inputPlaceHolder={'Andrew'}
          inputTextAlignVertical={'center'}
          inputTextAlign={'center'}
          inputHeight={7}
          fontSize={3}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <AppButton
          title={'Continue'}
          handlePress={() => {
            if(!name) {
              ShowToast('Please enter your name')
              return
            }
           navigateToRoute('YourGender',{name})}}
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

export default YourName;
