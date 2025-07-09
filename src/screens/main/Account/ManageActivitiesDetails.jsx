/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import LineBreak from '../../../components/LineBreak';
import AppMainHeader from '../../../components/AppMainHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppColors from '../../../utils/AppColors';
import {useCustomNavigation} from '../../../utils/Hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AppText from '../../../components/AppTextComps/AppText';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EditGroupModal from '../../../components/EditGroupModal';
import CustomMenu from '../../../components/CustomMenu';
import DeleteMoodDairy from '../../../components/DeleteMoodDairy';

const data = [
  {
    id: 1,
    title: 'Overtime',
    icon: (
      <Feather
        name={'clock'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 2,
    title: 'Teamwork',
    icon: (
      <Feather
        name={'users'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 3,
    title: 'Meeting',
    icon: (
      <FontAwesome
        name={'calendar'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 4,
    title: 'Deadline',
    icon: (
      <Feather
        name={'watch'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 5,
    title: 'Presentation',
    icon: (
      <Feather
        name={'twitch'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 6,
    title: 'Vacation',
    icon: (
      <FontAwesome
        name={'tree'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 7,
    title: 'Remote work',
    icon: (
      <FontAwesome5
        name={'home'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 8,
    title: 'Promotion',
    icon: (
      <Feather
        name={'trending-up'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
];

const ManageActivitiesDetails = () => {
  const {navigateToRoute} = useCustomNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <View style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="work (8)" />
      <LineBreak space={2} />

      <EditGroupModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        details={true}
        handleAdd={() => {
          navigateToRoute('SelectActivityEmoji');
          setModalVisible(false);
        }}
      />

      <CustomMenu
        onEdit={() => {}}
        onSave={() => {}}
        onDelete={() => {
          setDeleteModalVisible(true);
          setModalMenu(false);
        }}
        visible={modalMenu}
        setVisible={setModalMenu}
        isChangeFavText={true}
        manageActivities={true}
      />

      <DeleteMoodDairy
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        heading="Delete activity overtime?"
        title="Sure yoy want to delete this group?"
        subTitle="delete group will remove all activites (8) within. This action cannot be undone."
      />

      <FlatList
        data={data}
        ItemSeparatorComponent={<LineBreak space={2} />}
        contentContainerStyle={{
          backgroundColor: AppColors.WHITE,
          paddingHorizontal: responsiveWidth(5),
          paddingVertical: responsiveHeight(4),
          borderRadius: 20,
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  {item.icon}
                  <AppText
                    title={item.title}
                    textColor={AppColors.BLACK}
                    textSize={1.7}
                  />
                </View>
                <TouchableOpacity onPress={() => setModalMenu(true)}>
                  <Entypo
                    name={'dots-three-vertical'}
                    size={responsiveFontSize(2)}
                    color={AppColors.BLACK}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ManageActivitiesDetails;
