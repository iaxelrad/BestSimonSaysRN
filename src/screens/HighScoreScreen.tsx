import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface IProps {}

const HighScoreScreen: FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text>High Score Screen</Text>
    </View>
  );
};

export default HighScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
