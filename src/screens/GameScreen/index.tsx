import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {CustomButton} from '../../shared/components/CustomButton';
import {Header} from '../../shared/components/Header';
import {GameButtons} from './components/GameButtons';
import {styles} from './GameScreen.styles';

interface IProps {
  navigation: any;
}

const GameScreen: FC<IProps> = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Let's Play" />
      <GameButtons />
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {}}
          buttonText="Start Game"
          style={styles.startGameButton}
          textStyle={styles.homeButtonText}
        />
        <CustomButton
          onPress={goBack}
          buttonText="Home Page"
          style={styles.homeButton}
          textStyle={styles.homeButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;
