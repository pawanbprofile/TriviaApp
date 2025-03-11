import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useMemo, useState} from 'react';
import Colors from '../utils/Colors';
import useStatusBar from '../hooks/useStatusBar';
import {actions, fields, fonts, validations} from '../types/Constants';
import InputField from '../components/InputField';
import ButtonWithText from '../components/ButtonWithText';
import {useLoginMutation} from '../api/AuthSlice';
import LoaderStatus from '../components/LoaderStatus';
import {AuthContext} from '../services/AuthContext';
import {saveTokens} from '../services/KeyChainStorage';

const LoginScreen = ({navigation}) => {
  useStatusBar('dark-content', Colors.bkColor);
  const {isLoggedIn, updateLoginStatus} = useContext(AuthContext);
  const [triggerLogin, {isError, error, isLoading}] = useLoginMutation();
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const enableLogin = useMemo(() => {
    if (!!userName && !!password) {
      return (
        password?.length > validations.MIN_PASSWORD_LEN &&
        userName?.length > validations?.MIN_NAME_LEN
      );
    }
    return false;
  }, [password, userName]);

  const handleLogin = () => {
    if (!!userName && !!password) {
      triggerLogin({
        username: userName,
        password: password,
        expiresInMins: 10,
      }).then(response => {
        const {accessToken, refreshToken} = response?.data;
        if (!!accessToken && !!refreshToken) {
          saveTokens(accessToken, refreshToken);
          updateLoginStatus(true);
        }
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container]}>
      <View testID={'login-screen'} style={[styles.inner]}>
        <Image
          source={require('../../assets/images/TriviaLogo.png')}
          style={styles.logo}
        />
        <InputField
          testID={'name-field'}
          placeHolder={fields.enter_name}
          value={userName}
          onChangeText={input => setUserName(input)}
        />
        <InputField
          testID={'password-field'}
          placeHolder={fields.enter_password}
          value={password}
          isPassword={true}
          onChangeText={input => {
            setPassword(input);
          }}
        />
        {isError && error && (
          <Text style={styles.error}>{error?.data?.message}</Text>
        )}
        <ButtonWithText
          testID={'login-button'}
          title={actions.login}
          onPress={handleLogin}
          enabled={enableLogin}>
          {isLoading && enableLogin && (
            <LoaderStatus size={32} color={Colors.vanilla} />
          )}
        </ButtonWithText>
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
  error: {
    fontSize: 12,
    color: Colors.negative,
    fontWeight: '600',
    textAlign: 'left',
    textAlignVertical: 'center',
    marginTop: 12,
    width: '90%',
  },
});
