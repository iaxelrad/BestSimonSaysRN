import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {CustomText} from './CustomText';

interface ButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  buttonText: string;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const CustomButton = ({
  onPress,
  style,
  textStyle,
  buttonText,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}>
      <CustomText center style={textStyle}>
        {buttonText}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
});
