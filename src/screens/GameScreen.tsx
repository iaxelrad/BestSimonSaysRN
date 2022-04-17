import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface IProps {}

const GameScreen: FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
