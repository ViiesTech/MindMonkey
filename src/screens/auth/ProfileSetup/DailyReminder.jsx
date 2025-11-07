import React, { useState } from 'react';
import {View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import {useCustomNavigation} from '../../../utils/Hooks';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import TimePicker from '../../../components/TimePicker';
import AppButton from '../../../components/AppButton';

const DailyReminder = ({route}) => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [time,setTime] = useState('')
  console.log('route',time)

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={7}
        totalSteps={8}
        onBackPress={() => goBack()}
      />
      <LineBreak space={5} />
      <AppText
        title={'set daily reminder time'}
        textColor={AppColors.BLACK}
        textFontWeight
        textSize={2.8}
        lineHeight={3}
        textwidth={75}
        textAlignment={'center'}
        textTransform={'uppercase'}
      />
      <LineBreak space={0.5} />
      <AppText
        title={
          'Stay consistent with your tracking. Choose a time for daily reminder.'
        }
        textColor={AppColors.GRAY}
        textSize={1.5}
        lineHeight={2.5}
        textwidth={75}
        textAlignment={'center'}
      />

      <LineBreak space={4} />

      <View>
        <TimePicker setSelectedTime={(time => setTime(time))} />
      </View>
      <LineBreak space={4} />
      <AppText
        title={'You can always change this later'}
        textColor={AppColors.GRAY}
        textSize={1.5}
        lineHeight={2.5}
        textwidth={75}
        textAlignment={'center'}
      />
      <LineBreak space={8} />
      <View style={{alignItems: 'center'}}>
        <AppButton
          title={'Continue'}
          handlePress={() => navigateToRoute('YourSocialRecord',{...route?.params,dailyReminder:time})}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </View>
  );
};

export default DailyReminder;
