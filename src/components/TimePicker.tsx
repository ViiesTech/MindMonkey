import React, {useRef, useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = 50; // Adjust for spacing
const TimePicker = () => {
  const flatListRef = useRef(null);
  const [selectedTimeOne, setSelectedTimeOne] = useState(27);
  const [selectedTimeTwo, setSelectedTimeTwo] = useState(27);

  const data = Array.from({length: 100}, (_, i) => i + 1);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT - 4);
    setSelectedTimeOne(data[index]);
  };

  const handleScrollTwo = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT - 4);
    setSelectedTimeTwo(data[index]);
  };

  useEffect(() => {
    // Scroll to default selectedAge
    const index = data.indexOf(selectedTimeOne);
    flatListRef.current?.scrollToOffset({
      offset: index * ITEM_HEIGHT,
      animated: false,
    });
  }, []);

  useEffect(() => {
    // Scroll to default selectedAge
    const index = data.indexOf(selectedTimeTwo);
    flatListRef.current?.scrollToOffset({
      offset: index * ITEM_HEIGHT,
      animated: false,
    });
  }, []);

  const renderItem = ({item}: any) => {
    const isSelected = item === selectedTimeOne;
    return (
      <View style={styles.item}>
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {item}
        </Text>
      </View>
    );
  };

  const renderItemTwo = ({item}: any) => {
    const isSelected = item === selectedTimeTwo;
    return (
      <View style={styles.item}>
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={item => item.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={handleScroll}
          contentContainerStyle={{
            paddingVertical: height / 2 - ITEM_HEIGHT * 1.5, // centers item
          }}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{selectedTimeOne}</Text>
        </View>
      </View>
      <View style={{position: 'relative', bottom: responsiveHeight(1)}}>
      <AppText
        title={':'}
        textSize={3}
        textColor={AppColors.PRIMARY}
        textFontWeight
        />
        </View>
      <View>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={item => item.toString()}
          renderItem={renderItemTwo}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={handleScrollTwo}
          contentContainerStyle={{
            paddingVertical: height / 2 - ITEM_HEIGHT * 1.5, // centers item
          }}
        />
        <View style={[styles.overlay]}>
          <Text style={styles.overlayText}>
            {selectedTimeTwo} <Text style={styles.years}>PM</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(40),
    paddingHorizontal: responsiveWidth(25),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedText: {
    color: '#42C6FF',
    fontSize: 26,
  },
  overlay: {
    position: 'absolute',
    top: 125,
    width: 120,
    height: ITEM_HEIGHT,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    zIndex: 10,
  },
  overlayText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#42C6FF',
  },
  years: {
    fontSize: 14,
    color: '#aaa',
    fontWeight: 'normal',
  },
});
