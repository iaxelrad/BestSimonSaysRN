import React, {FC} from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {CustomText} from './CustomText';

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  buttonText: string;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const CustomButton: FC<ButtonProps> = ({
  onPress,
  style,
  textStyle,
  buttonText,
  disabled,
}) => {
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
