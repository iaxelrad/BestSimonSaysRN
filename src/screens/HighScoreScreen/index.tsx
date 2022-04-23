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
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n';

const HighScoreScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

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
        <View
          style={{
            flexDirection: i18n.language === 'heb' ? 'row-reverse' : 'row',
            alignItems: 'center',
          }}>
          <CustomText style={styles.score}>{`${index + 1} `}</CustomText>
          <CustomText style={styles.score}>{`${name} ${t(
            'game_highscores_score',
          )}`}</CustomText>
          <CustomText style={styles.score}>{`${score}`}</CustomText>
        </View>
      </View>
    );
  };

  const renderContent = () => {
    if (highScores.length === 0) {
      return (
        <CustomText h2 center style={styles.noScores}>
          {t('game_highscores_emptyList')}
        </CustomText>
      );
    }
    return (
      <ScrollView
        bounces={false}
        contentContainerStyle={{
          justifyContent: 'flex-start',
        }}>
        {highScores
          .sort(sortScores)
          .slice(0, MAX_NUM_OF_RESULTS)
          .map(mapScores)}
      </ScrollView>
    );
  };

  return (
    <WrapperComponent headerTitle={t('game_highscores_title')}>
      {renderContent()}
      <ButtonGroup
        onPressGreenButton={goToNewGame}
        greenButtonText={t('game_highscores_new_game')}
        onPressRedButton={goToHome}
        redButtonText={t('game_highscores_home')}
      />
    </WrapperComponent>
  );
};

export default HighScoreScreen;
