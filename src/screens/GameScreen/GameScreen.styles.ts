import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
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
  startGameButton: {
    backgroundColor: 'green',
  },
  homeButton: {
    backgroundColor: 'red',
  },
  homeButtonText: {
    color: 'white',
  },
});
