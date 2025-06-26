/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppTextInput from '../../../components/AppTextInput';
import AppImages from '../../../assets/images/AppImages';
import AppButton from '../../../components/AppButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useCustomNavigation} from '../../../utils/Hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MoreDetails = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <LineBreak space={2} />

      <TouchableOpacity
        onPress={() => goBack()}
        style={{paddingHorizontal: responsiveWidth(5)}}>
        <Ionicons
          name={'close-outline'}
          size={responsiveFontSize(3)}
          color={AppColors.BLACK}
        />
      </TouchableOpacity>

      <AppText
        title={'And More Details'}
        textColor={AppColors.BLACK}
        textSize={3}
        textFontWeight
        textAlignment={'center'}
      />

      <LineBreak space={4} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <View>
          <AppText
            title={'Quick Note'}
            textColor={AppColors.GRAY}
            textSize={2}
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={''}
            textAlignVertical={'top'}
            lineHeight={5}
            multiline={true}
            inputHeight={10}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'Voice Memo'}
            textColor={AppColors.GRAY}
            textSize={2}
          />
          <LineBreak space={2} />
          <Image source={AppImages.voice} />
          <LineBreak space={1} />
          <AppButton
            title={'Tap To Record'}
            handlePress={() => {}}
            leftIcon={
              <View style={{paddingHorizontal: responsiveWidth(2)}}>
                <MaterialIcons
                  name={'mic-none'}
                  size={responsiveFontSize(3)}
                  color={AppColors.PRIMARY}
                />
              </View>
            }
            textSize={1.8}
            btnBackgroundColor={AppColors.inputBg}
            textColor={AppColors.GRAY}
            textFontWeight={false}
            btnPadding={15}
            btnWidth={91}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText title={'Photo'} textColor={AppColors.GRAY} textSize={2} />
          <Image
            source={AppImages.frame}
            style={{width: responsiveWidth(80), height: responsiveHeight(15)}}
            resizeMode="contain"
          />
          <LineBreak space={1} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AppButton
              title={'camera'}
              handlePress={() => {}}
              textSize={1.8}
              btnBackgroundColor={AppColors.inputBg}
              textColor={AppColors.GRAY}
              textFontWeight={false}
              btnPadding={15}
              btnWidth={42}
            />
            <AppButton
              title={'gallery'}
              handlePress={() => {}}
              textSize={1.8}
              btnBackgroundColor={AppColors.inputBg}
              textColor={AppColors.GRAY}
              textFontWeight={false}
              btnPadding={15}
              btnWidth={42}
            />
          </View>
          <LineBreak space={2} />
          <View>
            <AppButton
              title={'save'}
              handlePress={() => navigateToRoute('ShareMood')}
              textSize={1.8}
              btnBackgroundColor={AppColors.PRIMARY}
              btnPadding={18}
              btnWidth={90}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MoreDetails;
