/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import { responsiveWidth } from '../utils/Responsive_Dimensions';
import Loader from './Loader';

type props = {
  title?: any;
  handlePress?: () => void;
  textColor?: any;
  textFontWeight?: boolean;
  textSize?: any;
  btnWidth?: any;
  btnBackgroundColor?: any;
  btnPadding?: any;
  borderWidth?: any;
  borderColor?: any;
  borderRadius?: any;
  leftIcon?: any;
  activeOpacity?: any;
  indicator?: any;
};
const AppButton = ({
  title,
  handlePress,
  leftIcon,
  borderRadius,
  borderWidth,
  borderColor,
  btnPadding,
  btnBackgroundColor,
  btnWidth,
  textColor = AppColors.WHITE,
  textFontWeight = true,
  textSize = 2.5,
  activeOpacity,
  indicator
}: props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={activeOpacity}
      style={{
        backgroundColor: btnBackgroundColor
          ? btnBackgroundColor
          : AppColors.BTNCOLOURS,
        alignItems: 'center',
        justifyContent: 'center',
        padding: btnPadding ? btnPadding : 10,
        borderRadius: borderRadius ? borderRadius : 100,
        width: btnWidth ? responsiveWidth(btnWidth) : 'auto',
        borderWidth: borderWidth || 0,
        borderColor: borderColor ? borderColor : null,
        flexDirection: 'row',
      }}>
      {indicator ?
          <Loader />
        :
        <>
          {leftIcon}
          <AppText
            textColor={textColor}
            textSize={textSize}
            title={title}
            textFontWeight={textFontWeight}
          />
        </>
      }
    </TouchableOpacity>
  );
};

export default AppButton;
