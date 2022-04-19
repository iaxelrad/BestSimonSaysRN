import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useGame} from '../../hooks/useGame';
import {CustomButton} from '../../shared/components/CustomButton';
import {Header} from '../../shared/components/Header';
import {IHighScore} from '../../shared/interfaces';
import {getHighScores} from '../../shared/utils/helpers';
import {GameButtons} from './components/GameButtons';
import {ScoreModal} from './components/ScoreModal';
import {styles} from './GameScreen.styles';

interface IProps {}

const GameScreen: FC<IProps> = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState<IHighScore[]>([]);

  const [showNewScorePopup, setShowNewScorePopup] = useState<boolean>(false);

  const [
    [activeButtonIndex, setActiveButtonIndex],
    gameStarted,
    playersTurn,
    gameLevel,
    playerLost,
    startTheGame,
    handlePlayerNoteInput,
  ] = useGame();

  useEffect(() => {
    const playEnded = async () => {
      if (playerLost) {
        setShowNewScorePopup(true);
        setResults(await getHighScores());
      }
    };
    playEnded();
  }, [playerLost]);

  const goBack = () => {
    navigation?.goBack();
  };

  const disabled = !!gameStarted;
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Let's Play" />
      {showNewScorePopup && (
        <ScoreModal
          highScores={results}
          score={+gameLevel}
          showNewScorePopup={showNewScorePopup}
          setShowNewScorePopup={setShowNewScorePopup}
        />
      )}
      {gameStarted && (
        <View style={styles.scoresContainer}>
          <Text style={styles.scoreText}>Game score: {gameLevel}</Text>
        </View>
      )}
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
          onPress={goBack}
          buttonText="Home Page"
          style={[styles.homeButton, disabled && styles.disabled]}
          textStyle={styles.homeButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;
