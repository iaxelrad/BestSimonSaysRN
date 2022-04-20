import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {routes} from '../../routes';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {IHighScore} from '../../shared/interfaces';
import {MAX_NUM_OF_RESULTS} from '../../shared/utils/constants';
import {getHighScores, sortScores} from '../../shared/utils/helpers';
import {CustomText} from '../../shared/components/CustomText';
import {styles} from './HighScoresScreen.styles';
import ButtonGroup from '../../shared/components/ButtonGroup';

const HighScoreScreen = () => {
  const navigation = useNavigation();

  const [highScores, setHighScores] = useState<IHighScore[]>([]);

  const goToHome = () => {
    navigation?.popToTop();
  };

  const goToNewGame = (): void => {
    navigation.navigate(routes.GAME);
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
    return (
      <View key={`${name}-separator-${index}`}>
        {index > 0 && <View style={styles.separator} />}
        <CustomText style={styles.score}>{`${
          index + 1
        }. ${name} - score: ${score}`}</CustomText>
      </View>
    );
  };

  const renderContent = () => {
    if (highScores.length === 0) {
      return (
        <CustomText h2 center style={styles.noScores}>
          There are currently no scores, You can be the first to be on the
          board!
        </CustomText>
      );
    }
    return (
      <ScrollView bounces={false}>
        {highScores
          .sort(sortScores)
          .slice(0, MAX_NUM_OF_RESULTS)
          .map(mapScores)}
      </ScrollView>
    );
  };

  return (
    <WrapperComponent headerTitle="Top Scores">
      <View style={styles.contentContainer}>{renderContent()}</View>
      <ButtonGroup
        onPressGreenButton={goToNewGame}
        greenButtonText="New Game"
        onPressRedButton={goToHome}
        redButtonText="Home Page"
      />
    </WrapperComponent>
  );
};

export default HighScoreScreen;
