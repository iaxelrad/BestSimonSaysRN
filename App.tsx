import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import GameScreen from './src/screens/GameScreen';
import HighScoreScreen from './src/screens/HighScoreScreen';
import HomeScreen from './src/screens/HomeScreen';

interface IProps {}

const Stack = createNativeStackNavigator();

const App: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="HighScores" component={HighScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
