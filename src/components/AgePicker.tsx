import React, {useRef, useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {responsiveHeight} from '../utils/Responsive_Dimensions';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = 50; // Adjust for spacing

const AgePicker = ({selectedAge,setSelectedAge}) => {
  const flatListRef = useRef(null);
  // const [selectedAge, setSelectedAge] = useState(27);

  const data = Array.from({length: 100}, (_, i) => i + 1);

  // console.log('age ===>',selectedAge)

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT - 4);
    setSelectedAge(data[index]);
  };

  useEffect(() => {
    // Scroll to default selectedAge
    const index = data.indexOf(selectedAge);
    flatListRef.current?.scrollToOffset({
      offset: index * ITEM_HEIGHT,
      animated: false,
    });
  }, []);

  const renderItem = ({item}: any) => {
    const isSelected = item === selectedAge;
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
        <Text style={styles.overlayText}>
          {selectedAge} <Text style={styles.years}>years</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(40),
    justifyContent: 'center',
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

export default AgePicker;
