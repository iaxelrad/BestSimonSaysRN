import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import {routes} from '../../../../routes';
import {CustomButton} from '../../../../shared/components/CustomButton';
import {IHighScore} from '../../../../shared/interfaces';
import {MAX_NUM_OF_RESULTS} from '../../../../shared/utils/constants';
import {setHighScores} from '../../../../shared/utils/helpers';
import {styles} from './ScoreModal.styles';

interface IProps {
  showNewScorePopup: boolean;
  setShowNewScorePopup: Function;
  score: number;
  highScores: IHighScore[];
}

export const ScoreModal: FC<IProps> = props => {
  const navigation = useNavigation();

  const {showNewScorePopup, setShowNewScorePopup, score, highScores} = props;
  const [playerName, setPlayerName] = useState<string>('');

  const onPressEnter = async () => {
    highScores.push({name: playerName, score});
    highScores.sort((a: IHighScore, b: IHighScore) => b.score - a.score);
    highScores.splice(MAX_NUM_OF_RESULTS);
    await setHighScores(props.highScores);
    setShowNewScorePopup(!showNewScorePopup);
    navigation.navigate(routes.HIGH_SCORES);
  };

  const onPressClose = () => {
    setShowNewScorePopup(!showNewScorePopup);
  };

  return (
    <Modal animationType="slide" transparent={true}>
      <Pressable
        style={styles.background}
        onPress={event => {
          if (event.target === event.currentTarget) {
            setShowNewScorePopup(!showNewScorePopup);
          }
        }}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Sorry but you loose!</Text>
          <Text style={styles.text}>Your score is: {String(score)}</Text>
          <Text style={styles.text}>Please enter you name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter your name'}
              value={playerName}
              onChangeText={setPlayerName}
            />
          </View>
          <CustomButton
            textStyle={styles.textStyle}
            buttonText="Enter"
            style={styles.enterButton}
            onPress={onPressEnter}
          />
          <CustomButton
            textStyle={styles.textStyle}
            buttonText="Close Modal"
            style={styles.closeButton}
            onPress={onPressClose}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
