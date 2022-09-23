import React from 'react';
import {Text, TextProps} from 'react-native';

export type AppFontType = 'bold' | 'regular' | 'semiBold' | 'medium'

interface AppTextProps extends TextProps {
  fontType?: AppFontType;
}
export const FontName = 'PlusJakartaSans-';
const AppText: React.FC<AppTextProps> = props => {
  const {children, fontType} = props;

  const family =
    fontType === 'bold'
      ? FontName + 'Bold'
      : fontType === 'semiBold'
        ? FontName + 'SemiBold'
        : fontType === 'medium'
          ? FontName + 'Medium'
          : FontName + 'Regular';
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: family,
          includeFontPadding: false
        },
        props.style,
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
