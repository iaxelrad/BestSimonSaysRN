import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#ebe9e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  scoresContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    position: 'relative',
  },
  startGameButton: {backgroundColor: 'green'},
  homeButton: {backgroundColor: 'red'},
  homeButtonText: {color: 'white'},
  disabled: {opacity: 0.4},
});
