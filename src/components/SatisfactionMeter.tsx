import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const { width } = Dimensions.get('window');

const slices = [
  { emoji: '😡', color: '#d72e2c', title: 'Very Angry' },
  { emoji: '☹️', color: '#ff6259', title: 'Sad' },
  { emoji: '😐', color: '#f19c4b', title: 'Neutral' },
  { emoji: '🙂', color: '#68ca6f', title: 'Happy' },
  { emoji: '😁', color: '#509d55', title: 'Very Happy' },
];

const SLICE_ANGLE = 180 / slices.length;

const EmojiIntroSlider = () => {
  const rotation = useRef(new Animated.Value(-90)).current;

  const onSlideChange = (index) => {
    const angle = -90 + index * SLICE_ANGLE;
    Animated.timing(rotation, {
      toValue: angle,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item, index }) => {
    const rotate = -90 + index * SLICE_ANGLE;

    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.halfCircle}>
          {slices.map((slice, i) => {
            const sliceRotate = -90 + i * SLICE_ANGLE;
            return (
              <View
                key={i}
                style={[
                  styles.slice,
                  {
                    backgroundColor: slice.color,
                    transform: [{ rotate: `${sliceRotate}deg` }],
                  },
                ]}
              >
                <Text
                  style={[
                    styles.emoji,
                    {
                      transform: [{ rotate: `${-sliceRotate}deg` }],
                    },
                  ]}
                >
                  {slice.emoji}
                </Text>
              </View>
            );
          })}

          {/* Pointer */}
          <Animated.View
            style={[
              styles.pointer,
              {
                transform: [
                  { translateX: -10 },
                  {
                    rotate: rotation.interpolate({
                      inputRange: [-90, 90],
                      outputRange: ['-90deg', '90deg'],
                    }),
                  },
                ],
              },
            ]}
          />

          <View style={styles.centerCircle} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        data={slices}
        renderItem={renderItem}
        onSlideChange={onSlideChange}
        showNextButton={true}
        showDoneButton={false}
        dotStyle={{ backgroundColor: '#ccc' }}
        activeDotStyle={{ backgroundColor: '#2962FF' }}
      />
    </SafeAreaView>
  );
};

export default EmojiIntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262638',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  halfCircle: {
    width: width - 60,
    height: (width - 60) / 2,
    borderTopLeftRadius: width,
    borderTopRightRadius: width,
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#444',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  slice: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
  emoji: {
    fontSize: 28,
    paddingBottom: 28,
    color: '#000',
  },
  pointer: {
    width: 20,
    height: 80,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -20,
    left: '50%',
    borderRadius: 10,
    zIndex: 5,
    transformOrigin: 'bottom center',
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  centerCircle: {
    position: 'absolute',
    bottom: -25,
    left: '50%',
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
    transform: [{ translateX: -20 }],
    zIndex: 6,
  },
});
