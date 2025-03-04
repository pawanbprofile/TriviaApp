import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import Colors from '../utils/Colors';
import useStatusBar from '../hooks/useStatusBar';
import {actions, fields, fonts} from '../types/Constants';
import InputField from '../components/InputField';
import ButtonWithText from '../components/ButtonWithText';

const LoginScreen = () => {
  useStatusBar('dark-content', Colors.bkColor);
  const handleLogin = () => {};
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const enableLogin = useMemo(() => {
    if (!!userName && !!password) {
      return password?.length > 5 && userName?.length > 6;
    }
    return false;
  }, [password, userName]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container]}>
      <View style={[styles.inner]}>
        <Image
          source={require('../../assets/images/TriviaLogo.png')}
          style={styles.logo}
        />
        <InputField
          placeHolder={fields.enter_name}
          value={userName}
          onChangeText={input => setUserName(input)}
        />
        <InputField
          placeHolder={fields.enter_password}
          value={password}
          isPassword={true}
          onChangeText={input => {
            setPassword(input);
          }}
        />
        <ButtonWithText
          title={actions.login}
          onPress={handleLogin}
          enabled={enableLogin}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bkColor,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logo: {width: 200, height: 200, resizeMode: 'contain'},
  title: {
    fontSize: 22,
    fontFamily: fonts.lato,
    color: Colors.easyColor,
    fontWeight: 'bold',
  },
});
