import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, Pressable, TextInput, View} from 'react-native';
import {routes} from '../../../../routes';
import {CustomText} from '../../../../shared/components/CustomText';
import ButtonGroup from '../../../../shared/components/ButtonGroup';
import {IHighScore} from '../../../../shared/interfaces';
import {MAX_NUM_OF_RESULTS} from '../../../../shared/utils/constants';
import {setHighScores} from '../../../../shared/utils/helpers';
import {styles} from './ScoreModal.styles';

interface IProps {
  showNewScorePopup: boolean;
  setShowNewScorePopup: Function;
  score: number;
  highScores: IHighScore[];
  isHighestScore: boolean;
}

export const ScoreModal = (props: IProps) => {
  const navigation = useNavigation();

  const {
    showNewScorePopup,
    setShowNewScorePopup,
    score,
    highScores,
    isHighestScore,
  } = props;
  const [playerName, setPlayerName] = useState<string>('');

  const onPressEnter = async () => {
    highScores.push({name: playerName, score});
    highScores.sort((a: IHighScore, b: IHighScore) => b.score - a.score);
    highScores.splice(MAX_NUM_OF_RESULTS);
    await setHighScores(props.highScores);
    onPressClose();
    navigation.navigate(routes.HIGH_SCORES);
  };

  const onPressClose = () => {
    setShowNewScorePopup(!showNewScorePopup);
    setPlayerName('');
  };

  if (!showNewScorePopup) {
    return null;
  }

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
          <CustomText center style={styles.text}>
            {isHighestScore
              ? 'Highest Score added to top scores'
              : 'New Score added to top scores!'}
          </CustomText>
          <CustomText center style={styles.text}>
            {`Your score is: ${score}`}
          </CustomText>
          <CustomText center style={styles.text}>
            Please enter you name
          </CustomText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter your name'}
              value={playerName}
              onChangeText={setPlayerName}
            />
          </View>
          <ButtonGroup
            containerStyle={styles.modalButtons}
            onPressGreenButton={onPressEnter}
            greenButtonText="Enter"
            onPressRedButton={onPressClose}
            redButtonText="Close"
          />
        </View>
      </Pressable>
    </Modal>
  );
};
