import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

interface CustomTextProps extends TextProps {
  h1?: boolean;
  h2?: boolean;
  center?: boolean;
  style?: TextStyle;
}

export const CustomText = (props: CustomTextProps) => {
  const {h1, h2, center, style} = props;

  let textStyle = styles.default;
  if (h1) {
    textStyle = styles.h1;
  } else if (h2) {
    textStyle = styles.h2;
  }
  return (
    <Text {...props} style={[textStyle, style, center && styles.center]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    color: 'black',
    fontWeight: '900',
    fontSize: 32,
    marginBottom: 16,
  },
  h2: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
  },
  center: {textAlign: 'center'},
  default: {
    color: 'black',
    fontSize: 16,
  },
});
