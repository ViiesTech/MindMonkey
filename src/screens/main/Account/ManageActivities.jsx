/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomMenu from '../../../components/CustomMenu';
import EditGroupModal from '../../../components/EditGroupModal';
import DeleteMoodDairy from '../../../components/DeleteMoodDairy';
import {useCustomNavigation} from '../../../utils/Hooks';

const data = [
  {id: 1, title: 'Emotions (20)'},
  {id: 2, title: 'Work (8)'},
  {id: 3, title: 'School (8)'},
  {id: 4, title: 'Health (7)'},
  {id: 5, title: 'Relationships (10)'},
  {id: 6, title: 'Sleep (8)'},
  {id: 7, title: 'Food (10)'},
  {id: 8, title: 'Drinks (10)'},
  {id: 9, title: 'Hobbies (11)'},
  {id: 10, title: 'Social (8)'},
  {id: 11, title: 'Self Improvement (8)'},
  {id: 12, title: 'Productive/Creative (7)'},
  {id: 13, title: 'Chores (8)'},
  {id: 14, title: 'Weather (10)'},
  {id: 15, title: 'Beauty (10)'},
  {id: 16, title: 'Events (10)'},
  {id: 17, title: 'Sports (8)'},
  {id: 18, title: 'Other (10)'},
];

const ManageActivities = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const {navigateToRoute} = useCustomNavigation();

  const toggleSelection = id => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  return (
    <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="manage activities" />
      <LineBreak space={2} />

      <CustomMenu
        onEdit={() => {
          setModalVisible(true);
          setVisible(false);
        }}
        onSave={() => {}}
        onDelete={() => {
          setDeleteModalVisible(true);
          setVisible(false);
        }}
        visible={visible}
        setVisible={setVisible}
        isChangeFavText={true}
        manageActivities={true}
      />

      <EditGroupModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <DeleteMoodDairy
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        heading="Delete Group Work"
        title="Sure you want to delete this group?"
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
          const isSelected = selectedItems.includes(item.id);

          return (
            <TouchableOpacity
              onPress={() => navigateToRoute('ManageActivitiesDetails')}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <TouchableOpacity onPress={() => toggleSelection(item.id)}>
                    <MaterialIcons
                      name={
                        isSelected ? 'check-box' : 'check-box-outline-blank'
                      }
                      size={responsiveFontSize(2.5)}
                      color={AppColors.PRIMARY}
                    />
                  </TouchableOpacity>
                  <AppText
                    title={item.title}
                    textColor={AppColors.BLACK}
                    textSize={1.7}
                  />
                </View>
                <TouchableOpacity onPress={() => setVisible(true)}>
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
      <LineBreak space={2} />
    </ScrollView>
  );
};

export default ManageActivities;
