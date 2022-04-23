import React from 'react';
import {Image, View, I18nManager} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../routes';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {styles} from './HomeScreen.styles';
import ButtonGroup from '../../shared/components/ButtonGroup';
import {useTranslation} from 'react-i18next';
import {CustomButton} from '../../shared/components/CustomButton';

const HomeScreen = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();

  const goToNewGame = (): void => {
    navigation.navigate(routes.GAME);
  };

  const goToResults = (): void => {
    navigation.navigate(routes.HIGH_SCORES);
  };

  return (
    <WrapperComponent headerTitle={t('home_title')}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/simon-says-logo.png')}
        />
      </View>
      <ButtonGroup
        onPressGreenButton={goToNewGame}
        greenButtonText={t('home_new_game_button')}
        onPressRedButton={goToResults}
        redButtonText={t('home_high_scores_button')}
      />
      <CustomButton
        onPress={() =>
          i18n
            .changeLanguage(i18n.language === 'en' ? 'heb' : 'en')
            .then(() => {
              I18nManager.forceRTL(i18n.language === 'heb' ? true : false);
            })
        }
        buttonText={t('change_language')}
      />
    </WrapperComponent>
  );
};

export default HomeScreen;
