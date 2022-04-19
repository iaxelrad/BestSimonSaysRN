import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {routes} from '../../routes';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {CustomButton} from '../../shared/components/CustomButton';
import {IHighScore} from '../../shared/interfaces';
import {MAX_NUM_OF_RESULTS} from '../../shared/utils/constants';
import {getHighScores, sortScores} from '../../shared/utils/helpers';
import {styles} from './HighScoresScreen.styles';

interface IProps {}

const HighScoreScreen: FC<IProps> = () => {
  const [highScores, setHighScores] = useState<IHighScore[]>([]);
  const navigation = useNavigation();
  const goToHome = () => {
    navigation?.popToTop();
  };

  useEffect(() => {
    let isMounted = true;
    const getScores = async () => {
      const scores = await getHighScores();
      if (isMounted) {
        setHighScores(scores);
      }
    };
    getScores();
    return () => {
      isMounted = false;
    };
  }, [highScores]);

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
    <WrapperComponent headerTitle="Top Scores">
      {renderContent()}
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            navigation.navigate(routes.GAME);
          }}
          buttonText="New Game"
          style={styles.newGameButton}
          textStyle={styles.homeButtonText}
        />
        <CustomButton
          onPress={goToHome}
          buttonText="Home Page"
          style={styles.homeButton}
          textStyle={styles.homeButtonText}
        />
      </View>
    </WrapperComponent>
  );
};

export default HighScoreScreen;
