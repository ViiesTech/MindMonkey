/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../utils/AppColors';

const EmojiThemePicker = ({
  emojiThemes,
  setSelectedThemeIndex,
  selectedThemeIndex,
  isEdit = false,
  handleOnEdit,
}: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {emojiThemes?.map((theme, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.emojiRow,
            {position: 'relative'},
            selectedThemeIndex === index && styles.selectedRow,
          ]}
          onPress={() => setSelectedThemeIndex && setSelectedThemeIndex(index)}>
          {theme?.map((emoji: any, emojiIndex: any) => (
            <Text key={emojiIndex} style={styles.emoji}>
              {emoji}
            </Text>
          ))}
          {index === emojiThemes?.length - 1 && (
            <Text style={styles.premium}>👑</Text> // Optional: Use Icon
          )}
          {isEdit && (
            <View
              style={{
                position: 'absolute',
                top: responsiveHeight(-1.5),
                right: 0,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: AppColors.PRIMARY,
                  padding: 5,
                  borderRadius: 100,
                }}
                onPress={handleOnEdit}
                >
                <AntDesign
                  name={'edit'}
                  size={responsiveFontSize(2)}
                  color={AppColors.WHITE}
                />
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(5),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 8,
    color: '#555',
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
  },
  selectedRow: {
    borderColor: '#00AEEF',
    borderWidth: 2,
    backgroundColor: '#E0F7FF',
  },
  emoji: {
    fontSize: 28,
  },
  premium: {
    // marginLeft: 10,
    fontSize: 20,
  },
});

export default EmojiThemePicker;
