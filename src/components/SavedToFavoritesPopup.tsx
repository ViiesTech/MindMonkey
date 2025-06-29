/* eslint-disable curly */
// SavedToFavoritesPopup.tsx
import React, { useEffect } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';

type Props = {
    visible: boolean,
    onHide: Function,
}

const SavedToFavoritesPopup = ({ visible, onHide }: Props) => {
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
    <Animated.View style={[styles.popup, { opacity }]}>
      <Text style={styles.text}>Saved to favorites</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    top: 20,
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
  },
});

export default SavedToFavoritesPopup;
