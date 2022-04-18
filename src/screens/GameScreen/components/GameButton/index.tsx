import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {GameButtonModel} from '../../../../shared/utils/constants';
import {styles} from './GameButton.styles';

interface ButtonProps {
  color: GameButtonModel;
}

export const GameButton: FC<ButtonProps> = ({color}) => {
  const onPress = () => {
    console.log(color.color);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: color.color}]}
    />
  );
};
