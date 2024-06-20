import { StyleSheet } from 'react-native';

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
});
