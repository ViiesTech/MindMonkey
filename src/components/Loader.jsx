import {ActivityIndicator} from 'react-native';
import React from 'react';
import AppColors from '../utils/AppColors';

const Loader = ({color, size, style}) => {
  return (
    <ActivityIndicator
      color={AppColors.WHITE || color}
      size={'large' || size}
      style={[{alignSelf: 'center'}, style]}
    />
  );
};

export default Loader;
