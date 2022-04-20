import React from 'react';
import {View} from 'react-native';
import {gameButtons} from '../../../../shared/utils/constants';
import {GameButton} from '../GameButton';
import {styles} from './GameButtons.styles';

interface IProps {
  setActiveButtonIndex: (index: number) => void;
  handlePlayerNoteInput: (note: number) => void;
  disabled: boolean;
  activeButtonIndex: number;
}

export const GameButtons = (props: IProps) => {
  const {
    setActiveButtonIndex,
    handlePlayerNoteInput,
    disabled,
    activeButtonIndex,
  } = props;
  return (
    <View style={styles.container}>
      {gameButtons.map((color, index) => {
        return (
          <GameButton
            key={index}
            color={color}
            index={index}
            setActiveButtonIndex={setActiveButtonIndex}
            handlePlayerNoteInput={handlePlayerNoteInput}
            disabled={disabled}
            activeButtonIndex={activeButtonIndex}
          />
        );
      })}
    </View>
  );
};
