import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useGame} from '../../hooks/useGame';
import {CustomButton} from '../../shared/components/CustomButton';
import {CustomText} from '../../shared/components/CustomText';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {IHighScore} from '../../shared/interfaces';
import {globalStyles} from '../../shared/styles/GlobalStyles';
import {getHighScores} from '../../shared/utils/helpers';
import {GameButtons} from './components/GameButtons';
import {ScoreModal} from './components/ScoreModal';
import {styles} from './GameScreen.styles';

const GameScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState<IHighScore[]>([]);

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
        score={gameLevel as number}
        showNewScorePopup={showNewScorePopup}
        setShowNewScorePopup={setShowNewScorePopup}
      />
      {gameStarted && !playerLost && (
        <View style={styles.scoresContainer}>
          <CustomText center h2 style={styles.scoreText}>
            Game score: {gameLevel}
          </CustomText>
        </View>
      )}
      {playerLost && !isNewTopScore ? (
        <View style={styles.scoresContainer}>
          <CustomText center h2 style={styles.scoreText}>
            Game score: {gameLevel} Record wasn't broken
          </CustomText>
        </View>
      ) : !gameStarted && isNewTopScore ? (
        <View style={styles.scoresContainer}>
          <CustomText center h2 style={styles.scoreText}>
            Game score: {gameLevel}
          </CustomText>
        </View>
      ) : null}
      <GameButtons
        setActiveButtonIndex={setActiveButtonIndex as (index: number) => void}
        handlePlayerNoteInput={
          handlePlayerNoteInput as (noteIndex: number) => void
        }
        disabled={(!gameStarted as boolean) || (!playersTurn as boolean)}
        activeButtonIndex={activeButtonIndex as number}
      />
      <View style={globalStyles.buttonContainer}>
        <CustomButton
          disabled={disabled}
          onPress={startTheGame as () => Promise<void>}
          buttonText="Start Game"
          style={[globalStyles.greenBackground, disabled && styles.disabled]}
          textStyle={globalStyles.whiteText}
        />
        <CustomButton
          disabled={disabled}
          onPress={goHome}
          buttonText="Home Page"
          style={[globalStyles.redBackground, disabled && styles.disabled]}
          textStyle={globalStyles.whiteText}
        />
      </View>
    </WrapperComponent>
  );
};

export default GameScreen;
