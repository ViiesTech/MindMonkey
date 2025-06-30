/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import AppColors from '../../../utils/AppColors';
import LineBreak from '../../../components/LineBreak';
import {useCustomNavigation} from '../../../utils/Hooks';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImages from '../../../assets/images/AppImages';
import AppText from '../../../components/AppTextComps/AppText';
import AppButton from '../../../components/AppButton';
import Feather from 'react-native-vector-icons/Feather';
import SocialShareModal from '../../../components/SocialShareModal';

const ShareAchievement = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <LineBreak space={2} />
      <SocialShareModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons
            name={'close-outline'}
            size={responsiveFontSize(3)}
            color={AppColors.BLACK}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: AppColors.LIGHTGRAY,
            width: '90%',
            paddingVertical: responsiveHeight(4),
            borderRadius: 20,
          }}>
          <AppText
            title={'I got the achievement'}
            textColor={AppColors.GRAY}
            textSize={2}
            textAlignment={'center'}
          />
          <LineBreak space={4} />
          <Image
            source={AppImages.star}
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(25),
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
          <LineBreak space={4} />
          <AppText
            title={'shining star'}
            textColor={AppColors.BLACK}
            textSize={3.5}
            textTransform={'uppercase'}
            textFontWeight
            textAlignment={'center'}
          />
          <LineBreak space={1} />
          <AppText
            title={'December, 22 ,2024'}
            textColor={AppColors.GRAY}
            textSize={2}
            textAlignment={'center'}
          />
          <LineBreak space={2} />
          <AppText
            title={'Mind Monkey'}
            textColor={AppColors.GRAY}
            textSize={2}
            textAlignment={'center'}
          />
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <AppButton
          title={'Share achievement'}
          handlePress={() => setModalVisible(true)}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={15}
          textFontWeight={false}
          leftIcon={
            <View style={{paddingHorizontal: responsiveWidth(3)}}>
              <Feather
                name={'share-2'}
                size={responsiveFontSize(2.5)}
                color={AppColors.WHITE}
              />
            </View>
          }
          borderRadius={20}
          btnWidth={90}
        />
        <LineBreak space={2} />
      </View>
    </View>
  );
};

export default ShareAchievement;
