import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {routes} from '../routes';
import {CustomButton} from '../shared/components/CustomButton';
import {Header} from '../shared/components/Header';

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
    <SafeAreaView style={styles.container}>
      <Header title="Simon Says" />
      <View style={styles.buttonContainer}>
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    marginHorizontal: 32,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {flex: 1},
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
