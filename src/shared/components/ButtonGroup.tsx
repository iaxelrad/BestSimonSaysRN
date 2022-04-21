import {View, ViewStyle} from 'react-native';
import React from 'react';
import {CustomButton} from './CustomButton';
import {globalStyles} from '../styles/globalStyles';

interface IProps {
  containerStyle?: ViewStyle;
  onPressGreenButton: () => void;
  greenButtonText: string;
  onPressRedButton: () => void;
  redButtonText: string;
  disabled?: boolean;
}

const ButtonGroup = (props: IProps) => {
  const {
    containerStyle,
    onPressGreenButton,
    greenButtonText,
    onPressRedButton,
    redButtonText,
    disabled,
  } = props;
  props;
  return (
    <View style={[globalStyles.buttonContainer, containerStyle]}>
      <CustomButton
        disabled={disabled}
        onPress={onPressGreenButton}
        buttonText={greenButtonText}
        style={[globalStyles.greenBackground, disabled && {opacity: 0.4}]}
        textStyle={globalStyles.whiteText}
      />
      <CustomButton
        disabled={disabled}
        onPress={onPressRedButton}
        buttonText={redButtonText}
        style={[globalStyles.redBackground, disabled && {opacity: 0.4}]}
        textStyle={globalStyles.whiteText}
      />
    </View>
  );
};

export default ButtonGroup;
