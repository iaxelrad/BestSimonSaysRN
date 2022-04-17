import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../shared/CustomButton';

interface IProps {
  navigation: any;
}

const GameScreen: FC<IProps> = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
      <CustomButton onPress={goBack} buttonText="Home Page" />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
