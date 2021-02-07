import React, {FC} from 'react';
import {Text} from 'react-native';
import {BalanceDisplay, TransactionsList} from '../../components';
import {Container} from './styles';

const BalanceScreen: FC = () => {
  return (
    <Container>
      <Text>HEADER</Text>

      <BalanceDisplay />

      <Text>BOTTOM TAB</Text>
      <TransactionsList />
    </Container>
  );
};

export default BalanceScreen;
