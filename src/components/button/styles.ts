import styled, {css} from 'styled-components/native';

interface ButtonStyleProps {
  color: string;
  loading?: boolean;
}

export const Container = styled.View`
  ${({}) => css`
    width: 100%;
    height: 45px;
    background-color: #ec008c;
    justify-content: center;
    border-radius: 28px;
  `}
`;

export const StyledText = styled.Text`
  color: white;
  text-align: center;
  font-family: 'Montserrat-SemiBold';
`;

export const StyledPressable = styled.Pressable`
  flex: 1;
  justify-content: center;
  border-radius: 28px;
`;
