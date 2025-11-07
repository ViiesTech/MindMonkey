/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {ShowToast, useCustomNavigation} from '../../../utils/Hooks';
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
import { useSelector } from 'react-redux';
import { useCreateUpdateProfileMutation } from '../../../redux/service';

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

const YourSocialRecord = ({route}) => {
  const {goBack, navigateToRoute} = useCustomNavigation();
  const [selectedIds, setSelectedIds] = useState({id: 0});
  const [createUpdateProfile,{isLoading}] = useCreateUpdateProfileMutation()
  const {_id} = useSelector(state => state.persistedData.user)

  // console.log(_id)

  const onUpdateUser = async () => {
    if(!selectedIds?.title) {
      ShowToast('Please select any option')
      return
    }
    let data = new FormData()
    data.append('id',_id)
    data.append('gender',route?.params?.gender)
    data.append('emojiTheme',route?.params?.selectedTheme?.id)
    data.append('emojiColor',route?.params?.selectedColorPalette)
    data.append('hearFrom',selectedIds?.title)
    data.append('reminderTime',route?.params?.dailyReminder)
    data.append('activities',JSON.stringify(route?.params?.activities))
    data.append('age',route?.params?.ageYears)
    data.append('fullName',route?.params?.name)

    await createUpdateProfile(data).unwrap().then((res) => {
      console.log('response of creation profile ===>',res)
      ShowToast(res.message)
      if(res.success) {
        navigateToRoute('ProfileFinalization')
      }
    }).catch((error) => {
      console.log('error creating of profile ===>',error)
      ShowToast('Some problem occured')
    })

  }
 
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
                onPress={() => setSelectedIds({id: item.id,title: item.title})}
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
            handlePress={() => onUpdateUser()}
            textSize={1.8}
            btnBackgroundColor={AppColors.PRIMARY}
            btnPadding={18}
            indicator={isLoading}
            btnWidth={90}
          />
        </View>
        <LineBreak space={2} />
      </ScrollView>
    </View>
  );
};

export default YourSocialRecord;
