/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import LineBreak from './LineBreak';

const data = [
  {id: 1, title: 'Weekly'},
  {id: 2, title: 'Monthly'},
  {id: 3, title: 'Yearly'},
  {id: 4, title: 'Lifetime'},
];

type Props = {
  title: string;
  imageSrc: any;
  isShowRightContent?: boolean;
  hideTabs?: boolean;
  showText?: boolean;
};

const InsightsChartBg = ({
  title,
  isShowRightContent = false,
  hideTabs = true,
  showText = false,
  imageSrc,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState({id: 1});
  return (
    <View
      style={{
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppText
          title={title}
          textColor={AppColors.BLACK}
          textSize={2.5}
          textFontWeight
          textTransform={'uppercase'}
        />

        {isShowRightContent && (
          <View
            style={{
              backgroundColor: AppColors.LIGHTGRAY,
              width: responsiveWidth(45),
              height: responsiveHeight(5),
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: AppColors.PRIMARY,
                width: responsiveWidth(15),
                height: responsiveHeight(5),
                borderRadius: 10,
              }}
            />
          </View>
        )}
      </View>

      <LineBreak space={2} />

      {hideTabs && (
        <FlatList
          data={data}
          contentContainerStyle={{
            flex: 1,
            backgroundColor: AppColors.LIGHTGRAY,
            justifyContent: 'space-between',
            width: responsiveWidth(20),
            height: responsiveHeight(7),
            borderRadius: 10,
          }}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedTab.id == item.id
                      ? AppColors.PRIMARY
                      : AppColors.LIGHTGRAY,
                  width: responsiveWidth(20),
                  justifyContent: 'center',
                  borderRadius: 10,
                }}
                onPress={() => setSelectedTab({id: item.id})}>
                <AppText
                  title={item.title}
                  textColor={
                    selectedTab.id == item.id ? AppColors.WHITE : AppColors.GRAY
                  }
                  textSize={1.7}
                  textAlignment={'center'}
                />
              </TouchableOpacity>
            );
          }}
        />
      )}

      {hideTabs && <LineBreak space={1} />}

      <Image
        source={imageSrc}
        style={{
          width: responsiveWidth(85),
          alignSelf: 'center',
          height: responsiveHeight(40),
        }}
        resizeMode="contain"
      />

      {showText && <LineBreak space={4} />}

      {showText && (
        <AppText
          title={'The higher the score, the more stable you are.'}
          textColor={AppColors.GRAY}
          textSize={1.7}
          textAlignment={'center'}
        />
      )}
    </View>
  );
};

export default InsightsChartBg;
