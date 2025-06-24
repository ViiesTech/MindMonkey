import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or any icon set you use
import { responsiveHeight, responsiveWidth } from '../utils/Responsive_Dimensions';
import BackIcon from './AppTextComps/BackIcon';

const CustomHeaderProgress = ({currentStep = 1, totalSteps = 8, onBackPress}) => {
  const progress = currentStep / totalSteps;

  return (
    <View style={styles.container}>
      <BackIcon onBackPress={onBackPress}  />

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBackground}>
          <View style={[styles.progressFill, {flex: progress}]} />
          <View style={{flex: 1 - progress}} />
        </View>
      </View>

      <Text style={styles.stepText}>{`${currentStep} / ${totalSteps}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarContainer: {
    flex: 1,
    marginHorizontal: responsiveWidth(18),
  },
  progressBackground: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: '#f08080', // light red
    borderRadius: 4,
  },
  stepText: {
    fontWeight: '900',
  },
});

export default CustomHeaderProgress;
