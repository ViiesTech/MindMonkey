/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {responsiveFontSize} from '../utils/Responsive_Dimensions';

type Props = {
  title?: string;
  time?: string;
  containerOnPress?: any;
};

const ExportDataMenu = ({title, time, containerOnPress}: Props) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', justifyContent: 'space-between'}}
      onPress={containerOnPress}>
      <AppText
        title={title}
        textColor={AppColors.BLACK}
        textSize={1.7}
        textFontWeight
      />

      <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
        {time && (
          <AppText title={time} textColor={AppColors.BLACK} textSize={1.7} />
        )}
        <SimpleLineIcons
          name={'arrow-right'}
          size={responsiveFontSize(1.7)}
          color={AppColors.BLACK}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ExportDataMenu;
