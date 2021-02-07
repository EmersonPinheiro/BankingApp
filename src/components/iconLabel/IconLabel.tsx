import React, {FC} from 'react';
import {Text} from './styles';

interface IconLabelProps {
  text: string;
  focused?: boolean;
}

export const IconLabel: FC<IconLabelProps> = ({text, focused}) => {
  return <Text focused={focused}>{text}</Text>;
};

export default IconLabel;
