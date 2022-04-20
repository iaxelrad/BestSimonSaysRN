import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {globalStyles} from '../styles/GlobalStyles';
import {Header} from './Header';

interface IProps {
  headerTitle: string;
}

export const WrapperComponent: FC<IProps> = ({children, headerTitle}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title={headerTitle} />
      {children}
    </SafeAreaView>
  );
};
