/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from './AppTextComps/AppText';
import {useCustomNavigation} from '../utils/Hooks';

type Props = {
  heading?: string;
  rightIcon?: any;
  textTransform?: any;
};

const AppMainHeader = ({heading, rightIcon, textTransform}: Props) => {
  const {goBack} = useCustomNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2),
        height: responsiveHeight(3),
      }}>
      <TouchableOpacity onPress={() => goBack()}>
        <Ionicons
          name={'arrow-back'}
          size={responsiveFontSize(3)}
          color={AppColors.BLACK}
        />
      </TouchableOpacity>
      <AppText
        title={heading}
        textColor={AppColors.BLACK}
        textTransform={textTransform ? textTransform : 'uppercase'}
        textSize={2}
        textFontWeight
      />
      {rightIcon ? rightIcon : <View />}
    </View>
  );
};

export default AppMainHeader;
