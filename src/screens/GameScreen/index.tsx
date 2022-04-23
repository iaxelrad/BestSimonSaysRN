import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useGame} from '../../hooks/useGame';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {IHighScore} from '../../shared/interfaces';
import {getHighScores} from '../../shared/utils/helpers';
import {GameButtons} from './components/GameButtons';
import {GameState} from './components/GameState';
import {ScoreModal} from './components/ScoreModal';
import ButtonGroup from '../../shared/components/ButtonGroup';
import {MAX_NUM_OF_RESULTS} from '../../shared/utils/constants';
import {useTranslation} from 'react-i18next';

const GameScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [results, setResults] = useState<IHighScore[]>([]);
  const [isHighestScore, setIsHighestScore] = useState<boolean>(false);

  const [showNewScorePopup, setShowNewScorePopup] = useState<boolean>(false);
  const [isNewTopScore, setIsNewTopResult] = useState<boolean>(true);

  const [
    [activeButtonIndex, setActiveButtonIndex],
    gameStarted,
    playersTurn,
    gameLevel,
    playerLost,
    startTheGame,
    handlePlayerNoteInput,
  ] = useGame();

  const checkScore = async (score: number) => {
    const highScores = await getHighScores();
    const lowestScore = highScores?.[MAX_NUM_OF_RESULTS - 1]?.score ?? 0;
    const highestScore = highScores?.[0]?.score;
    const highestScoreAchieved = highestScore < score;
    if (score > lowestScore) {
      return {highScores, highestScoreAchieved};
    }
    return;
  };

  useEffect(() => {
    const playEnded = async () => {
      if (playerLost) {
        const retrieveHighScores = await checkScore(+gameLevel);
        if (retrieveHighScores) {
          setResults(retrieveHighScores.highScores);
          setIsHighestScore(retrieveHighScores.highestScoreAchieved);
          setShowNewScorePopup(true);
        } else {
          setIsNewTopResult(false);
        }
      }
    };
    playEnded();
  }, [playerLost, gameLevel]);

  const goHome = () => {
    navigation?.popToTop();
  };

  return (
    <WrapperComponent headerTitle={t('game_title')}>
      <ScoreModal
        highScores={results}
        score={gameLevel as number}
        showNewScorePopup={showNewScorePopup}
        setShowNewScorePopup={setShowNewScorePopup}
        isHighestScore={isHighestScore}
      />
      <GameState
        gameStarted={gameStarted as boolean}
        playerLost={playerLost as boolean}
        isNewTopScore={isNewTopScore as boolean}
        gameLevel={gameLevel as number}
        isHighestScore={isHighestScore}
      />
      <GameButtons
        setActiveButtonIndex={setActiveButtonIndex as (index: number) => void}
        handlePlayerNoteInput={
          handlePlayerNoteInput as (noteIndex: number) => void
        }
        disabled={(!gameStarted as boolean) || (!playersTurn as boolean)}
        activeButtonIndex={activeButtonIndex as number}
      />
      <ButtonGroup
        onPressGreenButton={startTheGame as () => Promise<void>}
        greenButtonText={t('game_start_button')}
        onPressRedButton={goHome}
        redButtonText={t('game_home_button')}
        disabled={!!gameStarted}
      />
    </WrapperComponent>
  );
};

export default GameScreen;
