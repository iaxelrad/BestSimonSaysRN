import React, {FC} from 'react';
import {View} from 'react-native';
import {CustomText} from './CustomText';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({title}) => {
  return (
    <View>
      <CustomText h1 center>
        {title}
      </CustomText>
    </View>
  );
};
