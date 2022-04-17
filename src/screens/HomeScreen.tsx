import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {routes} from '../routes';

interface IProps {
  navigation: any;
}

const HomeScreen: FC<IProps> = ({navigation}) => {
  const goToNewGame = (): void => {
    navigation.navigate(routes.GAME);
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Pressable onPress={goToNewGame}>
        <Text>New Game</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
