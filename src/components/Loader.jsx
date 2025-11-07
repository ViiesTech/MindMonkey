import {ActivityIndicator} from 'react-native';
import React from 'react';
import AppColors from '../utils/AppColors';

const Loader = ({color = AppColors.WHITE, size = 'large', style}) => {
  return (
    <ActivityIndicator
      color={color}
      size={size}
      style={[{alignSelf: 'center'}, style]}
    />
  );
};

export default Loader;
