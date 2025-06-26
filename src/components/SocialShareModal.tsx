/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LineBreak from './LineBreak';
import AppImages from '../assets/images/AppImages';
import AppIcons from '../assets/icons/AppIcons';
import SVGXml from './SVGXML';
import Ionicons from 'react-native-vector-icons/Ionicons';

const people = [
  {id: 1, profImage: AppImages.profile, username: 'Charlotte Hanlin'},
  {id: 2, profImage: AppImages.profile, username: 'Kristin Watson'},
  {id: 3, profImage: AppImages.profile, username: 'Clinton John'},
  {id: 4, profImage: AppImages.profile, username: 'Mcclure Winkles'},
  {id: 5, profImage: AppImages.profile, username: 'David Kriefer'},
  {id: 6, profImage: AppImages.profile, username: 'Charlotte Hanlin'},
];

const socialIcons = [
  {id: 1, profImage: AppIcons.facebook, username: 'Facebook'},
  {id: 2, profImage: AppIcons.whatsApp, username: 'Whatsapp'},
  {id: 3, profImage: AppIcons.instagram, username: 'Instagram'},
  {id: 4, profImage: AppIcons.telegram, username: 'Telegram'},
];

const SocialShareModal = ({modalVisible, setModalVisible}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: 'row',
              width: responsiveWidth(100),
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View />
            <AppText
              title={'SHARE TO'}
              textColor={AppColors.BLACK}
              textFontWeight
              textSize={2.5}
              textAlignment={'center'}
              textTransform={'uppercase'}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons
                name={'close-outline'}
                size={responsiveFontSize(3)}
                color={AppColors.BLACK}
              />
            </TouchableOpacity>
          </View>

          <LineBreak space={3} />

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              gap: 8,
              borderBottomWidth: 1,
              width: responsiveWidth(85),
              paddingBottom: responsiveHeight(1),
              borderBottomColor: AppColors.LIGHTGRAY,
            }}>
            <FontAwesome5
              name={'image'}
              size={responsiveFontSize(2.5)}
              color={AppColors.BLACK}
            />
            <AppText
              title={'Mood -1222452024-00000876 .jpg'}
              textColor={AppColors.BLACK}
              textSize={1.8}
            />
          </TouchableOpacity>
          <LineBreak space={3} />

          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
            <AppText
              title={'Recent people'}
              textColor={AppColors.GRAY}
              textSize={1.6}
            />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: AppColors.LIGHTGRAY,
                width: responsiveWidth(65),
              }}
            />
          </View>
          <LineBreak space={1.5} />

          <View>
            <FlatList
              data={people}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{gap: 5}}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image
                      source={item.profImage}
                      style={{width: 60, height: 60, borderRadius: 100}}
                    />
                    <LineBreak space={1} />
                    <AppText
                      title={item.username}
                      textColor={AppColors.BLACK}
                      textSize={1.6}
                      lineHeight={2.2}
                      textwidth={17}
                      textAlignment={'center'}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <LineBreak space={1} />

          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <AppText
              title={'Social media'}
              textColor={AppColors.GRAY}
              textSize={1.6}
            />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: AppColors.LIGHTGRAY,
                width: responsiveWidth(65),
              }}
            />
          </View>
          <LineBreak space={1} />

          <View>
            <FlatList
              data={socialIcons}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between',
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={{alignItems: 'center'}}>
                    <SVGXml icon={item.profImage} width={60} height={60} />
                    <LineBreak space={0.5} />
                    <AppText
                      title={item.username}
                      textColor={AppColors.BLACK}
                      textSize={1.5}
                      lineHeight={2.2}
                      textAlignment={'center'}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SocialShareModal;

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
    height: responsiveHeight(49),
  },
});
