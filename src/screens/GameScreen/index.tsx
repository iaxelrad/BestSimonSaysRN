import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useGame} from '../../hooks/useGame';
import {CustomButton} from '../../shared/components/CustomButton';
import {Header} from '../../shared/components/Header';
import {Nav} from '../../shared/types';
import {GameButtons} from './components/GameButtons';
import {styles} from './GameScreen.styles';

interface IProps {}

const GameScreen: FC<IProps> = () => {
  const navigation = useNavigation<Nav>();

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

  const goBack = () => {
    navigation?.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Let's Play" />
      <GameButtons
        setActiveButtonIndex={setActiveButtonIndex}
        handlePlayerNoteInput={handlePlayerNoteInput}
        disabled={!gameStarted || !playersTurn}
        activeButtonIndex={activeButtonIndex}
      />
      {gameStarted ? (
        <View style={!gameStarted && styles.invisible}>
          <Text>Game score: {gameLevel}</Text>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={startTheGame}
            buttonText="Start Game"
            style={styles.startGameButton}
            textStyle={styles.homeButtonText}
          />
          <CustomButton
            onPress={goBack}
            buttonText="Home Page"
            style={styles.homeButton}
            textStyle={styles.homeButtonText}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default GameScreen;
