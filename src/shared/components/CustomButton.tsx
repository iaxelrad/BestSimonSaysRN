import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

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
      <Text style={[styles.text, textStyle]}>{buttonText}</Text>
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
  text: {fontSize: 16, textAlign: 'center'},
});
