import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GameScreen from './screens/GameScreen';
import HighScoreScreen from './screens/HighScoreScreen';
import HomeScreen from './screens/HomeScreen';
import {StackParams} from './shared/utils/types';

const Stack = createNativeStackNavigator<StackParams>();
const screenOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="HighScores" component={HighScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
