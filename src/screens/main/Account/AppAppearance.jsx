/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppColors from '../../../utils/AppColors';
import ExportDataMenu from '../../../components/ExportDataMenu';
import ChooseThemeModal from '../../../components/ChooseThemeModal';
import {useCustomNavigation} from '../../../utils/Hooks';

const exportAttachments = [
  {id: 1, title: 'Theme', subTitle: 'Light'},
  {id: 2, title: 'App Language', subTitle: 'English'},
];

const AppAppearance = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {navigateToRoute} = useCustomNavigation();
  return (
    <View style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="App Appearance" />
      <LineBreak space={4} />

      <ChooseThemeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <View>
        <FlatList
          data={exportAttachments}
          contentContainerStyle={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
          }}
          ItemSeparatorComponent={<LineBreak space={3} />}
          renderItem={({item}) => {
            return (
              <ExportDataMenu
                title={item.title}
                time={item.subTitle}
                containerOnPress={() => {
                  if (item.id == 1) {
                    setModalVisible(true);
                  } else {
                    navigateToRoute('AppLanguage');
                  }
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default AppAppearance;
