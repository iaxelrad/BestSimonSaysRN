import {IHighScore} from '../../interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export const getRandomInt = (min: number, max: number) => {
  const _min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - _min + 1)) + _min;
};

export const sortScores = (a: IHighScore, b: IHighScore) => b.score - a.score;

export const getHighScores = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('High Scores');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
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
