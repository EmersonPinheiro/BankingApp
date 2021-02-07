import {format} from 'date-fns';
import React, {FC, useMemo} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import {ITransaction} from '../../../../../../api/ITransaction';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Description,
  DateText,
  Amount,
  ExtraInfo,
  ExtraInfoContainer,
  Title,
  CloseIconTouchableContainer,
  CloseIconContainer,
} from './styles';

interface TransactionDetailsModalProps {
  transaction?: ITransaction;
  onRequestClose: () => void;
}

const TransactionDetailsModal: FC<TransactionDetailsModalProps> = ({
  transaction,
  onRequestClose,
}) => {
  const transactionInfo = useMemo(() => {
    if (!transaction) {
      return;
    }

    const positiveAmount = +transaction.amount > 0;
    const date = transaction.date
      ? format(new Date(transaction.date), "dd/MM/yyyy 'às' hh:mm:ss")
      : '';
    const label = date ? (positiveAmount ? 'Recebido em ' + date : 'Pago em ' + date) : '';
    const amount = `${positiveAmount ? '+ ' : '- '}R$ ${Math.abs(+transaction.amount)
      .toFixed(2)
      .replace('.', ',')}`;

    return {...transaction, positiveAmount, label, amount};
  }, [transaction]);

  return (
    <>
      <Modal
        visible={transaction ? true : false}
        onRequestClose={onRequestClose}
        animationType="slide">
        {transactionInfo && (
          <Container>
            <CloseIconTouchableContainer>
              <TouchableOpacity onPress={onRequestClose}>
                <CloseIconContainer>
                  <Icon name="x" size={24} />
                </CloseIconContainer>
              </TouchableOpacity>
            </CloseIconTouchableContainer>
            <Title>Detalhes da transação</Title>
            <Description>{transactionInfo.description}</Description>
            <Amount positiveAmount={transactionInfo.positiveAmount}>
              {transactionInfo.amount}
            </Amount>
            <DateText positiveAmount={transactionInfo.positiveAmount}>
              {transactionInfo.label}
            </DateText>
            <ExtraInfoContainer>
              <ExtraInfo>Identificador:</ExtraInfo>
              <ExtraInfo>{transactionInfo._id}</ExtraInfo>
            </ExtraInfoContainer>
          </Container>
        )}
      </Modal>
    </>
  );
};

export default TransactionDetailsModal;
