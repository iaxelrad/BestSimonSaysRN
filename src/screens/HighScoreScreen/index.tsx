import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {routes} from '../../routes';
import {CustomButton} from '../../shared/components/CustomButton';
import {Header} from '../../shared/components/Header';
import {IHighScore} from '../../shared/interfaces';
import {MAX_NUM_OF_RESULTS} from '../../shared/utils/constants';
import {getHighScores, sortScores} from '../../shared/utils/helpers';

interface IProps {}

const HighScoreScreen: FC<IProps> = () => {
  const [highScores, setHighScores] = useState<IHighScore[]>([]);
  const navigation = useNavigation();
  const goToHome = () => {
    navigation?.popToTop();
  };

  useEffect(() => {
    const getScores = async () => {
      const scores = await getHighScores();
      setHighScores(scores);
    };
    getScores();
  }, []);

  const mapScores = (
    {name, score}: {name: string; score: number},
    index: number,
  ) => {
    return [
      index > 0 && <View key={`${name}-separator`} style={styles.separator} />,
      <Text key={name} style={styles.score}>{`${
        index + 1
      }. ${name} - score: ${score}`}</Text>,
    ];
  };

  const renderContent = () => (
    <ScrollView>
      {highScores.sort(sortScores).slice(0, MAX_NUM_OF_RESULTS).map(mapScores)}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Top Scores" />
      {renderContent()}
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            navigation.navigate(routes.GAME);
          }}
          buttonText="New Game"
          style={styles.homeButton}
          textStyle={styles.homeButtonText}
        />
        <CustomButton
          onPress={goToHome}
          buttonText="Home Page"
          style={styles.homeButton}
          textStyle={styles.homeButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default HighScoreScreen;

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
  homeButton: {
    backgroundColor: 'green',
  },
  homeButtonText: {
    color: 'white',
  },
  separator: {
    height: 2,
    backgroundColor: 'black',
  },
  score: {paddingVertical: 10, fontSize: 20},
});
