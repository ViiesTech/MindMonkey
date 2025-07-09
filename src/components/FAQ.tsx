import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '../utils/AppColors';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQ_DATA = [
  {
    id: '1',
    question: 'What is this app?',
    answer: 'This app helps you manage tasks efficiently and stay organized.',
  },
  {
    id: '2',
    question: 'How to sign up?',
    answer:
      'Click the Sign Up button and fill in your details to create an account.',
  },
  {
    id: '3',
    question: 'Is it free to use?',
    answer: 'Yes, the app is completely free to use with optional upgrades.',
  },
];

const FAQItem = ({item, isExpanded, onPress}: any) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.questionRow}>
          <Text style={styles.questionText}>{item.question}</Text>
          <Feather
            name={'chevron-down'}
            size={responsiveFontSize(3)}
            color={AppColors.GRAY}
          />
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.answerBox}>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
};

const FAQScreen = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <FlatList
      data={FAQ_DATA}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      renderItem={({item}) => (
        <FAQItem
          item={item}
          isExpanded={expandedId === item.id}
          onPress={() => toggleExpand(item.id)}
        />
      )}
    />
  );
};

export default FAQScreen;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    paddingVertical: responsiveHeight(2),
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
    elevation: 2,
  },
  questionRow: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  answerBox: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  answerText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
