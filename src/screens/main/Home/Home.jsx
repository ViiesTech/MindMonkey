/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SVGXml from '../../../components/SVGXML';
import AppIcons from '../../../assets/icons/AppIcons';
import AppImages from '../../../assets/images/AppImages';
import SavedToFavoritesPopup from '../../../components/SavedToFavoritesPopup';
import CustomMenu from '../../../components/CustomMenu';
import {useCustomNavigation} from '../../../utils/Hooks';
import DeleteMoodDairy from '../../../components/DeleteMoodDairy';
import MainHeader from '../../../components/MainHeader';

const contentData = [
  {id: 1, title: 'Calm'},
  {id: 2, title: 'Grateful'},
  {id: 3, title: 'Content'},
  {id: 4, title: 'Overtime'},
  {id: 5, title: 'Exams'},
  {id: 6, title: 'Projects'},
  {id: 7, title: 'Hydration'},
  {id: 8, title: 'Nap'},
  {id: 9, title: 'Dinner'},
  {id: 10, title: 'Reading'},
  {id: 11, title: 'Partner'},
  {id: 12, title: 'Therapy'},
  {id: 13, title: 'Focus Time'},
  {id: 14, title: 'Laundry'},
  {id: 15, title: 'Cloudy'},
  {id: 16, title: 'Hot'},
  {id: 17, title: 'Cycling'},
  {id: 18, title: 'Yoga'},
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {navigateToRoute} = useCustomNavigation();
  const handleEdit = () => alert('Edit Pressed');
  const handleSave = () => alert('Saved to Favourites');
  const handleDelete = () => alert('Deleted');

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <SavedToFavoritesPopup
        visible={showPopup}
        onHide={() => setShowPopup(false)}
      />
      <DeleteMoodDairy
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <CustomMenu
        onEdit={handleEdit}
        onSave={() => {
          setShowPopup(true);
          setTimeout(() => {
            navigateToRoute('ShiningStar');
          }, 1500);
        }}
        onDelete={() => setModalVisible(true)}
        visible={visible}
        setVisible={setVisible}
      />
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

      <View
        style={{
          borderWidth: 1,
          borderColor: AppColors.LIGHTGRAY,
          borderRadius: 10,
          paddingHorizontal: responsiveWidth(4),
          paddingBottom: responsiveHeight(3),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              alignItems: 'center',
            }}>
            <Image
              source={AppImages.smile}
              style={{width: responsiveWidth(12), height: responsiveHeight(12)}}
              resizeMode="contain"
            />
            <View>
              <AppText
                title={'good'}
                textColor={AppColors.BLACK}
                textSize={2.5}
                textTransform={'uppercase'}
                textFontWeight
              />
              <LineBreak space={0.5} />
              <AppText
                title={'Mar 2 - 20 : 20 AM'}
                textColor={AppColors.BLACK}
                textSize={1.6}
                textTransform={'uppercase'}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
            <TouchableOpacity>
              <Feather
                name={'share-2'}
                size={responsiveFontSize(3)}
                color={AppColors.BLACK}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Feather
                name={'more-vertical'}
                size={responsiveFontSize(3)}
                color={AppColors.BLACK}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: AppColors.LIGHTGRAY,
            borderBottomWidth: 1,
            borderBottomColor: AppColors.LIGHTGRAY,
            paddingVertical: responsiveHeight(2.5),
          }}>
          <FlatList
            data={contentData}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 5,
            }}
            ItemSeparatorComponent={<LineBreak space={0.5} />}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: responsiveWidth(6),
                    paddingVertical: responsiveHeight(0.5),
                    borderRadius: 100,
                    borderColor: AppColors.LIGHTGRAY,
                  }}>
                  <AppText
                    title={item.title}
                    textColor={AppColors.GRAY}
                    textSize={1.6}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <LineBreak space={3} />

        <AppText
          title={
            'Today was a little problem in the team, but i am good an socializing. I feel okay.'
          }
          textColor={AppColors.GRAY}
          textSize={1.6}
          textwidth={60}
          lineHeight={2.5}
        />
        <LineBreak space={2} />

        <Image
          source={AppImages.voice}
          style={{width: responsiveWidth(80)}}
          resizeMode="contain"
        />

        <LineBreak space={2} />

        <ScrollView
          horizontal
          contentContainerStyle={{flexDirection: 'row', gap: 15}}>
          {[...Array(4)].map((_, index) => (
            <TouchableOpacity
              style={{
                width: 70,
                height: 70,
                backgroundColor: AppColors.LIGHTGRAY,
                borderRadius: 5,
              }}
            />
          ))}
        </ScrollView>
      </View>
      <LineBreak space={3} />
    </ScrollView>
  );
};

export default Home;
