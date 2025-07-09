/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import AppButton from './AppButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
};

const data = [
  {id: 1, title: 'System Default'},
  {id: 2, title: 'Light'},
  {id: 3, title: 'Dark'},
];

const ChooseThemeModal = ({modalVisible, setModalVisible}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <AppText
            title={'Choose Theme'}
            textColor={AppColors.BLACK}
            textFontWeight
            textSize={2.5}
            textAlignment={'center'}
          />

          <LineBreak space={2} />

          <View
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <FlatList
              data={data}
              ItemSeparatorComponent={<LineBreak space={1} />}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <MaterialIcons
                        name={
                          item.id == 1 ? 'radio-button-on' : 'radio-button-off'
                        }
                        size={responsiveFontSize(2.5)}
                        color={AppColors.PRIMARY}
                      />
                    </TouchableOpacity>
                    <AppText
                      title={item.title}
                      textColor={AppColors.BLACK}
                      textSize={2}
                      textFontWeight
                    />
                  </View>
                );
              }}
            />
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
              textColor={AppColors.BLACK}
              textFontWeight={false}
              btnPadding={15}
              borderRadius={20}
              btnWidth={42}
            />
            <AppButton
              title={'OK'}
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

export default ChooseThemeModal;

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
    height: responsiveHeight(33),
  },
});
