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

const Feel = () => {
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
      <AppText
        title={'how do you feel today?'}
        textColor={AppColors.BLACK}
        textFontWeight
        textSize={2.8}
        lineHeight={3.5}
        textAlignment={'center'}
        textTransform={'uppercase'}
      />

      <LineBreak space={4} />

      <View style={{alignItems: 'center'}}>
        {/* <SVGXml icon={AppIcons.angry} width={20} height={20} /> */}
        <View
          style={{
            width: 140,
            height: 140,
            borderRadius: 100,
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={AppImages.bad}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              overflow: 'hidden',
            }}
          />
        </View>
        {/* <HalfDonutMeter /> */}
      </View>
    </View>
  );
};

export default Feel;
