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
    backgroundColor: 'green',
  },
  homeButtonText: {
    color: 'white',
  },
  background: {
    alignItems: undefined,
  },
  title: {
    flex: 5,
    marginBottom: 16,
  },
  scoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scoresTitle: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 30,
    fontWeight: '600',
  },
  scoresTextInfo: {
    fontSize: 22,
    marginVertical: 16,
    textAlign: 'center',
    // flex: 1,
  },
});
