import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

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
      <Pressable onPress={goBack}>
        <Text>Home Page</Text>
      </Pressable>
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
