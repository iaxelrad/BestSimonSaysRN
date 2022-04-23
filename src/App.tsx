import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {routes} from './routes';
import GameScreen from './screens/GameScreen';
import HighScoreScreen from './screens/HighScoreScreen';
import HomeScreen from './screens/HomeScreen';
import './i18n';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

const App = () => {
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
