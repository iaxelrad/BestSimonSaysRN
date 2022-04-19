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
  imageContainer: {flex: 1, marginBottom: 16},
  image: {width: 250, height: 250},
  buttonContainer: {flex: 1},
  newGameButton: {backgroundColor: 'green'},
  resultsButton: {backgroundColor: 'red'},
  newGameText: {color: 'white'},
});
