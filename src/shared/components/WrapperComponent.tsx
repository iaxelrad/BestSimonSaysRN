import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';
import {Header} from './Header';

interface IProps {
  headerTitle: string;
  children: ReactNode;
}

export const WrapperComponent = ({children, headerTitle}: IProps) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={headerTitle} />
      {children}
    </SafeAreaView>
  );
};
