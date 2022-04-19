import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {routes} from '../../routes';
import {CustomButton} from '../../shared/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './HomeScreen.styles';
import {WrapperComponent} from '../../shared/components/WrapperComponent';

interface IProps {}

const HomeScreen: FC<IProps> = () => {
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
    </WrapperComponent>
  );
};

export default HomeScreen;
