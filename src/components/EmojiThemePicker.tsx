import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { responsiveHeight, responsiveWidth } from '../utils/Responsive_Dimensions';

const EmojiThemePicker = ({emojiThemes, setSelectedThemeIndex, selectedThemeIndex}: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {emojiThemes?.map((theme, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.emojiRow,
            selectedThemeIndex === index && styles.selectedRow,
          ]}
          onPress={() => setSelectedThemeIndex && setSelectedThemeIndex(index)}
        >
          {theme?.map((emoji, emojiIndex) => (
            <Text key={emojiIndex} style={styles.emoji}>
              {emoji}
            </Text>
          ))}
          {index === emojiThemes?.length - 1 && (
            <Text style={styles.premium}>👑</Text> // Optional: Use Icon
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
