import { Platform } from 'react-native';

export const OS_TYPE = {
  ANDROID: 'android',
  IOS: 'ios',
};

const useOsType = () => {
  const isIos = Platform.OS === OS_TYPE.IOS;
  const isAndroid = Platform.OS === OS_TYPE.ANDROID;
  return { isIos, isAndroid };
};

export default useOsType;
