/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import AppColors from '../../utils/AppColors';
import AppButton from '../../components/AppButton';
import LineBreak from '../../components/LineBreak';

const GetStarted = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      key: 1,
      title: 'Welcome to Mind Monkey',
      text: 'track your daily moods',
      detail:
        'Mind Monkey helps you track, understand, and improve your moods effortlessly!',
    },
    {
      key: 2,
      title: 'gain valuable &',
      text: 'Detailed mood insights',
      detail:
        'Discover patterns in your emotions and take control of your mental well-being.',
    },
    {
      key: 3,
      title: 'Stay Motivated',
      text: 'With achievements',
      detail:
        'Take charge of your emotions—log, analyze, and grow with Mind Monkey.',
    },
  ];

  const renderDots = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(4),
      }}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={{
            width: responsiveWidth(7),
            height: 6,
            borderRadius: 4,
            backgroundColor:
              index === currentIndex ? AppColors.BTNCOLOURS : '#ccc',
            marginHorizontal: responsiveWidth(0.7),
          }}
        />
      ))}
    </View>
  );

  const renderItem = ({item}) => (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <ImageBackground
        source={AppImages.slider_bg}
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(60),
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            paddingHorizontal: responsiveWidth(5),
            paddingVertical: responsiveHeight(4),
          }}>
          <AppText
            title={item.title}
            textColor={AppColors.BLACK}
            textSize={3.5}
            textFontWeight
            textAlignment={'center'}
            textTransform={'capitalize'}
          />
          <AppText
            title={item.text}
            textColor={AppColors.BLACK}
            textSize={3.5}
            textFontWeight
            textAlignment={'center'}
            textTransform={'capitalize'}
          />
          <LineBreak space={3} />
          <AppText
            title={item.detail}
            textColor={AppColors.GRAY}
            textSize={2}
            lineHeight={3}
            textAlignment={'center'}
          />
          <LineBreak space={2.5} />
          <View>{renderDots()}</View>
          <LineBreak space={7} />
          <View>{renderCustomButtons()}</View>
        </View>
      </ImageBackground>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current?.goToSlide(currentIndex + 1, true);
    }
  };

  const handleSkip = () => {
    sliderRef.current?.goToSlide(slides.length - 1, true);
  };

  const handleDone = () => {
    navigation.navigate('GetStarted');
  };

  const renderCustomButtons = () => {
    if (currentIndex === 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: responsiveWidth(43)}}>
            <AppButton
              title="Skip"
              buttoWidth={43}
              textColor={AppColors.WHITE}
              btnBackgroundColor={AppColors.PRIMARY}
              handlePress={handleSkip}
            />
          </View>
          <View style={{width: responsiveWidth(43)}}>
            <AppButton
              title="Continue"
              buttoWidth={43}
              textColor={AppColors.WHITE}
              bgColor={AppColors.BTNCOLOURS}
              handlePress={handleNext}
            />
          </View>
        </View>
      );
    }

    if (currentIndex === 1) {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: responsiveWidth(43)}}>
            <AppButton
              title="Skip"
              buttoWidth={43}
              textColor={AppColors.WHITE}
              btnBackgroundColor={AppColors.PRIMARY}
              handlePress={handleSkip}
            />
          </View>
          <View style={{width: responsiveWidth(43)}}>
            <AppButton
              title="Continue"
              buttoWidth={43}
              textColor={AppColors.WHITE}
              bgColor={AppColors.BTNCOLOURS}
              handlePress={handleNext}
            />
          </View>
        </View>
      );
    }

    if (currentIndex === 2) {
      return (
        <AppButton
          title="Done"
          textColor={AppColors.WHITE}
          bgColor={AppColors.PRIMARY}
          handlePress={handleDone}
        />
      );
    }

    return null;
  };

  return (
    <View style={{flex: 1, backgroundColor: AppColors.PRIMARY}}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        onSlideChange={index => setCurrentIndex(index)}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
        dotStyle={{display: 'none'}}
        activeDotStyle={{display: 'none'}}
      />
    </View>
  );
};

export default GetStarted;
