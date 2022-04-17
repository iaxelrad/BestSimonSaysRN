import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 32,
  },
});
