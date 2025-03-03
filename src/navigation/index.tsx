import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import LoginScreen from '../screens/LoginScreen';

type AppStackParams = {
  Home: undefined;
  Questions: undefined;
  Login: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();

type AuthStackParams = {
  Login: undefined;
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Questions" component={QuestionsScreen} />
        <AppStack.Screen name="Home" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
