import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {useGame} from '../../hooks/useGame';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {CustomButton} from '../../shared/components/CustomButton';
import {IHighScore} from '../../shared/interfaces';
import {getHighScores} from '../../shared/utils/helpers';
import {GameButtons} from './components/GameButtons';
import {ScoreModal} from './components/ScoreModal';
import {styles} from './GameScreen.styles';
import {CustomText} from '../../shared/components/CustomText';

interface IProps {}

const GameScreen: FC<IProps> = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState<IHighScore[]>([]);

  const [showNewScorePopup, setShowNewScorePopup] = useState<boolean>(false);
  const [isNewTopScore, setIsNewTopResult] = useState<boolean>(false);

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
    const lowestScore = highScores?.[0]?.score ?? 0;
    if (score > lowestScore) {
      return highScores;
    }
    return;
  };

  useEffect(() => {
    const playEnded = async () => {
      if (playerLost) {
        const retrieveHighScores = await checkScore(+gameLevel);
        if (retrieveHighScores) {
          setResults(retrieveHighScores);
          setIsNewTopResult(true);
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

  const disabled = !!gameStarted;
  return (
    <WrapperComponent headerTitle="Let's Play">
      <ScoreModal
        highScores={results}
        score={+gameLevel}
        showNewScorePopup={showNewScorePopup}
        setShowNewScorePopup={setShowNewScorePopup}
      />
      {gameStarted && !playerLost && (
        <View style={styles.scoresContainer}>
          <CustomText center style={styles.scoreText}>
            Game score: {gameLevel}
          </CustomText>
        </View>
      )}
      {playerLost && !isNewTopScore ? (
        <View style={styles.scoresContainer}>
          <CustomText center style={styles.scoreText}>
            Game score: {gameLevel} Record wasn't broken
          </CustomText>
        </View>
      ) : !gameStarted && isNewTopScore ? (
        <View style={styles.scoresContainer}>
          <CustomText center style={styles.scoreText}>
            Game score: {gameLevel}
          </CustomText>
        </View>
      ) : null}
      <GameButtons
        setActiveButtonIndex={setActiveButtonIndex}
        handlePlayerNoteInput={handlePlayerNoteInput}
        disabled={!gameStarted || !playersTurn}
        activeButtonIndex={activeButtonIndex}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={disabled}
          onPress={startTheGame}
          buttonText="Start Game"
          style={[styles.startGameButton, disabled && {opacity: 0.5}]}
          textStyle={styles.homeButtonText}
        />
        <CustomButton
          disabled={disabled}
          onPress={goHome}
          buttonText="Home Page"
          style={[styles.homeButton, disabled && styles.disabled]}
          textStyle={styles.homeButtonText}
        />
      </View>
    </WrapperComponent>
  );
};

export default GameScreen;
