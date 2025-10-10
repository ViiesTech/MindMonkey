import React from 'react';
import CustomToast, {BaseToast} from 'react-native-toast-message';
import AppColors from '../utils/AppColors';
import {responsiveFontSize} from '../utils/Responsive_Dimensions';

const ToastMessage = ({position}) => {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: AppColors.PRIMARY, borderLeftWidth: 7}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: AppColors.WHITE,
        }}
        text1Style={{
          fontSize: responsiveFontSize(2),
          color: AppColors.PRIMARY,
          fontWeight: '400',
        }}
      />
    ),
  };

  return (
    <CustomToast
      config={toastConfig}
      position={position}
      visibilityTime={3000}
    />
  );
};

export default ToastMessage;
