/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Image} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImages from '../../../assets/images/AppImages';
import {useCustomNavigation} from '../../../utils/Hooks';
import MainHeader from '../../../components/MainHeader';
import Mood from '../../../components/Mood';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <LineBreak space={3} />
      <MainHeader
        heading={'Home'}
        rightIcon={
          <TouchableOpacity>
            <Ionicons
              name={'search'}
              size={responsiveFontSize(3)}
              color={AppColors.BLACK}
            />
          </TouchableOpacity>
        }
      />
      <LineBreak space={2} />
      <Image
        source={AppImages.banner}
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(17),
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
      <LineBreak space={2} />

      <Mood
        verticalDotsOnPress={() => setVisible(true)}
        onHide={() => setShowPopup(false)}
        showPopup={showPopup}
        visible={visible}
        setVisible={setVisible}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onDelete={() => setModalVisible(true)}
        onSave={() => {
          setShowPopup(true);
          setTimeout(() => {
            navigateToRoute('ShiningStar');
          }, 1500);
        }}
      />
      <LineBreak space={3} />
    </ScrollView>
  );
};

export default Home;
