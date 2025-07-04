/* eslint-disable curly */
// SavedToFavoritesPopup.tsx
import React, {useEffect} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';

type Props = {
  visible: boolean;
  isChangeFavText?: boolean;
  onHide: Function;
};

const SavedToFavoritesPopup = ({visible, onHide, isChangeFavText}: Props) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(1500),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => onHide && onHide());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.popup,
        {opacity},
        {
          top: isChangeFavText ? responsiveHeight(16) : responsiveHeight(35),
        },
      ]}>
      <AntDesign
        name={'star'}
        size={responsiveFontSize(3)}
        color={AppColors.BTNCOLOURS}
      />
      <Text style={styles.text}>
        {isChangeFavText ? 'Removed to favorites' : 'Saved to favorites'}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    right: 20,
    backgroundColor: '#E5E5E5',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 4,
    zIndex: 100,
  },
  text: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(2),
  },
});

export default SavedToFavoritesPopup;
