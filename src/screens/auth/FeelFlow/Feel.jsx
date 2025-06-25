/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import LineBreak from '../../../components/LineBreak';
import SVGXml from '../../../components/SVGXML';
import AppIcons from '../../../assets/icons/AppIcons';
import AppImages from '../../../assets/images/AppImages';
import SatisfactionMeter from '../../../components/SatisfactionMeter';
import HalfDonutMeter from '../../../components/SatisfactionMeter';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppButton from '../../../components/AppButton';
import {useCustomNavigation} from '../../../utils/Hooks';

const Feel = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <LineBreak space={4} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          alignItems: 'center',
        }}>
        <AppText
          title={'Today, Dec 22'}
          textColor={AppColors.GRAY}
          textSize={1.6}
          textAlignment={'center'}
        />
        <AppText
          title={'09:41'}
          textColor={AppColors.GRAY}
          textSize={1.6}
          textAlignment={'center'}
        />
      </View>
      <LineBreak space={4} />

      <View style={{alignItems: 'center'}}>
        <Image
          source={AppImages.feel}
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(70),
            borderRadius: 100,
          }}
          resizeMode="contain"
        />

        <View>
          <AppButton
            title={'I feel bad'}
            handlePress={() => navigateToRoute('MoreDetails')}
            textSize={1.8}
            btnBackgroundColor={AppColors.PRIMARY}
            btnPadding={18}
            btnWidth={90}
          />
        </View>
      </View>
    </View>
  );
};

export default Feel;
