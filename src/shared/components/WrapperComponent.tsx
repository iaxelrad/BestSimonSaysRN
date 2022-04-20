import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';
import {CustomText} from './CustomText';

interface IProps {
  headerTitle: string;
  children: ReactNode;
}

export const WrapperComponent = ({children, headerTitle}: IProps) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <CustomText h1 center style={styles.header}>
        {headerTitle}
      </CustomText>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {marginTop: 8},
});
