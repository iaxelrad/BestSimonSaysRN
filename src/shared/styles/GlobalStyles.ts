import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#ebe9e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {flex: 1, justifyContent: 'flex-end'},
  greenBackground: {backgroundColor: 'green'},
  redBackground: {backgroundColor: 'red'},
  whiteText: {color: 'white'},
});
