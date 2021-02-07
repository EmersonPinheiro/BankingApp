import styled, {css} from 'styled-components/native';

interface TransactionListItem {
  positiveAmount: boolean;
}

export const Container = styled.View`
  flex: 1 auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-family: 'Monteserrat-Medium';
  font-size: 14px;
  color: #333333;
`;

export const PositiveIndicatorText = styled.Text`
  ${({positiveAmount}: TransactionListItem) => css`
    font-family: 'Monteserrat-Medium';
    font-size: 12px;
    color: ${positiveAmount ? '#14C46F' : '#767676'};
  `}
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-horizontal: 20px;
`;
