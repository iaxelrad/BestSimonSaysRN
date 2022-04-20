import {IHighScore} from '../../interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sleep = (time: number, gameLevel?: number) => {
  if (gameLevel) {
    if (gameLevel > 0 && gameLevel < 3) {
      return new Promise(resolve => setTimeout(resolve, time));
    } else if (gameLevel >= 3 && gameLevel < 6) {
      return new Promise(resolve => setTimeout(resolve, time * 0.9));
    } else if (gameLevel >= 6 && gameLevel < 9) {
      return new Promise(resolve => setTimeout(resolve, time * 0.75));
    } else {
      return new Promise(resolve => setTimeout(resolve, time * 0.5));
    }
  }
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getRandomInt = (min: number, max: number) => {
  const _min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - _min + 1)) + _min;
};

export const sortScores = (a: IHighScore, b: IHighScore) => b.score - a.score;

export const getHighScores = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('High Scores');
    return jsonValue != null
      ? (JSON.parse(jsonValue) as IHighScore[])
      : ([] as IHighScore[]);
  } catch (e) {
    console.log('Error reading high scores', e);
  }
};

export const setHighScores = async (value: IHighScore[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('High Scores', jsonValue);
  } catch (e) {
    console.log('Error setting high scores', e);
  }
};
