import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import AppImages from '../../../assets/images/AppImages';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppTextInput from '../../../components/AppTextInput';
import AppText from '../../../components/AppTextComps/AppText';
import {IMAGE_URL} from '../../../redux/constant';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {launchImageLibrary} from 'react-native-image-picker';
import {useCreateUpdateProfileMutation} from '../../../redux/service';
import {ShowToast} from '../../../utils/Hooks';
import AppButton from '../../../components/AppButton';

const PersonalInfo = ({route}) => {
  const {profileData} = route?.params;
  const [state, setState] = useState({
    image: profileData?.image
      ? `${IMAGE_URL}${profileData?.image}`
      : '',
    name: profileData?.fullName || '',
    email: profileData?.email,
    phone: profileData?.phoneNumber || '',
    gender: profileData?.gender || '',
 dob: profileData?.dob
  ? moment(profileData?.dob, ['DD-MM-YYYY', 'YYYY-MM-DD']).toDate()
  : new Date(),
  });
  const [open, setOpen] = useState(false);
  const [createUpdateProfile, {isLoading}] = useCreateUpdateProfileMutation();
  const typingTimeoutRef = useRef(null);

  console.log(profileData);

  // useEffect(() => {
  //   if (!profileData) return;

  //   if (typingTimeoutRef.current) {
  //     clearTimeout(typingTimeoutRef.current);
  //   }

  //   typingTimeoutRef.current = setTimeout(() => {
  //     onEditProfile();
  //   }, 1000);

  //   return () => clearTimeout(typingTimeoutRef.current);
  // }, [state]);

  const onChangeText = (state, value) => {
    setState(prevState => ({
      ...prevState,
      [state]: value,
    }));
  };

  const onSelectImage = async () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        quality: 0.5,
      },
    };

    await launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('cancelled', response.didCancel);
      } else {
        setState(prevState => ({
          ...prevState,
          image: response.assets[0].uri,
        }));
      }
    });
  };

  const onEditProfile = async () => {
    let data = new FormData();
    data.append('id', profileData?._id);
    if (state.image) {
      data.append('image', {
        uri:
          Platform.OS === 'android'
            ? state.image
            : state.image.replace('file://', ''),
        type: 'image/jpeg',
        name: 'profile.jpg',
      });
    }
    data.append('fullName', state.name);
    data.append('phoneNumber', state.phone);
    data.append('gender', state.gender);
    data.append('dob', moment(state.dob).format('DD-MM-YYYY'));

    try {
      const res = await createUpdateProfile(data).unwrap();
      console.log('Profile updated:', res);
      ShowToast(res.message);
    } catch (error) {
      console.log('Update failed:', error);
    }
  };

  console.log(moment(state.dob).format('DD-MM-YYYY'))

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <AppMainHeader heading="personal info" />
      <LineBreak space={3} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: responsiveHeight(1),
        }}>
        <Image
          source={state.image ? {uri: state.image} : AppImages.profile}
          style={{
            width: responsiveWidth(25),
            height: responsiveWidth(25),
            borderRadius: responsiveWidth(25) / 2,
          }}
        />

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: responsiveWidth(35) / 0.9 - 10,
            backgroundColor: AppColors.PRIMARY,
            borderRadius: responsiveWidth(5),
            padding: responsiveWidth(1.5),
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 4,
          }}
          onPress={onSelectImage}>
          <FontAwesome5
            name={'edit'}
            size={responsiveFontSize(1.8)}
            color={AppColors.WHITE}
          />
        </TouchableOpacity>
      </View>
      <LineBreak space={2} />
      <View>
        <View>
          <AppText
            title={'full name'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Andrew Ainsley'}
            inputContainerPaddingHorizontal={2}
            value={state.name}
            onChangeText={text => onChangeText('name', text)}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'email'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'andrew.ainsley@yourdomain.com'}
            inputContainerPaddingHorizontal={2}
            value={state.email}
            editable={false}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'phone number'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'+1 111 467 378 899'}
            inputContainerPaddingHorizontal={2}
            value={state.phone}
            keyboardType={'numeric'}
            onChangeText={text => onChangeText('phone', text)}
          />
        </View>
        <LineBreak space={2} />
        <View>
          <AppText
            title={'gender'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={'Male'}
            inputContainerPaddingHorizontal={2}
            value={state.gender}
            onChangeText={text => onChangeText('gender', text)}
          />
        </View>
        <LineBreak space={2} />
        <TouchableOpacity onPress={() => setOpen(true)}>
          <AppText
            title={'date of birth'}
            textColor={AppColors.BLACK}
            textSize={1.8}
            textTransform={'uppercase'}
            textFontWeight
          />
          <LineBreak space={0.5} />
          <AppTextInput
            inputPlaceHolder={
              moment(state.dob).format('DD-MM-YYYY') || 'Select Date'
            }
            inputContainerPaddingHorizontal={2}
            editable={false}
          />
        </TouchableOpacity>
        <LineBreak space={4} />
        <AppButton
          title={'Save'}
          handlePress={() => onEditProfile()}
          textSize={1.8}
          indicator={isLoading}
          btnBackgroundColor={AppColors.PRIMARY}
          btnPadding={18}
          btnWidth={90}
        />
        <DatePicker
          modal
          open={open}
          mode="date"
          date={state.dob}
          onConfirm={date => {
            setOpen(false);
            setState(prevState => ({
              ...prevState,
              dob: date,
            }));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;
