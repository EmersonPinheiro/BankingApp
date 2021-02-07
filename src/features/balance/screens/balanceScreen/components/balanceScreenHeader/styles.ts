import styled, {css} from 'styled-components/native';

interface BalanceScreenHeader {
  textSize?: number;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Text = styled.Text`
  ${({textSize}: BalanceScreenHeader) => css`
    text-align: center;
    text-align-vertical: center;
    font-family: 'Montserrat-Bold';
    font-size: ${textSize ?? 24}px;
    color: #ec008c;
    margin: 2px;
  `}
`;
