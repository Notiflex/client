import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppleImage from '../assets/images/apple.svg';
import GoogleImage from '../assets/images/google.svg';
import KakaoImage from '../assets/images/kakao.svg';
import NaverImage from '../assets/images/naver.svg';
import LogoImage from '../assets/images/notiflex.svg';
import useOsType from '../hooks/useOsType';
import useSocialLogin from '../hooks/useSocialLogin';
import { styles } from './LgoinScreen.style';

export type RootStackParamList = {
  Login: undefined;
  Intro: undefined;
};
type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  const { signInWithKakao, unlinkKakao, signOutWithKakao } = useSocialLogin();
  const { isIos } = useOsType();
  const handleKakaoLogin = async () => {
    try {
      await unlinkKakao();
      await signOutWithKakao();
      const kakaoToken = await signInWithKakao();
      if (kakaoToken) {
        const command = {
          token: kakaoToken,
        };
        console.log('command :>> ', command);
      }
    } catch (error: unknown) {
      console.log('error :>> ', error);
    }
  };
  const handleNaverLogin = () => {};
  const handleGoogleLogin = () => {};
  const handleAppleLogin = () => {};
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
        <View style={styles.logoContainer}>
          <Text style={styles.title}>처음 시작하는 푸시생활</Text>
          <LogoImage style={styles.logo} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.kakao]} onPress={handleKakaoLogin}>
            <KakaoImage style={styles.icon} />
            <Text style={styles.kakao}>카카오 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.naver]} onPress={handleNaverLogin}>
            <NaverImage style={styles.icon} />
            <Text style={styles.naver}>네이버 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.google, styles.border]} onPress={handleGoogleLogin}>
            <GoogleImage style={styles.icon} />
            <Text style={styles.google}>구글 로그인</Text>
          </TouchableOpacity>
          {isIos && (
            <TouchableOpacity style={[styles.button, styles.apple, styles.border]} onPress={handleAppleLogin}>
              <AppleImage style={styles.icon} />
              <Text style={styles.apple}>애플 로그인</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
