import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const Container = styled.View`
  height: ${screenHeight * 0.3}px;
  justify-content: center;
`;

export const BalanceTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  text-align: center;
  margin-vertical: 12px;
  margin-horizontal: 20px;
  color: #333333;
`;

export const BalanceText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 24px;
  text-align: center;
  color: #333333;
`;

export const BalanceTouchableWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const HideBalanceView = styled.View`
  height: 30px;
  width: 100px;
  background-color: #d7d7d7;
`;

export const IconContainer = styled.View`
  margin-left: 16px;
`;
