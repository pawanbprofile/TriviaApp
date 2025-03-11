import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import LoginScreen from '../screens/LoginScreen';
import {useContext, useEffect, useState} from 'react';
import {getAccessToken} from '../services/KeyChainStorage';
import LoaderStatus from '../components/LoaderStatus';
import {StyleSheet, View} from 'react-native';
import {AuthContext} from '../services/AuthContext';
import {LEVEL} from '../types/Constants';

type AppStackParams = {
  Home: undefined;
  Questions: {level: LEVEL};
  Login: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();

const AppNavigator = () => (
  <AppStack.Navigator screenOptions={{headerShown: false}}>
    <AppStack.Screen name="Home" component={HomeScreen} />
    <AppStack.Screen name="Questions" component={QuestionsScreen} />
  </AppStack.Navigator>
);

type AuthStackParams = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();
const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

type RootStackParamsList = {
  Auth: undefined;
  App: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const {isLoggedIn} = useContext(AuthContext);
  console.log('isLoggedIn ', isLoggedIn);
  if (isLoggedIn === null || isLoggedIn === undefined) {
    return (
      <View style={styles.container}>
        <LoaderStatus />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <RootStack.Screen name={'App'} component={AppNavigator} />
        ) : (
          <RootStack.Screen name={'Auth'} component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default RootNavigator;
