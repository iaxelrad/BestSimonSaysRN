import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {CustomButton} from '../../shared/components/CustomButton';
import {Header} from '../../shared/components/Header';
import {Nav} from '../../shared/types';
import {GameButtons} from './components/GameButtons';
import {styles} from './GameScreen.styles';

interface IProps {}

const GameScreen: FC<IProps> = () => {
  const navigation = useNavigation<Nav>();
  const goBack = () => {
    navigation?.goBack();
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
