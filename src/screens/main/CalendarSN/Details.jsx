/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import LineBreak from '../../../components/LineBreak';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import {useCustomNavigation} from '../../../utils/Hooks';
import Mood from '../../../components/Mood';

const Details = () => {
  const {navigateToRoute, goBack} = useCustomNavigation();
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <LineBreak space={2} />
      <TouchableOpacity onPress={() => goBack()}>
        <Ionicons
          name={'close-outline'}
          size={responsiveFontSize(3)}
          color={AppColors.BLACK}
        />
      </TouchableOpacity>
      <LineBreak space={2} />
      <AppText
        title={'details'}
        textColor={AppColors.BLACK}
        textSize={3}
        textFontWeight
        textwidth={100}
        textTransform={'uppercase'}
        textAlignment={'center'}
      />
      <LineBreak space={3} />

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
    </ScrollView>
  );
};

export default Details;
