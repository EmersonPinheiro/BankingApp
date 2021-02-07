import styled, {css} from 'styled-components/native';

interface TransactionDetailsModal {
  positiveAmount?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding-vertical: 50px;
  align-content: space-around;
`;

export const Title = styled.Text`
  color: #333333;
  font-size: 20px;
  font-family: 'Montserrat-Medium';
  text-align: center;
`;

export const Description = styled.Text`
  flex: 1;
  color: #333333;
  font-size: 24px;
  font-family: 'Montserrat-Bold';
  text-align: center;
  text-align-vertical: center;
`;

export const DateText = styled.Text`
  ${({positiveAmount}: TransactionDetailsModal) => css`
    flex: 1;
    color: ${positiveAmount ? '#14C46F' : '#333333'};
    font-size: 18px;
    font-family: 'Montserrat-SemiBold';
    text-align: center;
    text-align-vertical: center;
  `}
`;
export const Amount = styled.Text`
  ${({positiveAmount}: TransactionDetailsModal) => css`
    flex: 1;
    color: ${positiveAmount ? '#14C46F' : '#333333'};
    font-size: 22px;
    font-family: 'Montserrat-SemiBold';
    text-align: center;
    text-align-vertical: center;
  `}
`;

export const ExtraInfo = styled.Text`
  flex: 1;
  color: #333333;
  font-size: 12px;
  font-family: 'Montserrat-Regular';
  text-align: center;
  text-align-vertical: center;
`;

export const ExtraInfoContainer = styled.View`
  flex: 0.5;
`;

export const CloseIconTouchableContainer = styled.View`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 16px;
  top: 16px;
  align-items: center;
`;

export const CloseIconContainer = styled.View`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;
