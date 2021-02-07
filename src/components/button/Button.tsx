import React, {FC} from 'react';
import {Container, StyledText, StyledPressable} from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({title, onPress}) => {
  return (
    <Container>
      <StyledPressable
        android_ripple={{
          borderless: true,
          radius: 200,
        }}
        onPress={onPress}>
        <StyledText>{title}</StyledText>
      </StyledPressable>
    </Container>
  );
};

export default Button;
