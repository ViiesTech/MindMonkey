/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AppButton from '../../../components/AppButton';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';

const gender = [
  {id: 1, text: 'Male', color: AppColors.PRIMARY},
  {id: 2, text: 'FeMale', color: AppColors.BTNCOLOURS},
  {id: 3, text: 'PREFER NOT TO SAY', color: AppColors.LIGHTGRAY},
];

const YourGender = () => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={2}
        totalSteps={8}
        onBackPress={() => goBack()}
      />

      <LineBreak space={5} />
      <View style={{flex: 1, alignItems: 'center'}}>
        <AppText
          title={'what is your gender?'}
          textColor={AppColors.BLACK}
          textFontWeight
          textSize={2.5}
          textTransform={'uppercase'}
        />
        <LineBreak space={0.5} />
        <AppText
          title={'Help us tailor your experience'}
          textColor={AppColors.GRAY}
          lineHeight={3}
          textSize={1.8}
        />

        <LineBreak space={10} />

        <FlatList
          data={gender}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: responsiveWidth(6),
            gap: 20,
            alignSelf: 'center',
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: item.color,
                    width: 90,
                    height: 90,
                    borderRadius: 100,
                  }}
                />
                <LineBreak space={1} />
                <AppText
                  title={item.text}
                  textColor={AppColors.GRAY}
                  textSize={1.5}
                  textAlignment={'center'}
                  textTransform={'uppercase'}
                  textwidth={20}
                />
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: AppColors.GRAY,
            width: responsiveWidth(45),
            height: responsiveHeight(6),
            borderRadius: 100,
            backgroundColor: AppColors.LIGHTGRAY,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText
            title={'Ensure Inclusivity'}
            textColor={AppColors.GRAY}
            textSize={1.8}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{flex: 0.7, justifyContent: 'flex-end', alignItems: 'center'}}>
        <AppButton
          title={'Continue'}
          handlePress={() => navigateToRoute('YourAge')}
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

export default YourGender;
