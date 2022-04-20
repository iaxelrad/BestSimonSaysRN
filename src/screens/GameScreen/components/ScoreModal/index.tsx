import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Modal, Pressable, TextInput, View} from 'react-native';
import {routes} from '../../../../routes';
import {CustomButton} from '../../../../shared/components/CustomButton';
import {CustomText} from '../../../../shared/components/CustomText';
import {IHighScore} from '../../../../shared/interfaces';
import {globalStyles} from '../../../../shared/styles/GlobalStyles';
import {MAX_NUM_OF_RESULTS} from '../../../../shared/utils/constants';
import {setHighScores} from '../../../../shared/utils/helpers';
import {styles} from './ScoreModal.styles';

interface IProps {
  showNewScorePopup: boolean;
  setShowNewScorePopup: Function;
  score: number;
  highScores: IHighScore[];
}

export const ScoreModal = (props: IProps) => {
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

  useEffect(() => {
    if (playerName.length > 0) {
      setPlayerName('');
    }
  }, []);

  const onPressClose = () => {
    setShowNewScorePopup(!showNewScorePopup);
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
            You Scored a New Record!
          </CustomText>
          <CustomText center style={styles.text}>
            Your score is: {String(score)}
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
          <CustomButton
            textStyle={globalStyles.whiteText}
            buttonText="Enter"
            style={globalStyles.greenBackground}
            onPress={onPressEnter}
          />
          <CustomButton
            textStyle={globalStyles.whiteText}
            buttonText="Close Modal"
            style={globalStyles.redBackground}
            onPress={onPressClose}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
