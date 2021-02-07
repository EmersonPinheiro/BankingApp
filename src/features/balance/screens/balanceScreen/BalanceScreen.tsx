import React, {FC} from 'react';
import {Text} from 'react-native';
import {BalanceDisplay, TransactionsList} from '../../components';
import {Container} from './styles';
import {BalanceScreenHeader} from './components';

const BalanceScreen: FC = () => {
  return (
    <Container>
      <BalanceScreenHeader />

      <BalanceDisplay />
      <TransactionsList />
    </Container>
  );
};

export default BalanceScreen;
