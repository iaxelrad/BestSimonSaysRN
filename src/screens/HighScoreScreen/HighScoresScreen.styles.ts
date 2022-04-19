import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#ebe9e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {flex: 1},
  homeButton: {
    backgroundColor: 'red',
  },
  newGameButton: {
    backgroundColor: 'green',
  },
  homeButtonText: {
    color: 'white',
  },
  separator: {
    height: 2,
    backgroundColor: 'black',
  },
  score: {paddingVertical: 10, fontSize: 20, color: 'black'},
});
