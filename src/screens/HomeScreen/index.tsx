import React, {FC} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {routes} from '../../routes';
import {CustomButton} from '../../shared/components/CustomButton';
import {Header} from '../../shared/components/Header';
import {useNavigation} from '@react-navigation/native';
import {styles} from './HomeScreen.styles';

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
    <SafeAreaView style={styles.container}>
      <Header title="Simon Says" />
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
    </SafeAreaView>
  );
};

export default HomeScreen;
