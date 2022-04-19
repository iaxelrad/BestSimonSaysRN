import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './Header';

interface IProps {
  headerTitle: string;
}

export const WrapperComponent: FC<IProps> = ({children, headerTitle}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={headerTitle} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#ebe9e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
