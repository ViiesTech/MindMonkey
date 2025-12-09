import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppHeader from '../../../components/AppHeader';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AppImages from '../../../assets/images/AppImages';
import {useCustomNavigation} from '../../../utils/Hooks';

const ProfileFinalization = () => {
  const {navigateToRoute} = useCustomNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigateToRoute('AboutYourDay');
    }, 1500);
  }, [navigateToRoute]);

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress />
      <LineBreak space={5} />
      <AppText
        title={'setting up your personalized page'}
        textColor={AppColors.BLACK}
        textFontWeight
        textSize={2.8}
        lineHeight={3.5}
        textwidth={80}
        textAlignment={'center'}
        textTransform={'uppercase'}
      />
      <LineBreak space={1.5} />
      <AppText
        title={'Almost Ready'}
        textColor={AppColors.GRAY}
        textSize={2}
        textwidth={70}
        textAlignment={'center'}
      />

      <LineBreak space={10} />

      <View>
        <Image source={AppImages.percent} style={{alignSelf: 'center'}} />
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <AppText
          title={'We are customizing MIND MONKEY just for you.'}
          textColor={AppColors.GRAY}
          textSize={1.5}
          textAlignment={'center'}
        />
      </View>
      <LineBreak space={4} />
    </View>
  );
};

export default ProfileFinalization;
