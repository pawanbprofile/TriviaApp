import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

type AppStackParams = {
  Home: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParams>();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Home" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
