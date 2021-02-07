import React, {FC, useCallback, useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Description, PositiveIndicatorText, DescriptionContainer} from './styles';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';
import {ITransaction} from '../../../../../../api/ITransaction';
import {BRLCurrencyFormat} from '../../../../../../utils/mixins';

interface TransactionListItemProps {
  item: ITransaction;
  showTransactionDetails: (transaction: ITransaction) => void;
}

const TransactionListItem: FC<TransactionListItemProps> = ({item, showTransactionDetails}) => {
  const {positiveAmount, label, iconName, amount} = useMemo(() => {
    const positiveAmount = item.amount > 0;
    const date = item.date ? format(new Date(item.date), 'dd/MM/yyyy') : '';
    const label = date ? (positiveAmount ? 'Recebido em ' + date : 'Pago em ' + date) : '';
    const iconName = positiveAmount ? 'arrow-down' : 'arrow-up';
    const amount = `${positiveAmount ? '+ ' : '- '}${BRLCurrencyFormat(item.amount)}`;
    return {
      positiveAmount,
      label,
      iconName,
      amount,
    };
  }, [item]);

  const onPress = useCallback(() => {
    showTransactionDetails(item);
  }, [item, showTransactionDetails]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        {item.amount !== 0 && <Icon name={iconName} size={32} color="#333333" />}
        <DescriptionContainer>
          <Description>{item.description}</Description>
          <PositiveIndicatorText positiveAmount={positiveAmount}>{label}</PositiveIndicatorText>
        </DescriptionContainer>
        <PositiveIndicatorText positiveAmount={positiveAmount}>{amount}</PositiveIndicatorText>
      </Container>
    </TouchableOpacity>
  );
};

export default TransactionListItem;
