/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';

type props = {
  logo?: any;
  inputPlaceHolder?: any;
  inputBgColour?: any;
  inputWidth?: number;
  containerBg?: any;
  rightIcon?: any;
  secureTextEntry?: any;
  placeholderTextColor?: any;
  inputHeight?: any;
  textAlignVertical?: any;
  placeholderTextfontWeight?: any;
  multiline?: any;
  value?: any;
  onChangeText?: any;
  onFocus?: any;
  borderWidth?: any;
  borderColor?: any;
  onBlur?: any;
  isFocused?: any;
  fontSize?:any;
  inputTextAlignVertical?:any;
  inputTextAlign?:any;
};
const AppTextInput = ({
  logo,
  secureTextEntry,
  inputPlaceHolder,
  inputWidth = 68,
  containerBg,
  rightIcon,
  placeholderTextColor,
  inputHeight,
  textAlignVertical,
  placeholderTextfontWeight,
  multiline,
  value,
  onChangeText,
  onFocus,
  onBlur,
  borderWidth,
  borderColor,
  isFocused,
  fontSize,
  inputTextAlignVertical,
  inputTextAlign,
}: props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: containerBg
          ? containerBg
          : isFocused
          ? AppColors.inputBlur
          : AppColors.inputBg,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 12,
        alignItems: 'center',
        gap: 10,
        borderWidth: isFocused ? 1 : borderWidth || 1,
        borderColor: isFocused
          ? AppColors.BTNCOLOURS
          : borderColor || AppColors.WHITE,
      }}>
      {logo}

      <TextInput
        placeholder={inputPlaceHolder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : AppColors.GRAY
        }
        style={{
          fontSize: responsiveFontSize(fontSize),
          width: responsiveWidth(inputWidth),
          color: AppColors.BLACK,
          height: inputHeight ? responsiveHeight(inputHeight) : null,
          fontWeight: placeholderTextfontWeight
            ? placeholderTextfontWeight
            : null,
            textAlignVertical: inputTextAlignVertical,
            textAlign: inputTextAlign,
        }}
        secureTextEntry={secureTextEntry}
        textAlignVertical={textAlignVertical}
        multiline={multiline}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {rightIcon}
    </View>
  );
};

export default AppTextInput;
