import { getProfile as getKakaoProfile, login, logout, unlink } from '@react-native-seoul/kakao-login';
import { useState } from 'react';

const useSocialLogin = () => {
  const [result, setResult] = useState<any>(null);
  const [kakaoToken, setKakaoToken] = useState<string>('');

  // Kakao login methods
  const signInWithKakao = async (): Promise<string> => {
    try {
      const info = await login();
      console.log(info);
      if (info) {
        setResult(info);
        setKakaoToken(info.accessToken);
        return info.accessToken;
      }
      return '';
    } catch (err) {
      console.log('signInWithKakao err', err);
      return '';
    }
  };
  const getProfileWithKakao = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();
      if (profile) {
        setResult(profile);
      }
    } catch (err) {
      console.log('getProfileWithKakao error', err);
    }
  };
  const unlinkKakao = async (): Promise<void> => {
    if (!kakaoToken) {
      return;
    }
    try {
      await unlink();
      setResult('');
    } catch (err) {
      console.log('unlinkKakao error', err);
    }
  };
  const signOutWithKakao = async (): Promise<void> => {
    if (!kakaoToken) {
      return;
    }
    try {
      await logout();
      setResult('');
    } catch (err) {
      console.log('signOutWithKakao error', err);
    }
  };

  return {
    result,
    signInWithKakao,
    getProfileWithKakao,
    unlinkKakao,
    signOutWithKakao,
  };
};

export default useSocialLogin;
