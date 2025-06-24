/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import CustomHeaderProgress from '../../../components/CustomLinearProgressBar';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AppButton from '../../../components/AppButton';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppIcons from '../../../assets/icons/AppIcons';
import SVGXml from '../../../components/SVGXML';

const data = [
  {
    id: 1,
    title: 'social media',
    iconType: AppIcons.social_media,
  },
  {
    id: 2,
    title: 'youtube',
    iconType: AppIcons.youtube,
  },
  {
    id: 3,
    title: 'google',
    iconType: AppIcons.google,
  },
  {
    id: 4,
    title: 'app store',
    iconType: AppIcons.app_store,
  },
  {
    id: 5,
    title: 'family / friends',
    iconType: AppIcons.family,
  },
];

const YourSocialRecord = () => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [selectedIds, setSelectedIds] = useState({id: 0});

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <CustomHeaderProgress
        currentStep={8}
        totalSteps={8}
        onBackPress={() => goBack()}
      />
      <LineBreak space={5} />
      <AppText
        title={'Lastly, how did you hear about mind monkey'}
        textColor={AppColors.BLACK}
        textFontWeight
        textSize={2.8}
        lineHeight={3.5}
        textwidth={80}
        textAlignment={'center'}
        textTransform={'uppercase'}
      />
      <LineBreak space={0.5} />
      <AppText
        title={'We’d love to know how u found us.'}
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
            return (
              <TouchableOpacity
                onPress={() => setSelectedIds({id: item.id})}
                style={{
                  borderWidth: 4,
                  borderColor:
                    selectedIds.id == item.id
                      ? AppColors.PRIMARY
                      : AppColors.LIGHTGRAY,
                  paddingVertical: responsiveHeight(2.5),
                  paddingHorizontal: responsiveWidth(4),
                  borderRadius: 7,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 20,
                    alignItems: 'center',
                  }}>
                  <SVGXml icon={item.iconType} width={30} height={30} />
                  <AppText
                    title={item.title}
                    textColor={AppColors.BLACK}
                    textSize={2}
                    textTransform={'uppercase'}
                    textFontWeight
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View>
          <AppButton
            title={'Finish'}
            handlePress={() => navigateToRoute('ProfileFinalization')}
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

export default YourSocialRecord;
