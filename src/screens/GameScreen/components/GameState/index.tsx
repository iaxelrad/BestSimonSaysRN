import {View} from 'react-native';
import React from 'react';
import {CustomText} from '../../../../shared/components/CustomText';
import {styles} from './GameState.styles';

interface IProps {
  gameStarted: boolean;
  playerLost: boolean;
  isNewTopScore: boolean;
  gameLevel: number;
  isHighestScore: boolean;
}

export const GameState = ({
  gameStarted,
  playerLost,
  isNewTopScore,
  gameLevel,
  isHighestScore,
}: IProps) => {
  const gameStateMessage = () => {
    //Before game starts when game screen first appears
    if (!gameStarted && !playerLost) {
      return 'Press the start button below to start';
    }
    // During game play
    if (gameStarted) {
      return `Game score: ${gameLevel}`;
    }
    //Score is added to top scores list
    if (isNewTopScore) {
      //Highest Score is added to top of the top scores list
      if (isHighestScore) {
        return `Game score: ${gameLevel}\nHighest Score added to top scores`;
      }
      //Not highest Score is added to top of the top scores list
      if (!isHighestScore) {
        return `Game score: ${gameLevel}\nNew Score added to top scores`;
      }
    }
    // After game ends with no new record
    if (!isNewTopScore) {
      return `Game score: ${gameLevel}\nRecord wasn't broken`;
    }
    // After game ends with score entering the list
  };

  return (
    <View style={styles.scoresContainer}>
      <CustomText center h2 style={styles.scoreText}>
        {gameStateMessage()}
      </CustomText>
    </View>
  );
};
