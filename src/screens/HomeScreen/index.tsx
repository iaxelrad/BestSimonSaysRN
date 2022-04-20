import React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from '../../shared/components/CustomButton';
import {routes} from '../../routes';
import {WrapperComponent} from '../../shared/components/WrapperComponent';
import {globalStyles} from '../../shared/styles/GlobalStyles';
import {styles} from './HomeScreen.styles';

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
      <View style={globalStyles.buttonContainer}>
        <CustomButton
          onPress={goToNewGame}
          buttonText="New Game"
          style={globalStyles.greenBackground}
          textStyle={globalStyles.whiteText}
        />
        <CustomButton
          onPress={goToResults}
          buttonText="High Scores"
          style={globalStyles.redBackground}
          textStyle={globalStyles.whiteText}
        />
      </View>
    </WrapperComponent>
  );
};

export default HomeScreen;
