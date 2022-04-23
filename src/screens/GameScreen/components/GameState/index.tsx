import {View} from 'react-native';
import React from 'react';
import {CustomText} from '../../../../shared/components/CustomText';
import {styles} from './GameState.styles';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  const gameStateMessage = () => {
    //Before game starts when game screen first appears
    if (!gameStarted && !playerLost) {
      return t('game_state_start_game');
    }
    // During game play
    if (gameStarted) {
      return t('game_state_game_play') + gameLevel;
    }
    //Score is added to top scores list
    if (isNewTopScore) {
      //Highest Score is added to top of the top scores list
      if (isHighestScore) {
        return (
          t('game_state_game_play') + gameLevel + t('game_state_highest_score')
        );
      }
      //Not highest Score is added to top of the top scores list
      if (!isHighestScore) {
        return (
          t('game_state_game_play') + gameLevel + t('game_state_new_score')
        );
      }
    }
    // After game ends with no new record
    if (!isNewTopScore) {
      return t('game_state_game_play') + gameLevel + t('game_state_no_record');
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
