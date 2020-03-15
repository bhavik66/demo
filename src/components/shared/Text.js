import React from 'react';
import {Text} from 'react-native';
import colors from '../../themes/colors';

const TextComponent = props => {
  const color = props.light ? colors.white : colors.primary;
  const fontWeight = props.bold ? 'bold' : 'normal';
  const fontSize = props.x2 ? 16 : 14;
  return (
    <Text
      style={[
        {
          color,
          fontWeight,
          fontSize,
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default TextComponent;
