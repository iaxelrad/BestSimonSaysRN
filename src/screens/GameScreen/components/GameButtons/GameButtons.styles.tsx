import {StyleSheet} from 'react-native';
import {gameButtons} from '../../../../shared/utils/constants';

const gameContainerSize = 1000 / gameButtons.length;

export const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    width: gameContainerSize,
    height: gameContainerSize,
    borderRadius: gameContainerSize / 2,
    borderWidth: 9,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
