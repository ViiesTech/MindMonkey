import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import {ShowToast, useCustomNavigation} from '../../../utils/Hooks';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppButton from '../../../components/AppButton';
import { useLazyGetAllCategoriesQuery } from '../../../redux/service/adminApi';
import Loader from '../../../components/Loader';

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

const YourRecord = ({route}) => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [getAllCategories,{data,isLoading}] = useLazyGetAllCategoriesQuery()
  const [activities,setActivities] = useState([])

  const [selectedIds, setSelectedIds] = useState([]);

  console.log(selectedIds)

    useEffect(() => {
    if(data?.data.length > 0 ){  
      const uniqueCategories = data?.data.filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            t => t.categoryId.categoryName === item.categoryId.categoryName,
          ),
      );
      setActivities(uniqueCategories);
      }
    }, [data?.data]);
    
      useEffect(() => {
    
        getAllCategories()
    
      },[])

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
      {isLoading ?
              <Loader size={'large'} color={AppColors.PRIMARY} />
          :
          <>
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
          data={activities}
          keyExtractor={item => item._id.toString()}
          ItemSeparatorComponent={<LineBreak space={2} />}
          ListHeaderComponent={<LineBreak space={2} />}
          ListFooterComponent={<LineBreak space={2} />}
          renderItem={({item}) => {
            const isSelected = selectedIds.includes(item.categoryId._id);
            return (
              <TouchableOpacity
                onPress={() => toggleSelect(item.categoryId._id)}
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
                      title={item.categoryId.categoryName}
                      textColor={AppColors.BLACK}
                      textSize={1.5}
                      textTransform={'uppercase'}
                      textFontWeight
                    />
                    <LineBreak space={0.5} />
                    <AppText
                      title={item.subCategoryName}
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
            handlePress={() => {
              if (selectedIds.length < 1) {
                ShowToast('Please choose any activity first');
                return;
              } else {
                navigateToRoute('DailyReminder', {
                  ...route?.params,
                  activities: selectedIds,
                });
              }
            }}
            textSize={1.8}
            btnBackgroundColor={AppColors.PRIMARY}
            btnPadding={18}
            btnWidth={90}
          />
        </View>
        <LineBreak space={2} />
      </ScrollView>
      </>
      }
    </View>
  );
};

export default YourRecord;
