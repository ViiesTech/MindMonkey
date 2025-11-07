import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = responsiveHeight(5.5);

type props = {
  setSelectedTime: (time: any) => void;
}

const TimePicker = ({ setSelectedTime }: props) => {
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const [selectedHour, setSelectedHour] = useState(10);
  const [selectedMinute, setSelectedMinute] = useState(25);
  const [amPm, setAmPm] = useState('AM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
  const amPmOptions = ['AM', 'PM'];

  useEffect(() => {
    scrollToInitial(hoursRef, hours.indexOf(selectedHour));
    scrollToInitial(minutesRef, parseInt(selectedMinute, 10));
  }, []);

  // console.log(typeof selectedMinute)

  // console.log('selected',selectedHour,selectedMinute,amPm)
  const formattedTime = `${selectedHour}:${selectedMinute}`;

  useEffect(() => {

    setSelectedTime(formattedTime)

  }, [selectedHour, selectedMinute])

  const scrollToInitial = (ref: any, index: number) => {
    ref.current?.scrollToOffset({
      offset: index * ITEM_HEIGHT,
      animated: false,
    });
  };

  const onScrollEnd = (event: any, data: any, setValue: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    if (index >= 0 && index < data.length) {
      setValue(data[index]);
    }
  };

  const renderItem = (item: any, selected: any) => {
    const isSelected = item === selected;
    return (
      <View style={styles.item}>
        <Text style={[styles.text, isSelected && styles.selectedText]}>{item}</Text>
      </View>
    );
  };

  // console.log(formattedTime)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/* Hours */}
        <FlatList
          ref={hoursRef}
          data={hours}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => renderItem(item, selectedHour)}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={(e) => onScrollEnd(e, hours, setSelectedHour)}
          contentContainerStyle={{
            paddingVertical: (responsiveHeight(40) - ITEM_HEIGHT) / 2,
          }}
        />

        <AppText
          title=":"
          textSize={3.5}
          textColor={AppColors.PRIMARY}
          textFontWeight
          style={{ marginHorizontal: responsiveWidth(1.5) }}
        />

        {/* Minutes */}
        <FlatList
          ref={minutesRef}
          data={minutes}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => renderItem(item, selectedMinute)}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={(e) => onScrollEnd(e, minutes, setSelectedMinute)}
          contentContainerStyle={{
            paddingVertical: (responsiveHeight(40) - ITEM_HEIGHT) / 2,
          }}
        />

        {/* AM/PM Toggle */}
        <View style={styles.amPmContainer}>
          {amPmOptions.map((opt) => (
            <Text
              key={opt}
              style={[styles.amPmText, amPm === opt && styles.selectedAmPmText]}
              onPress={() => setAmPm(opt)}
            >
              {opt}
            </Text>
          ))}
        </View>

        {/* Highlight overlay */}
        <View style={styles.overlay} pointerEvents="none" />
      </View>

      {/* Display formatted time */}
      {/* <Text style={styles.finalTime}>{formattedTime}</Text> */}
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    height: responsiveHeight(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveHeight(2.4),
    fontWeight: '500',
    color: '#999',
  },
  selectedText: {
    color: AppColors.PRIMARY,
    fontSize: responsiveHeight(3),
    fontWeight: '700',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -ITEM_HEIGHT / 2 }],
    height: ITEM_HEIGHT,
    width: '70%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#E6F7FF',
    borderWidth: 1,
    borderColor: AppColors.PRIMARY,
    opacity: 0.35,
  },
  amPmContainer: {
    marginRight: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  amPmText: {
    fontSize: responsiveHeight(2.4),
    color: '#999',
    textAlign: 'center',
    marginVertical: responsiveHeight(0.5),
  },
  selectedAmPmText: {
    color: AppColors.PRIMARY,
    fontWeight: '700',
  },
  finalTime: {
    marginTop: responsiveHeight(2),
    fontSize: responsiveHeight(3),
    fontWeight: '700',
    color: AppColors.PRIMARY,
  },
});
