/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppText from '../../../components/AppTextComps/AppText';

const groupedData = [
  {
    title: 'December, 2024',
    items: Array.from({length: 20}, (_, i) => ({
      id: `dec-${i + 1}`,
      bg: AppColors.LIGHTGRAY,
    })),
  },
  {
    title: 'November, 2024',
    items: Array.from({length: 8}, (_, i) => ({
      id: `nov-${i + 1}`,
      bg: AppColors.LIGHTGRAY,
    })),
  },
  {
    title: 'July, 2024',
    items: Array.from({length: 12}, (_, i) => ({
      id: `nov-${i + 1}`,
      bg: AppColors.LIGHTGRAY,
    })),
  },
];

const PhotoGallery = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <AppMainHeader heading="Photo Gallery" />
      <LineBreak space={3} />

      {groupedData.map(section => (
        <View key={section.title} style={{marginBottom: responsiveHeight(2)}}>
          <View
            style={{
              paddingVertical: responsiveHeight(1),
              paddingHorizontal: responsiveWidth(1),
            }}>
            <AppText
              title={section.title}
              textColor={AppColors.BLACK}
              textSize={2}
            />
          </View>
          <View style={styles.grid}>
            {section.items.map(item => (
              <TouchableOpacity
                key={item.id}
                style={[styles.box, {backgroundColor: item.bg}]}
              />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  box: {
    width: 76.5,
    height: 76.5,
    borderRadius: 5,
    marginHorizontal: responsiveWidth(1),
  },
});

export default PhotoGallery;
