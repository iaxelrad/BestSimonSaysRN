import React from 'react';
import {View} from 'react-native';
import {gameButtons} from '../../../../shared/utils/constants';
import {GameButton} from '../GameButton';
import {styles} from './GameButtons.styles';

export const GameButtons = () => {
  return (
    <View style={styles.container}>
      {gameButtons.map((color, index) => {
        return <GameButton key={index} color={color} />;
      })}
    </View>
  );
};
