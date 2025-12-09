/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppTextInput from '../../../components/AppTextInput';
import AppImages from '../../../assets/images/AppImages';
import AppButton from '../../../components/AppButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useCustomNavigation} from '../../../utils/Hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Sound from 'react-native-nitro-sound';

const MoreDetails = ({route}) => {
  const {navigateToRoute, goBack} = useCustomNavigation();
  const [note, setNote] = useState('');
  const [images, setImages] = useState([]);
  const [voiceMemo, setVoiceMemo] = useState(null);
  // const recorder = useRef(new AudioRecorderPlayer()).current;
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00');

  console.log('activityIds ===>', recordSecs);

  const onSelectImage = async (pickerType, type, imageToRemove) => {
    if (type === 'remove') {
      setImages(prevImages => prevImages.filter(img => img !== imageToRemove));
      return;
    }

    // COMMON OPTIONS
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: false,
    };

    let result;

    if (pickerType === 'camera') {
      result = await launchCamera(options);
    }

    if (pickerType === 'gallery') {
      result = await launchImageLibrary(options);
    }

    if (result?.didCancel) {
      console.log('User cancelled');
      return;
    }

    if (result?.assets?.[0]?.uri) {
      setImages(prev => [...prev, result.assets[0].uri]);
    }
  };

  const onStartRecord = async () => {
    
    Sound.addRecordBackListener(e => {
      setRecordSecs(e.currentPosition);
      setRecordTime(Sound.mmssss(Math.floor(e.currentPosition)));
    });
    await Sound.startRecorder();
  };

  const onStopRecord = async () => {
    console.log('Stop Recording');
    const result = await Sound.stopRecorder();
    console.log('result',result)
    Sound.removeRecordBackListener();

    setVoiceMemo(result);
    setRecordSecs(0);
    setRecordTime('00:00');
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <LineBreak space={2} />

      <TouchableOpacity
        onPress={() => goBack()}
        style={{paddingHorizontal: responsiveWidth(5)}}>
        <Ionicons
          name={'close-outline'}
          size={responsiveFontSize(3)}
          color={AppColors.BLACK}
        />
      </TouchableOpacity>

      <AppText
        title={'And More Details'}
        textColor={AppColors.BLACK}
        textSize={3}
        textFontWeight
        textAlignment={'center'}
      />

      <LineBreak space={4} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <View>
          <AppText
            title={'Quick Note'}
            textColor={AppColors.GRAY}
            textSize={2}
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={''}
            textAlignVertical={'top'}
            lineHeight={5}
            value={note}
            onChangeText={text => setNote(text)}
            multiline={true}
            inputHeight={10}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'Voice Memo'}
            textColor={AppColors.GRAY}
            textSize={2}
          />
          <LineBreak space={2} />
          <Image source={AppImages.voice} />
          <LineBreak space={1} />
          <AppButton
             title={recordSecs > 0 ? recordTime : 'Tap To Record'}
            onPressIn={onStartRecord}
            onPressOut={onStopRecord}
            leftIcon={
              <View style={{paddingHorizontal: responsiveWidth(2)}}>
                <MaterialIcons
                  name={'mic-none'}
                  size={responsiveFontSize(3)}
                  color={AppColors.PRIMARY}
                />
              </View>
            }
            textSize={1.8}
            btnBackgroundColor={AppColors.inputBg}
            textColor={AppColors.GRAY}
            textFontWeight={false}
            btnPadding={15}
            btnWidth={91}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText title={'Photo'} textColor={AppColors.GRAY} textSize={2} />
          <LineBreak space={2} />
          <View style={{flexDirection: 'row', gap: 10}}>
            {images.length > 0 &&
              images.map(item => {
                return (
                  <View>
                    <Image
                      source={{uri: item}}
                      borderRadius={10}
                      resizeMode="cover"
                      style={{
                        height: responsiveHeight(10),
                        width: responsiveHeight(10),
                      }}
                    />
                    <TouchableOpacity
                      onPress={() => onSelectImage(null, 'remove', item)}
                      style={{
                        position: 'absolute',
                        backgroundColor: AppColors.RED_COLOR,
                        height: responsiveHeight(3),
                        width: responsiveHeight(3),
                        right: 0,
                        top: -3,
                        borderRadius: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={{
                          height: responsiveHeight(2),
                          width: responsiveHeight(2),
                        }}
                        source={AppImages.cross}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>

          {/* <Image
            source={AppImages.frame}
            style={{width: responsiveWidth(80), height: responsiveHeight(15)}}
            resizeMode="contain"
          /> */}
          <LineBreak space={1} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AppButton
              title={'camera'}
              handlePress={() => onSelectImage('camera')}
              textSize={1.8}
              btnBackgroundColor={AppColors.inputBg}
              textColor={AppColors.GRAY}
              textFontWeight={false}
              btnPadding={15}
              btnWidth={42}
            />
            <AppButton
              title={'gallery'}
              handlePress={() => onSelectImage('gallery')}
              textSize={1.8}
              btnBackgroundColor={AppColors.inputBg}
              textColor={AppColors.GRAY}
              textFontWeight={false}
              btnPadding={15}
              btnWidth={42}
            />
          </View>
          <LineBreak space={2} />
          <View>
            <AppButton
              title={'save'}
              handlePress={() => navigateToRoute('ShareMood')}
              textSize={1.8}
              btnBackgroundColor={AppColors.PRIMARY}
              btnPadding={18}
              btnWidth={90}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MoreDetails;
