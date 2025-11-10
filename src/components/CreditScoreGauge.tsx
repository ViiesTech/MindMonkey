import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from './LineBreak';
import moment from 'moment';

type Props = {
  type?: string,
}

const CreditScoreGauge = ({ type }: Props) => {
  const score = 342; // your dynamic value
  const [currentWeekStart, setCurrentWeekStart] = useState(moment().startOf('week'));
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [currentYear, setCurrentYear] = useState(moment());

  const handlePreviousYear = () => {
    setCurrentYear(prev => moment(prev).subtract(1, 'year'));
  };

  const handleNextYear = () => {
    setCurrentYear(prev => moment(prev).add(1, 'year'));
  };

  const yearHeaderText = currentYear.format('YYYY');

  const handlePreviousMonth = () => {
    setCurrentMonth(prev => moment(prev).subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => moment(prev).add(1, 'month'));
  };

  const monthHeaderText = currentMonth.format('MMMM');

  // Move to previous week
  const handlePreviousWeek = () => {
    setCurrentWeekStart(prev => moment(prev).subtract(1, 'week'));
  };

  // Move to next week
  const handleNextWeek = () => {
    setCurrentWeekStart(prev => moment(prev).add(1, 'week'));
  };

  // Week range text
  const weekStart = moment(currentWeekStart);
  const weekEnd = moment(currentWeekStart).endOf('week');
  const headerText = `${weekStart.format('MMM D')} - ${weekEnd.format('MMM D')}`;

  const renderChart = () => {
    if (type === 'weekly') {
      return (
        <View style={styles.container}>
          <View style={styles.dateRow}>
            <TouchableOpacity onPress={handlePreviousWeek}>
              <Feather name="chevron-left" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>

            <Text style={styles.dateText}>
              {headerText}
            </Text>

            <TouchableOpacity onPress={handleNextWeek}>
              <Feather name="chevron-right" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>
          </View>
          <LineBreak space={2} />
          <PieChart
            data={[
              { value: 25, color: '#E74C3C' },
              { value: 25, color: '#FFA500' },
              { value: 25, color: '#F9D71C' },
              { value: 25, color: '#4CAF50' },
            ]}
            donut
            startAngle={180}
            endAngle={360}
            innerRadius={90}
          />
          <View style={styles.valueContainer}>
            <AppText title={score} textFontWeight textColor={AppColors.BLACK} textSize={4} />
          </View>
        </View>
      );
    } else if (type === 'monthly') {
      return (
        <View style={styles.container}>
          <View style={styles.dateRow}>
            <TouchableOpacity onPress={handlePreviousMonth}>
              <Feather name="chevron-left" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>

            <Text style={styles.dateText}>
              {monthHeaderText}
            </Text>

            <TouchableOpacity onPress={handleNextMonth} >
              <Feather name="chevron-right" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>
          </View>
          <LineBreak space={2} />
          <PieChart
            data={[
              { value: 25, color: '#E74C3C' },
              { value: 25, color: '#FFA500' },
              { value: 25, color: '#F9D71C' },
              { value: 25, color: '#4CAF50' },
            ]}
            donut
            startAngle={180}
            endAngle={360}
            innerRadius={90}
          />
          <View style={styles.valueContainer}>
            <AppText title={score} textFontWeight textColor={AppColors.BLACK} textSize={4} />
          </View>
        </View>
      );
    } else if (type === 'score') {
      return (
        <View style={styles.container}>
          <LineBreak space={2} />
          <PieChart
            data={[
              { value: 36, color: '#D9D9D9' },
              { value: 64, color: '#F48A88' },
            ]}
            donut
            startAngle={180}
            endAngle={360}
            innerRadius={100}
          />
          <View style={[styles.valueContainer, { marginTop: responsiveHeight(2) }]}>
            <AppText title={'64'} textFontWeight textColor={AppColors.BLACK} textSize={6} />
            <LineBreak space={1} />
            <AppText title={'/ 100'} textColor={AppColors.GRAY} textSize={3} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.dateRow}>
            <TouchableOpacity onPress={handlePreviousYear}>
              <Feather name="chevron-left" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>

            <Text style={styles.dateText}>
              {yearHeaderText}
            </Text>

            <TouchableOpacity onPress={handleNextYear}>
              <Feather name="chevron-right" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>
          </View>
          <LineBreak space={2} />
          <PieChart
            data={[
              { value: 25, color: '#E74C3C' },
              { value: 25, color: '#FFA500' },
              { value: 25, color: '#F9D71C' },
              { value: 25, color: '#4CAF50' },
            ]}
            donut
            startAngle={180}
            endAngle={360}
            innerRadius={90}
          />
          <View style={styles.valueContainer}>
            <AppText title={score} textFontWeight textColor={AppColors.BLACK} textSize={4} />
          </View>
        </View>
      );
    }
  };

  return (
    <View>
      {renderChart()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },
  overlayContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: 250,
    height: 125, // half circle
    overflow: 'hidden',
    borderTopLeftRadius: 125,
    borderTopRightRadius: 125,
  },
  segment: {
    flex: 1,
  },
  valueContainer: {
    position: 'absolute',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  dateRow: {
    width: responsiveWidth(85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: responsiveFontSize(2),
    color: '#333',
    fontWeight: '400',
  },
  chartWrapper: {
    alignItems: 'center',
  },
});

export default CreditScoreGauge;
