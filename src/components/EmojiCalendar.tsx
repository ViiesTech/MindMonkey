/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Calendar, DateObject} from 'react-native-calendars';
import {responsiveFontSize} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';

type Mood = 'happy' | 'neutral' | 'sad' | 'angry' | 'future';

const moodMap: Record<Mood, {color: string; emoji: string}> = {
  happy: {color: '', emoji: '😊'},
  neutral: {color: '', emoji: '😐'},
  sad: {color: '', emoji: '😢'},
  angry: {color: '', emoji: '😡'},
  future: {color: '', emoji: '⚪'},
};

// Mood map for specific dates
const moodData: Record<string, Mood> = {
  '2024-12-01': 'happy',
  '2024-12-02': 'neutral',
  '2024-12-03': 'sad',
  '2024-12-04': 'angry',
  '2024-12-05': 'happy',
  '2024-12-06': 'happy',
  '2024-12-07': 'neutral',
  '2024-12-08': 'happy',
  '2024-12-09': 'neutral',
  '2024-12-10': 'sad',
  '2024-12-11': 'happy',
  '2024-12-12': 'angry',
  '2024-12-13': 'happy',
  '2024-12-14': 'happy',
  '2024-12-15': 'angry',
  '2024-12-16': 'neutral',
  '2024-12-17': 'neutral',
  '2024-12-18': 'happy',
  '2024-12-19': 'sad',
  '2024-12-20': 'neutral',
  '2024-12-21': 'neutral',
  '2024-12-22': 'happy',
};

const EmojiCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const getMoodForDate = (date: string): Mood => {
    return moodData[date] || 'future';
  };

  const renderDay = (date: DateObject) => {
    const mood = getMoodForDate(date.dateString);
    const {color, emoji} = moodMap[mood];
    const isSelected = selectedDate === date.dateString;

    const newD = new Date(date.dateString).getDate();

    return (
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => setSelectedDate(date.dateString)}>
        <View
          style={[
            styles.dayContainer,
            {backgroundColor: color},
            isSelected && styles.selectedBorder,
          ]}>
          <Text style={styles.dayEmoji}>{emoji}</Text>
        </View>
        <Text>{newD}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Calendar
      current={'2024-12-01'}
      hideExtraDays
      markingType={'custom'}
      style={{borderRadius: 10, overflow: 'hidden'}}
      theme={{
        calendarBackground: '#FFFFFF',
        textSectionTitleColor: '#000',
        monthTextColor: '#000',
        arrowColor: '#000',
        textDayFontWeight: '500',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '500',
        textDayFontSize: 14,
        textMonthFontSize: 16,
      }}
      dayComponent={({date}) => (date ? renderDay(date) : null)}
    />
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dayEmoji: {
    fontSize: responsiveFontSize(3.5),
  },
  selectedBorder: {
    backgroundColor: AppColors.PRIMARY,
  },
});

export default EmojiCalendar;
