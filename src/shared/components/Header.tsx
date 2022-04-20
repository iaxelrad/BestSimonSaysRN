import React from 'react';
import {View} from 'react-native';
import {CustomText} from './CustomText';

interface HeaderProps {
  title: string;
}

export const Header = ({title}: HeaderProps) => {
  return (
    <View>
      <CustomText h1 center>
        {title}
      </CustomText>
    </View>
  );
};
