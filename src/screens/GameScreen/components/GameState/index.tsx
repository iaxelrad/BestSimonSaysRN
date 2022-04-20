import {View} from 'react-native';
import React from 'react';
import {CustomText} from '../../../../shared/components/CustomText';
import {styles} from './GameState.styles';

interface IProps {
  gameStarted: boolean;
  playerLost: boolean;
  isNewTopScore: boolean;
  gameLevel: number;
}

export const GameState = ({
  gameStarted,
  playerLost,
  isNewTopScore,
  gameLevel,
}: IProps) => {
  const gameStateMessage = () => {
    //Before game starts when game screen first appears
    if (!gameStarted && !playerLost) {
      return 'Press the green button to start';
    }
    // During game play
    if (gameStarted) {
      return `Game score: ${gameLevel}`;
    }
    // After game ends with no new record
    if (!isNewTopScore) {
      return `Game score: ${gameLevel} Record wasn't broken`;
    } else {
      // After game ends with new record
      return `Game score: ${gameLevel} - New record!`;
    }
  };

  return (
    <View style={styles.scoresContainer}>
      <CustomText center h2 style={styles.scoreText}>
        {gameStateMessage()}
      </CustomText>
    </View>
  );
};
