/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  modalVisible: boolean;
  details?: boolean;
  setModalVisible: Function;
  handleAdd?: any;
};

const EditGroupModal = ({modalVisible, setModalVisible, details, handleAdd}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalView, {height: responsiveHeight(42)}]}>
          <AppText
            title={details ? 'Add new activity' : 'Edit Group'}
            textColor={AppColors.BLACK}
            textFontWeight
            textSize={2.5}
            textwidth={100}
            textTransform={details ? 'uppercase' : 'normal'}
            textAlignment={'center'}
          />

          {details && <LineBreak space={2} />}
          {details && (
            <View
              style={{
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={handleAdd}>
                <Feather
                  name={'plus-circle'}
                  size={responsiveFontSize(10)}
                  color={AppColors.PRIMARY}
                />
              </TouchableOpacity>
            </View>
          )}
          <LineBreak space={2} />

          <View
            style={{
              paddingVertical: responsiveHeight(1),
            }}>
            <AppText
              title={details ? 'Activity Name' : 'Group Name'}
              textColor={AppColors.BLACK}
              textSize={1.8}
              textFontWeight
            />
            <LineBreak space={0.5} />
            <AppTextInput
              inputPlaceHolder={'Enter name'}
              containerBg={AppColors.LIGHTGRAY}
              placeholderTextColor={AppColors.BLACK}
              borderRadius={20}
            />
          </View>
          <LineBreak space={2} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AppButton
              title={'cancel'}
              handlePress={() => setModalVisible(false)}
              textSize={1.8}
              btnBackgroundColor={AppColors.LIGHTGRAY}
              textColor={AppColors.BLACK}
              textFontWeight={false}
              btnPadding={15}
              borderRadius={20}
              btnWidth={42}
            />
            <AppButton
              title={'save'}
              handlePress={() => setModalVisible(false)}
              textSize={1.8}
              btnBackgroundColor={AppColors.PRIMARY}
              textFontWeight={false}
              btnPadding={15}
              borderRadius={20}
              btnWidth={42}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditGroupModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  openButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: AppColors.WHITE,
    borderRadius: 12,
    paddingVertical: responsiveHeight(2),
    elevation: 5,
    paddingHorizontal: responsiveWidth(5),
    width: responsiveWidth(100),
    height: responsiveHeight(30),
  },
});
