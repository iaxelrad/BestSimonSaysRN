import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
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

export const GameButton: FC<ButtonProps> = ({
  color,
  setActiveButtonIndex,
  disabled,
  activeButtonIndex,
  index,
  handlePlayerNoteInput,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPressIn={() => setActiveButtonIndex(index)}
      onPressOut={() => setActiveButtonIndex(null)}
      onPress={() => handlePlayerNoteInput(index)}
      style={[
        styles.button,
        {
          backgroundColor:
            activeButtonIndex === index ? color.lighterColor : color.color,
        },
      ]}
    />
  );
};
