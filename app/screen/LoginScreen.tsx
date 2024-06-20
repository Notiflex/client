import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './LgoinScreen.style';

export type RootStackParamList = {
  Login: undefined;
  Intro: undefined;
};
type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.pop(1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={[styles.goBackContainer]} onPress={handleGoBack}>
          <Text style={styles.goBack}>뒤로가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
