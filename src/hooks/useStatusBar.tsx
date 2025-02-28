import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';

const useStatusBar = (style: StatusBarStyle, backgroundColor: string) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style);
      StatusBar.setBackgroundColor(backgroundColor);
    }, []),
  );
};

export default useStatusBar;
