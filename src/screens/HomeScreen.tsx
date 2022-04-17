import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {routes} from '../routes';
import {CustomButton} from '../shared/CustomButton';

interface IProps {
  navigation: any;
}

const HomeScreen: FC<IProps> = ({navigation}) => {
  const goToNewGame = (): void => {
    navigation.navigate(routes.GAME);
  };

  const goToResults = (): void => {
    navigation.navigate(routes.HIGH_SCORES);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simon Says</Text>
      <CustomButton
        onPress={goToNewGame}
        buttonText="New Game"
        style={styles.newGameButton}
        textStyle={styles.newGameText}
      />
      <CustomButton
        onPress={goToResults}
        buttonText="High Scores"
        style={styles.resultsButton}
        textStyle={styles.newGameText}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginHorizontal: 32,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 32,
  },
  newGameButton: {
    backgroundColor: 'green',
  },
  resultsButton: {
    backgroundColor: 'red',
  },
  newGameText: {
    color: 'white',
  },
});
