/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AboutYourDayComp from '../../../components/AboutYourDayComp';
import AppButton from '../../../components/AppButton';
import {useLazyGetAllCategoriesQuery} from '../../../redux/service/adminApi';
import Loader from '../../../components/Loader';

// const titles = [
//   {id: 1, title: 'Emotions'},
//   {id: 2, title: 'Work'},
//   {id: 3, title: 'School'},
//   {id: 4, title: 'Health'},
//   {id: 5, title: 'Sleep'},
//   {id: 6, title: 'Food'},
//   {id: 7, title: 'Hobbies'},
//   {id: 8, title: 'Social'},
//   {id: 9, title: 'Self Improvement'},
//   {id: 10, title: 'Productive/Creative'},
//   {id: 11, title: 'Spiritual/Nature'},
// ];

const AboutYourDay = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();
  const [getAllCategories, {data: categoriesData, isLoading}] =
    useLazyGetAllCategoriesQuery();
  const [selectedItems, setSelectedItems] = useState([]);

  console.log(selectedItems)

  // console.log('categories ===>', categoriesData);
  useEffect(() => {
    getAllCategories();
  }, []);

  const uniqueCategories =
    categoriesData?.data?.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          x => x?.categoryId?.categoryName === item?.categoryId?.categoryName,
        ),
    ) || [];

  const selectSubCategory = itemId => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId],
    );
  };

  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <LineBreak space={2} />
      {isLoading ? (
        <Loader color={AppColors.PRIMARY} />
      ) : categoriesData?.data?.length < 1 ? (
        <AppText
          textAlignment={'center'}
          textColor={AppColors.PRIMARY}
          title={'No Categories Found'}
        />
      ) : (
        <>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons
              name={'close-outline'}
              size={responsiveFontSize(3)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
          <LineBreak space={2} />
          <AppText
            title={'Tell Us About Your Day'}
            textColor={AppColors.BLACK}
            textSize={3}
            textFontWeight
            textwidth={100}
            textTransform={'uppercase'}
            textAlignment={'center'}
          />
          <LineBreak space={3} />
          <View>
            <FlatList
              data={uniqueCategories}
              ItemSeparatorComponent={<LineBreak space={2} />}
              ListFooterComponent={<LineBreak space={2} />}
              renderItem={({item}) => {
                const subCategories = categoriesData?.data?.filter(
                  sub =>
                    sub.categoryId?.categoryName ===
                    item.categoryId?.categoryName,
                );
                // console.log('sub',subCategories)
                return (
                  <AboutYourDayComp
                    data={subCategories}
                    toggleSelect={(id) => selectSubCategory(id)}
                    selectedItems={selectedItems}
                    title={item?.categoryId?.categoryName}
                  />
                );
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <AppButton
              title={'Continue'}
              handlePress={() => {
                navigateToRoute('MoreDetails',{activityId: selectedItems});
              }}
              textSize={1.8}
              btnBackgroundColor={AppColors.PRIMARY}
              btnPadding={18}
              btnWidth={90}
            />
            <LineBreak space={2} />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default AboutYourDay;
