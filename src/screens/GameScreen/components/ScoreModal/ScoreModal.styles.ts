import {StyleSheet, Dimensions} from 'react-native';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  text: {fontSize: 20, paddingVertical: 4},
  inputContainer: {
    marginVertical: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    borderColor: 'gray',
    width: 250,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 15,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  modalButtons: {flexDirection: 'row'},
  modalView: {
    marginTop: deviceHeight * 0.33,
    marginHorizontal: deviceWidth * 0.05,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: deviceWidth * 0.05,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  background: {backgroundColor: '#ffffffbf', flex: 1},
});
