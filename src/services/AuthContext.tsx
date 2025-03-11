import {createContext, useEffect, useState} from 'react';
import {getAccessToken, getRefreshToken, removeTokens} from './KeyChainStorage';

type InitialState = {
  isLoggedIn: boolean | null;
  updateLoginStatus: (status: boolean) => void;
  logOut: () => void;
};

export const AuthContext = createContext<InitialState | undefined>(undefined);

export const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const checkIsLoggedIn = async () => {
    const accessToken = await getAccessToken();
    const refreshToken = await getRefreshToken();
    setIsLoggedIn(!!accessToken && !!refreshToken);
  };
  useEffect(() => {
    checkIsLoggedIn();
  }, []);
  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    removeTokens();
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        updateLoginStatus: handleLogin,
        logOut: handleLogOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
