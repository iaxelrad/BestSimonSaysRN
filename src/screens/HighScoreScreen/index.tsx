import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {routes} from '../../routes';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {CustomButton} from '../../shared/components/CustomButton';
import {IHighScore} from '../../shared/interfaces';
import {MAX_NUM_OF_RESULTS} from '../../shared/utils/constants';
import {getHighScores, sortScores} from '../../shared/utils/helpers';
import {CustomText} from '../../shared/components/CustomText';
import {globalStyles} from '../../shared/styles/GlobalStyles';
import {styles} from './HighScoresScreen.styles';

const HighScoreScreen = () => {
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
    return (
      <View key={`${name}-separator`}>
        {index > 0 && <View style={styles.separator} />}
        <CustomText key={name} style={styles.score}>{`${
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
      <View style={globalStyles.buttonContainer}>
        <CustomButton
          onPress={() => {
            navigation.navigate(routes.GAME);
          }}
          buttonText="New Game"
          style={globalStyles.greenBackground}
          textStyle={globalStyles.whiteText}
        />
        <CustomButton
          onPress={goToHome}
          buttonText="Home Page"
          style={globalStyles.redBackground}
          textStyle={globalStyles.whiteText}
        />
      </View>
    </WrapperComponent>
  );
};

export default HighScoreScreen;
