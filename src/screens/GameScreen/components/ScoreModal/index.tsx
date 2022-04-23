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
import {useTranslation} from 'react-i18next';

interface IProps {
  showNewScorePopup: boolean;
  setShowNewScorePopup: Function;
  score: number;
  highScores: IHighScore[];
  isHighestScore: boolean;
}

export const ScoreModal = (props: IProps) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
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
              ? t('game_popup_highest_score')
              : t('game_popup_new_score')}
          </CustomText>
          <CustomText center style={styles.text}>
            {t('game_popup_score') + score}
          </CustomText>
          <CustomText center style={styles.text}>
            {t('game_popup_name_input')}
          </CustomText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={t('game_popup_name_input')}
              value={playerName}
              onChangeText={setPlayerName}
            />
          </View>
          <ButtonGroup
            containerStyle={styles.modalButtons}
            onPressGreenButton={onPressEnter}
            greenButtonText={t('game_popup_enter')}
            onPressRedButton={onPressClose}
            redButtonText={t('game_popup_close')}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
