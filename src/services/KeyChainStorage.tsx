import KeyChain from 'react-native-keychain';
import {storage} from '../types/Constants';

export const saveTokens = async (accessToken: string, refreshToken: string) => {
  try {
    await KeyChain.setGenericPassword(storage.ACCESS_TOKEN, accessToken);
    await KeyChain.setGenericPassword(storage.REFRESH_TOKEN, refreshToken, {
      service: storage.REFRESH_TOKEN,
    });
  } catch (error) {
    console.log('error saving tokens to storage');
  }
};

export const getAccessToken = async () => {
  const credentials = await KeyChain.getGenericPassword();
  if (!credentials) {
    return null;
  }
  return credentials.password;
};

export const getRefreshToken = async () => {
  const credentials = await KeyChain.getGenericPassword({
    service: storage.REFRESH_TOKEN,
  });
  if (!credentials) {
    return null;
  }
  return credentials.password;
};

export const removeTokens = async () => {
  try {
    await KeyChain.resetGenericPassword();
    await KeyChain.resetGenericPassword({service: storage.REFRESH_TOKEN});
    return {success: false};
  } catch (error) {
    return {success: false};
  }
};
