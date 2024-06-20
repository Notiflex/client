import { StyleSheet } from 'react-native';

import { fonts } from '../utils/common';
import { scale, textScale } from '../utils/ratioCalculator';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    padding: scale(10),
    justifyContent: 'center',
  },
  goBackContainer: {
    position: 'absolute',
    top: scale(24),
    right: scale(20),
  },
  goBack: {
    color: '#CED4DA',
    fontSize: textScale(14),
    textDecorationLine: 'underline',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: scale(128),
    height: scale(128),
    marginBottom: scale(120),
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: scale(20),
    fontSize: textScale(20),
    color: '#343A40',
    fontFamily: fonts.PretendardMedium,
  },
  buttonContainer: {
    display: 'flex',
    gap: scale(10),
  },
  button: {
    height: scale(50),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: scale(12),
    paddingVertical: scale(11),
    paddingHorizontal: scale(20),
  },
  icon: {
    position: 'absolute',
    left: scale(24),
    width: scale(20),
    height: scale(20),
  },
  kakao: {
    fontSize: textScale(16),
    fontFamily: fonts.PretendardBold,
    backgroundColor: '#fde40b',
    color: '#212529',
  },
  google: {
    fontSize: textScale(16),
    fontFamily: fonts.PretendardBold,
    backgroundColor: '#FFFFFF',
    color: '#495057',
  },
  naver: {
    fontSize: textScale(16),
    fontFamily: fonts.PretendardBold,
    backgroundColor: '#03c75a',
    color: '#FFFFFF',
  },
  apple: {
    fontSize: textScale(16),
    fontFamily: fonts.PretendardBold,
    backgroundColor: '#FFFFFF',
    color: '#495057',
  },
  border: {
    borderColor: '#ced4da',
    borderWidth: scale(1),
  },
});
