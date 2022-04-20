import React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../routes';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {styles} from './HomeScreen.styles';
import ButtonGroup from '../../shared/components/ButtonGroup';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToNewGame = (): void => {
    navigation.navigate(routes.GAME);
  };

  const goToResults = (): void => {
    navigation.navigate(routes.HIGH_SCORES);
  };

  return (
    <WrapperComponent headerTitle="Simon Says">
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/simon-says-logo.png')}
        />
      </View>
      <ButtonGroup
        onPressGreenButton={goToNewGame}
        greenButtonText="New Game"
        onPressRedButton={goToResults}
        redButtonText="High Scores"
      />
    </WrapperComponent>
  );
};

export default HomeScreen;
