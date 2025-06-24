/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppTextComps/AppText';
import LineBreak from '../../components/LineBreak';
import AppImages from '../../assets/images/AppImages';
import AppButton from '../../components/AppButton';
import {useCustomNavigation} from '../../utils/Hooks';

const AllSet = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={AppImages.check_circle}
          style={{width: '40%', height: '25%'}}
        />
        <LineBreak space={2} />
        <AppText
          title={'You’re all set'}
          textColor={AppColors.BLACK}
          textFontWeight
          textwidth={100}
          textSize={2.5}
          textAlignment={'center'}
          textTransform={'uppercase'}
        />
        <LineBreak space={1} />
        <AppText
          title={'Your password has been successfully updated.'}
          textColor={AppColors.GRAY}
          textwidth={65}
          textAlignment={'center'}
          lineHeight={2.6}
          textSize={1.8}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <AppButton
          title={'Go to homepage'}
          handlePress={() => navigateToRoute('GetStarted')}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
        <LineBreak space={2} />
      </View>
    </View>
  );
};

export default AllSet;
