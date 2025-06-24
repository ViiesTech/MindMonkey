/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import {useCustomNavigation} from '../../../utils/Hooks';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppButton from '../../../components/AppButton';

const data = [
  {
    id: 1,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 2,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 3,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 4,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 5,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 6,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 7,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 8,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 9,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 10,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 11,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
  {
    id: 12,
    title: 'emotions',
    subTitle: 'Happy , Sad , Anxious , Excited...........',
  },
];

const YourRecord = () => {
  const {goBack, navigateToRoute} = useCustomNavigation();

  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = id => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={6}
        totalSteps={8}
        onBackPress={() => goBack()}
      />
      <LineBreak space={5} />
      <AppText
        title={'what do you want to record?'}
        textColor={AppColors.BLACK}
        textFontWeight
        textSize={2.8}
        lineHeight={3}
        textwidth={70}
        textAlignment={'center'}
        textTransform={'uppercase'}
      />
      <LineBreak space={0.5} />
      <AppText
        title={
          'Track activities that matter to you. Choose the types of activities you want to log'
        }
        textColor={AppColors.GRAY}
        textSize={1.5}
        lineHeight={2.5}
        textwidth={70}
        textAlignment={'center'}
      />

      <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(6)}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={<LineBreak space={2} />}
          ListHeaderComponent={<LineBreak space={2} />}
          ListFooterComponent={<LineBreak space={2} />}
          renderItem={({item}) => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <TouchableOpacity
                onPress={() => toggleSelect(item.id)}
                style={{
                  borderWidth: 4,
                  borderColor: isSelected
                    ? AppColors.PRIMARY
                    : AppColors.LIGHTGRAY,
                  paddingVertical: responsiveHeight(1.5),
                  paddingHorizontal: responsiveWidth(4),
                  borderRadius: 7,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <AppText
                      title={item.title}
                      textColor={AppColors.BLACK}
                      textSize={1.5}
                      textTransform={'uppercase'}
                      textFontWeight
                    />
                    <LineBreak space={0.5} />
                    <AppText
                      title={item.subTitle}
                      textColor={AppColors.GRAY}
                      textSize={1.5}
                      numberOfLines={1}
                    />
                  </View>
                  {isSelected && (
                    <Feather
                      name={'check'}
                      size={responsiveFontSize(3)}
                      color={AppColors.PRIMARY}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View>
          <AppButton
            title={'Continue'}
            handlePress={() => navigateToRoute('DailyReminder')}
            textSize={1.8}
            btnBackgroundColor={AppColors.PRIMARY}
            btnPadding={18}
            btnWidth={90}
          />
        </View>
        <LineBreak space={2} />
      </ScrollView>
    </View>
  );
};

export default YourRecord;
