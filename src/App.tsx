import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {routes} from './routes';
import GameScreen from './screens/GameScreen';
import HighScoreScreen from './screens/HighScoreScreen';
import HomeScreen from './screens/HomeScreen';

interface IProps {}

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

const App: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.HOME}
        screenOptions={screenOptions}>
        <Stack.Screen name={routes.HOME} component={HomeScreen} />
        <Stack.Screen name={routes.GAME} component={GameScreen} />
        <Stack.Screen name={routes.HIGH_SCORES} component={HighScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
