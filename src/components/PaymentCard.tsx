/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import SVGXml from './SVGXML';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type Props = {
  item?: any;
  isSelected?: any;
  onPress?: any;
  upgradePlan?: any;
};

const PaymentCard = ({item, isSelected, onPress, upgradePlan}: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: isSelected ? 'transparent' : AppColors.WHITE,
        borderWidth: isSelected || upgradePlan ? 4 : 0,
        borderColor: AppColors.PRIMARY,
        paddingHorizontal: responsiveWidth(5),
        marginVertical: responsiveHeight(1),
        paddingVertical: responsiveHeight(2),
        borderRadius: 10,
      }}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
          }}>
          <SVGXml icon={item.icon} width={35} height={35} />
          <View>
            <AppText
              title={item.title}
              textColor={AppColors.BLACK}
              textSize={2}
              textFontWeight
            />
            <LineBreak space={0.2} />
            <AppText
              title={item.subTitle}
              textColor={AppColors.DARKGRAY}
              textSize={1.4}
            />
          </View>
        </View>
        {isSelected ? (
          <FontAwesome6
            name={'check'}
            size={responsiveFontSize(3)}
            color={AppColors.PRIMARY}
          />
        ) : null}
        {upgradePlan ? (
          <View>
            <AppText
              title={'Change'}
              textColor={AppColors.PRIMARY}
              textSize={2}
            />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;
