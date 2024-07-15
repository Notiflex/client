import { NAVER_APP_NAME, NAVER_KEY, NAVER_SECRET, NAVER_SERVICE_URL_SCHEME } from '@env';
import { getProfile as getKakaoProfile, login, logout, unlink } from '@react-native-seoul/kakao-login';
import NaverLogin from '@react-native-seoul/naver-login';
import { useState } from 'react';

const useSocialLogin = () => {
  const [result, setResult] = useState<any>(null);
  const [kakaoToken, setKakaoToken] = useState<string>('');
  const [naverToken, setNaverToken] = useState<string>('');

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

  // Naver login methods
  const signInWithNaver = async (): Promise<string> => {
    try {
      const { failureResponse, successResponse } = await NaverLogin.login({
        appName: NAVER_APP_NAME,
        consumerKey: NAVER_KEY,
        consumerSecret: NAVER_SECRET,
        serviceUrlScheme: NAVER_SERVICE_URL_SCHEME,
      });
      if (successResponse) {
        const info = successResponse;
        if (info) {
          setResult(info);
        }
        return info.accessToken;
      }
      if (failureResponse) {
        console.log('failureResponse error', failureResponse);
      }
      return '';
    } catch (err) {
      console.log('signInWithNaver error', err);
      return '';
    }
  };
  const getProfileWithNaver = async (): Promise<void> => {
    try {
      const profile = await NaverLogin.getProfile(naverToken);
      if (profile) {
        setResult(profile);
      }
    } catch (err) {
      console.log('getProfileWithNaver error', err);
    }
  };
  const unlinkNaver = async (): Promise<void> => {
    if (!naverToken) {
      return;
    }
    try {
      await NaverLogin.deleteToken();
      setResult('');
      setNaverToken('');
    } catch (err) {
      console.log('unlinkNaver error', err);
    }
  };
  const signOutWithNaver = async (): Promise<void> => {
    if (!naverToken) {
      return;
    }
    try {
      await NaverLogin.logout();
      setResult('');
      setNaverToken('');
    } catch (err) {
      console.log('signOutWithNaver error', err);
    }
  };

  return {
    result,
    signInWithKakao,
    getProfileWithKakao,
    unlinkKakao,
    signOutWithKakao,
    signInWithNaver,
    getProfileWithNaver,
    unlinkNaver,
    signOutWithNaver,
  };
};

export default useSocialLogin;
