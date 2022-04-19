import {StyleSheet, Dimensions} from 'react-native';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    borderColor: 'gray',
    width: deviceWidth / 2,
  },
  textInput: {flex: 1, marginHorizontal: 15, textAlign: 'center'},
  modalButtons: {
    flexDirection: 'row',
  },
  enterButton: {
    backgroundColor: 'green',
  },
  closeButton: {
    backgroundColor: 'red',
  },
  modalView: {
    marginTop: deviceHeight * 0.33,
    marginHorizontal: deviceWidth * 0.05,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: deviceWidth * 0.05,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
