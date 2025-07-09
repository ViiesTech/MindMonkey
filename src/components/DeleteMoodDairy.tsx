/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import AppButton from './AppButton';

const DeleteMoodDairy = ({
  modalVisible,
  setModalVisible,
  heading,
  title,
  subTitle,
  handlePress,
}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <AppText
            title={heading ? heading : 'delete mood dairy'}
            textColor={'red'}
            textFontWeight
            textSize={2.5}
            textAlignment={'center'}
            textTransform={heading ? 'normal' : 'uppercase'}
          />

          <LineBreak space={2} />

          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderTopColor: AppColors.LIGHTGRAY,
              borderBottomColor: AppColors.LIGHTGRAY,
              paddingVertical: responsiveHeight(2),
            }}>
            <AppText
              title={title ? title : 'Sure you want to delete this mood dairy?'}
              textColor={
                heading === 'LOGOUT' ? AppColors.BLACK : AppColors.GRAY
              }
              textSize={2}
              textAlignment={'center'}
            />
            {heading === 'LOGOUT' ? null : <LineBreak space={1} />}
            {heading !== 'LOGOUT' && (
              <AppText
                title={subTitle ? subTitle : 'This action cannot be undone.'}
                textColor={AppColors.GRAY}
                textSize={1.5}
                textAlignment={'center'}
              />
            )}
          </View>
          <LineBreak space={3} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AppButton
              title={'Cancel'}
              handlePress={() => setModalVisible(false)}
              textSize={1.8}
              btnBackgroundColor={AppColors.LIGHTGRAY}
              textColor={
                heading === 'LOGOUT' ? AppColors.BLACK : AppColors.GRAY
              }
              textFontWeight={false}
              btnPadding={15}
              borderRadius={20}
              btnWidth={42}
            />
            <AppButton
              title={heading === 'LOGOUT' ? 'OK' : 'Yes, Delete'}
              handlePress={() => {
                if(heading === 'LOGOUT'){
                  handlePress();
                }else{
                  setModalVisible(false);
                }
              }}
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

export default DeleteMoodDairy;

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
