import React, {FC} from 'react';
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
