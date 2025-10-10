import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export const useCustomNavigation = () => {
  const navigation = useNavigation();

  const navigateToRoute = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return {
    navigateToRoute,
    goBack,
    navigation,
  };
};

export const ShowToast = (message) => {
    return Toast.show({
        type: 'success',
        text1: message
    })
}