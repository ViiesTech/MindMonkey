/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveFontSize } from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';

type Prop = {
  type?: string,
}

const WeeklyMoodChart = ({ type }: Prop) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(moment().startOf('isoWeek'));
  const [barData, setBarData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(moment()); // shows current month in header
  const [monthbarData, setMonthBarData] = useState([]);
  const [currentYear, setCurrentYear] = useState(moment()); // current year in header
  const [yearBarData, setYearBarData] = useState([]);
  const [dayBarData, setDayBarData] = useState([]);

  useEffect(() => {
    generateDayWiseData();
  }, []);

const generateDayWiseData = () => {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const newData = dayNames.map((day) => {
    const randomValue = Math.floor(Math.random() * 80) + 10; // random for demo

    const color =
      randomValue < 30
        ? '#E74C3C'
        : randomValue < 50
        ? '#FFA500'
        : '#7AC943';

    return {
      value: randomValue,
      label: day, // 👈 show day name
      frontColor: color,
    };
  });

  setDayBarData(newData);
};

  useEffect(() => {
    generateNext7YearsData(currentYear);
  }, [currentYear]);

  const generateNext7YearsData = (yearDate) => {
    // Generate data for current year + next 6 years (7 total)
    const newData = Array.from({ length: 7 }).map((_, i) => {
      const year = moment(yearDate).add(i, 'years'); // increment by year
      const randomValue = Math.floor(Math.random() * 80) + 10;

      const color =
        randomValue < 30
          ? '#E74C3C'
          : randomValue < 50
            ? '#FFA500'
            : '#7AC943';

      return {
        value: randomValue,
        label: year.format('YYYY'), // show year as label
        frontColor: color,
      };
    });

    setYearBarData(newData);
  };

  const handlePreviousYear = () => {
    setCurrentYear(prev => moment(prev).subtract(1, 'years')); // subtract 1 year
  };

  const handleNextYear = () => {
    setCurrentYear(prev => moment(prev).add(1, 'years')); // add 1 year
  };

  const headerYear = currentYear.format('YYYY');

  useEffect(() => {
    generateNext7MonthsData(currentMonth);
  }, [currentMonth]);

  const generateNext7MonthsData = (monthDate) => {
    // Generate data for the next 7 months after the current month
    const newData = Array.from({ length: 7 }).map((_, i) => {
      const month = moment(monthDate).add(i + 1, 'months'); // +1 = next month onwards
      const randomValue = Math.floor(Math.random() * 80) + 10;

      const color =
        randomValue < 30
          ? '#E74C3C'
          : randomValue < 50
            ? '#FFA500'
            : '#7AC943';

      return {
        value: randomValue,
        label: month.format('MMM'),
        frontColor: color,
      };
    });

    setMonthBarData(newData);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(prev => moment(prev).subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => moment(prev).add(1, 'month'));
  };

  const headerMonth = currentMonth.format('MMMM');

  useEffect(() => {
    generateWeeklyData(currentWeekStart);
  }, [currentWeekStart]);

  const generateWeeklyData = (startDate) => {
    const newData = Array.from({ length: 7 }).map((_, i) => {
      const day = moment(startDate).add(i, 'days');
      const randomValue = Math.floor(Math.random() * 80) + 10;
      const color =
        randomValue < 30
          ? '#E74C3C'
          : randomValue < 50
            ? '#FFA500'
            : '#7AC943';

      return {
        value: randomValue,
        label: day.format('D'),
        frontColor: color,
      };
    });

    setBarData(newData);
  };

  const start = currentWeekStart.format('MMM DD');
  const end = moment(currentWeekStart).add(6, 'days').format('MMM DD, YYYY');

  const handlePreviousWeek = () => {
    setCurrentWeekStart((prev) => moment(prev).subtract(7, 'days'));
  };

  const handleNextWeek = () => {
    setCurrentWeekStart((prev) => moment(prev).add(7, 'days'));
  };


  const renderChart = () => {
    if (type === 'weekly') {
      return (
        <View>
          <View style={styles.dateRow}>
            <TouchableOpacity onPress={handlePreviousWeek}>
              <Feather name="chevron-left" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>

            <Text style={styles.dateText}>
              {start} - {end}
            </Text>

            <TouchableOpacity onPress={handleNextWeek}>
              <Feather name="chevron-right" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>
          </View>

          <View style={styles.chartWrapper}>
            <BarChart
              barWidth={26}
              noOfSections={5}
              barBorderRadius={6}
              hideOrigin
              hideYAxisText
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              initialSpacing={10}
              spacing={22}
              barBorderTopLeftRadius={100}
              barBorderTopRightRadius={100}
              barBorderBottomLeftRadius={0}
              barBorderBottomRightRadius={0}
              xAxisLabelTextStyle={{ color: AppColors.BLACK, fontWeight: '600', fontSize: responsiveFontSize(1.5) }}
            />
          </View>
        </View>
      );
    } else if (type === 'monthly') {
      return (
        <View>
          <View style={styles.dateRow}>
            <TouchableOpacity onPress={handlePreviousMonth}>
              <Feather name="chevron-left" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>

            <Text style={styles.dateText}>
              {headerMonth}
            </Text>

            <TouchableOpacity onPress={handleNextMonth}>
              <Feather name="chevron-right" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>
          </View>

          <View style={styles.chartWrapper}>
            <BarChart
              barWidth={26}
              noOfSections={5}
              barBorderRadius={6}
              hideOrigin
              hideYAxisText
              data={monthbarData}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              initialSpacing={10}
              spacing={22}
              barBorderTopLeftRadius={100}
              barBorderTopRightRadius={100}
              barBorderBottomLeftRadius={0}
              barBorderBottomRightRadius={0}
              xAxisLabelTextStyle={{ color: AppColors.BLACK, fontWeight: '600', fontSize: responsiveFontSize(1.5) }}
            />
          </View>
        </View>
      );
    }else if(type === 'dayly'){
      return (
        <View>
          <View style={styles.chartWrapper}>
            <BarChart
              barWidth={26}
              noOfSections={5}
              barBorderRadius={6}
              hideOrigin
              hideYAxisText
              data={dayBarData}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              initialSpacing={10}
              spacing={22}
              barBorderTopLeftRadius={100}
              barBorderTopRightRadius={100}
              barBorderBottomLeftRadius={0}
              barBorderBottomRightRadius={0}
              xAxisLabelTextStyle={{ color: AppColors.BLACK, fontWeight: '600', fontSize: responsiveFontSize(1.5) }}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.dateRow}>
            <TouchableOpacity onPress={handlePreviousYear}>
              <Feather name="chevron-left" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>

            <Text style={styles.dateText}>
              {headerYear}
            </Text>

            <TouchableOpacity onPress={handleNextYear}>
              <Feather name="chevron-right" size={responsiveFontSize(3)} color={AppColors.BLACK} />
            </TouchableOpacity>
          </View>

          <View style={styles.chartWrapper}>
            <BarChart
              barWidth={26}
              noOfSections={5}
              barBorderRadius={6}
              hideOrigin
              hideYAxisText
              data={yearBarData}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              initialSpacing={10}
              spacing={22}
              barBorderTopLeftRadius={100}
              barBorderTopRightRadius={100}
              barBorderBottomLeftRadius={0}
              barBorderBottomRightRadius={0}
              xAxisLabelTextStyle={{ color: AppColors.BLACK, fontWeight: '600', fontSize: responsiveFontSize(1.5) }}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <>
      {renderChart()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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

export default WeeklyMoodChart;
