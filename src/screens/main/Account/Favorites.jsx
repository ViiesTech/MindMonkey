/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {responsiveWidth} from '../../../utils/Responsive_Dimensions';
import {useCustomNavigation} from '../../../utils/Hooks';
import Mood from '../../../components/Mood';

const Favorites = () => {
  const {navigateToRoute} = useCustomNavigation();
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
      <AppMainHeader heading="Favorites" />
      <LineBreak space={3} />

      <View>
        <FlatList
          data={[{id: 1}, {id: 2}]}
          ItemSeparatorComponent={<LineBreak space={2} />}
          ListFooterComponent={<LineBreak space={2} />}
          renderItem={({item}) => {
            return (
              <View>
                <Mood
                  verticalDotsOnPress={() => setVisible(true)}
                  onHide={() => setShowPopup(false)}
                  showPopup={showPopup}
                  visible={visible}
                  setVisible={setVisible}
                  modalVisible={modalVisible}
                  isChangeFavText={true}
                  setModalVisible={setModalVisible}
                  onDelete={() => setModalVisible(true)}
                  onSave={() => {
                    setShowPopup(true);
                    setTimeout(() => {
                      setShowPopup(false);
                    }, 1500);
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Favorites;
