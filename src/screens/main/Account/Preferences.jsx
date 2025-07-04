/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import AppMainHeader from '../../../components/AppMainHeader';
import LineBreak from '../../../components/LineBreak';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import ExportDataMenu from '../../../components/ExportDataMenu';
import AppColors from '../../../utils/AppColors';

const exportDairy = [
  {id: 1, title: 'Health Connect'},
  {id: 2, title: 'App Logo'},
  {id: 3, title: 'Widget'},
];

const exportAttachments = [
  {id: 1, title: 'First Day Of Week', subTitle: 'Monday'},
  {id: 2, title: 'Time Format', subTitle: 'System Default'},
  {id: 3, title: 'Day Reset Time', subTitle: '00:00 AM'},
];

const third = [
  {id: 1, title: 'Reset All Progress'},
  {id: 2, title: 'Clear Cache', subTitle: '45.8 MB'},
];

const Preferences = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Preferences" />
      <LineBreak space={5} />

      <View>
        <FlatList
          data={exportDairy}
          contentContainerStyle={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
          }}
          ItemSeparatorComponent={<LineBreak space={3} />}
          renderItem={({item}) => {
            return <ExportDataMenu title={item.title} />;
          }}
        />
      </View>

      <LineBreak space={2} />

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
            return <ExportDataMenu title={item.title} time={item.subTitle} />;
          }}
        />
      </View>

      <LineBreak space={2} />

      <View>
        <FlatList
          data={third}
          contentContainerStyle={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
          }}
          ItemSeparatorComponent={<LineBreak space={3} />}
          renderItem={({item}) => {
            return <ExportDataMenu title={item.title} time={item.subTitle} />;
          }}
        />
      </View>
    </View>
  );
};

export default Preferences;
