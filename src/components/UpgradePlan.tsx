/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import LineBreak from './LineBreak';
import AppText from './AppTextComps/AppText';

type Props = {
  data: any;
  title?: string;
  priceTag?: string;
  text?: string;
  selectedTab?: boolean;
};

const UpgradePlanCard = ({data, title, priceTag, text, selectedTab}: Props) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.WHITE,
        borderRadius: 10,
        paddingBottom: responsiveHeight(2),
      }}>
      {selectedTab && (
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              backgroundColor: AppColors.BTNCOLOURS,
              width: responsiveWidth(20),
              height: responsiveHeight(3),
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 12,
            }}>
            <AppText
              title={'save 17%'}
              textColor={AppColors.WHITE}
              textSize={1.3}
            />
          </View>
        </View>
      )}
      {title && <LineBreak space={2} />}
      {title && (
        <AppText
          title={title}
          textColor={AppColors.BLACK}
          textSize={2}
          textAlignment={'center'}
          textFontWeight
        />
      )}

      {title && <LineBreak space={2} />}

      {priceTag && text ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: responsiveHeight(5),
            gap: 5,
          }}>
          <AppText
            title={priceTag}
            textColor={AppColors.BLACK}
            textSize={4}
            textAlignment={'center'}
            textFontWeight
          />
          <AppText
            title={text}
            textColor={AppColors.BLACK}
            textSize={1.5}
            textFontWeight
          />
        </View>
      ) : null}

      {priceTag && <LineBreak space={2.5} />}

      <FlatList
        data={data}
        contentContainerStyle={{paddingHorizontal: responsiveWidth(6)}}
        ItemSeparatorComponent={<LineBreak space={2} />}
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
              {item.icon}
              <AppText
                title={item.title}
                textColor={AppColors.GRAY}
                textSize={1.8}
                textwidth={60}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default UpgradePlanCard;
