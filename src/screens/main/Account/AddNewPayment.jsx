/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
import {responsiveWidth} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AppColors from '../../../utils/AppColors';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';
import {useCustomNavigation} from '../../../utils/Hooks';

const AddNewPayment = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <AppMainHeader heading="Add New Payment" />
      <LineBreak space={5} />
      <View>
        <View>
          <AppText
            title={'card number'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'23560 6678 6789 5431'}
            inputContainerPaddingHorizontal={2}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'account holder name'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'ANDREW AINSLEY'}
            inputContainerPaddingHorizontal={2}
          />
        </View>
        <LineBreak space={2} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <AppText
              title={'Expiry date'}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textTransform={'uppercase'}
              textFontWeight
            />
            <LineBreak space={0.5} />
            <AppTextInput
              inputPlaceHolder={'08/26'}
              inputContainerPaddingHorizontal={2}
              inputWidth={35}
            />
          </View>
          <View>
            <AppText
              title={'cvv'}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textTransform={'uppercase'}
              textFontWeight
            />
            <LineBreak space={0.5} />
            <AppTextInput
              inputPlaceHolder={'345'}
              inputContainerPaddingHorizontal={2}
              inputWidth={35}
            />
          </View>
        </View>
        <LineBreak space={2} />
        <AppButton
          title={'save'}
          handlePress={() => navigateToRoute('Main')}
          textSize={1.8}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewPayment;
