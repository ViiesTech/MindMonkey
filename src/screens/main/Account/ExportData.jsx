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
import AppText from '../../../components/AppTextComps/AppText';

const exportDairy = [
  {id: 1, title: 'Export to CVS'},
  {id: 2, title: 'Export to PDF'},
];

const exportAttachments = [
  {id: 1, title: 'Export Voice Memo'},
  {id: 2, title: 'Export Photos'},
];

const ExportData = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
      <AppMainHeader heading="Export Data" />
      <LineBreak space={5} />

      <AppText
        title={'Export Dairy'}
        textColor={AppColors.DARKGRAY}
        textSize={1.7}
      />
      <LineBreak space={1} />
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

      <LineBreak space={5} />

      <AppText
        title={'Export Attachments'}
        textColor={AppColors.DARKGRAY}
        textSize={1.7}
      />
      <LineBreak space={1} />
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
            return <ExportDataMenu title={item.title} />;
          }}
        />
      </View>
    </View>
  );
};

export default ExportData;
