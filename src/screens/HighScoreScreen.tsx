import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CustomButton} from '../shared/components/CustomButton';
import {Header} from '../shared/components/Header';

interface IProps {
  navigation: any;
}

const HighScoreScreen: FC<IProps> = ({navigation}) => {
  const goToHome = () => {
    navigation.popToTop();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Top Scores" />
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={goToHome}
          buttonText="Home Page"
          style={styles.homeButton}
          textStyle={styles.homeButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default HighScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    marginHorizontal: 32,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {flex: 1},
  homeButton: {
    backgroundColor: 'green',
  },
  homeButtonText: {
    color: 'white',
  },
});
