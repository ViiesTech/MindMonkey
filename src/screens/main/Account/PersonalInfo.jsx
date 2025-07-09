/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import AppImages from '../../../assets/images/AppImages';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppTextInput from '../../../components/AppTextInput';
import AppText from '../../../components/AppTextComps/AppText';

const PersonalInfo = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <AppMainHeader heading="personal info" />
      <LineBreak space={3} />
      <View style={{alignItems: 'center'}}>
        <Image
          source={AppImages.profile}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <LineBreak space={2} />

        <TouchableOpacity>
          <FontAwesome5
            name={'edit'}
            size={responsiveFontSize(2)}
            color={AppColors.BLACK}
          />
        </TouchableOpacity>
      </View>
      <LineBreak space={2} />
      <View>
        <View>
          <AppText
            title={'full name'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Andrew Ainsley'}
            inputContainerPaddingHorizontal={2}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'email'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'andrew.ainsley@yourdomain.com'}
            inputContainerPaddingHorizontal={2}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'phone number'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'+1 111 467 378 899'}
            inputContainerPaddingHorizontal={2}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'gender'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Male'}
            inputContainerPaddingHorizontal={2}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'date of birth'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'04/12/2000'}
            inputContainerPaddingHorizontal={2}
          />
        </View>
        <LineBreak space={2} />
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;
