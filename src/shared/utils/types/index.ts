import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackParams = {
  Home: undefined;
  Game: undefined;
  HighScores: undefined;
};
export type NavigationProp = NativeStackNavigationProp<StackParams>;
