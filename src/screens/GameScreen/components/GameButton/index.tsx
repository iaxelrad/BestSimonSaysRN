import React from 'react';
import {Pressable} from 'react-native';
import {GameButtonModel} from '../../../../shared/utils/constants';
import {styles} from './GameButton.styles';

interface ButtonProps {
  color: GameButtonModel;
  setActiveButtonIndex: (index: number) => void;
  disabled: boolean;
  activeButtonIndex: number;
  index: number;
  handlePlayerNoteInput: (note: number) => void;
}

export const GameButton = ({
  color,
  setActiveButtonIndex,
  disabled,
  activeButtonIndex,
  index,
  handlePlayerNoteInput,
}: ButtonProps) => {
  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => setActiveButtonIndex(index)}
      onPressOut={() => setActiveButtonIndex(null)}
      onPress={() => handlePlayerNoteInput(index)}
      style={[
        styles.button,
        {
          backgroundColor: color.color,
          opacity: activeButtonIndex === index ? 0.5 : 1,
        },
      ]}
    />
  );
};
