import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import LineBreak from './LineBreak';

const screenWidth = Dimensions.get('window').width;

const moods = ['angry', 'sad', 'neutral', 'happy', 'veryHappy'];

const moodColors = {
  angry: '#e53935', // red
  sad: '#fb8c00', // orange
  neutral: '#fdd835', // yellow
  happy: '#43a047', // green
  veryHappy: '#1e88e5', // blue
};

const days = Array.from({length: 31}, (_, i) => i + 1);
const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

// Fake data generator
const generateMoodData = () => {
  const data = {};
  days.forEach(day => {
    months.forEach((_, monthIndex) => {
      const moodIndex = Math.floor(Math.random() * 5);
      data[`${day}-${monthIndex}`] = moods[moodIndex];
    });
  });
  return data;
};

const moodData = generateMoodData();
const YearlyCalendar = () => {
  const moodCounts = moods.reduce((acc, mood): any => {
    acc[mood] = Object.values(moodData).filter(val => val === mood).length;
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.year}>2024</Text>
      <ScrollView horizontal>
        <View>
          {/* Month header */}
          <View style={styles.monthRow}>
            {months.map(month => (
              <Text key={month} style={styles.monthText}>
                {month}
              </Text>
            ))}
          </View>

          <LineBreak space={1} />

          {/* Day grid */}
          {days.map(day => (
            <View key={day} style={styles.dayRow}>
              {months.map((_, monthIndex): any => {
                const mood = moodData[`${day}-${monthIndex}`];
                return (
                  <View
                    key={`${day}-${monthIndex}`}
                    style={[
                      styles.circle,
                      {backgroundColor: moodColors[mood] || '#ccc'},
                    ]}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Mood legend */}
      <View style={styles.legend}>
        {moods.map((mood, i) => (
          <TouchableOpacity key={mood} style={styles.legendItem}>
            <Text style={styles.count}>{moodCounts[mood]}</Text>
            <Text style={styles.emoji}>
              {['😡', '😢', '😐', '🙂', '😁'][i]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: responsiveHeight(2),
    backgroundColor: '#fff',
  },
  year: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  monthRow: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(7.5),
  },
  monthText: {
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#555',
  },
  dayRow: {
    flexDirection: 'row',
    width: responsiveWidth(87),
    justifyContent: 'flex-end',
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'center',
    marginVertical: 2,
  },
  circle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  legendItem: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: responsiveFontSize(5),
  },
  count: {
    fontSize: responsiveFontSize(1.5),
    color: '#333',
    marginTop: 2,
  },
});

export default YearlyCalendar;
