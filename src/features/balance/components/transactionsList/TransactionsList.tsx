import React, {FC, useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, Platform, View} from 'react-native';
import {ITransaction} from '../../../../api/ITransaction';
import {TransactionDetailsModal, TransactionListItem} from './components';
import {
  Container,
  Title,
  ItemSeparator,
  ListFooterContainer,
  StyledTouchable,
  StyledTouchableTextContainer,
  StyledTouchableText,
  DateFilterTouchableText,
  DateFilterText,
  DateFilterTextContainer,
} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {compareAsc, parse, format} from 'date-fns';

const MOCK_ITEMS = [
  {
    _id: 'f21e64ed-36154398-ba03-9dff23128f4a',
    date: '2021-01-10T16:30:00-03:00',
    description: 'PixIn: Peter Sagan',
    amount: '350.0',
  },
  {
    _id: 'g22e64ed-44154398-ca02-hgff23128f4a',
    date: '2021-01-11T13:03:00-03:00',
    description: 'Uber',
    amount: '-7.49',
  },
  {
    _id: 'h21e64ed-88994398-bb99-9dff23128f4a',
    date: '2021-01-11T20:15:00-03:00',
    description: 'iFood',
    amount: '-35.0',
  },
  {
    _id: '033e64ed-23154398-ad22-9dff23128f4a',
    date: '2021-01-12T16:30:00-03:00',
    description: 'Apple.com',
    amount: '-10.9',
  },
  {
    _id: 'z55e64ed-89154398-xz02-9dff23128f4a',
    date: '2021-01-12T18:01:00-03:00',
    description: 'Amazon Prime',
    amount: '-9.9',
  },
  {
    _id: 'xy3e64ed-45154398-af02-9dff23128f4a',
    date: '2021-01-13T17:24:56-03:00',
    description: 'Spotify',
    amount: '-21.9',
  },
  {
    _id: 'xy3e64ed-76154398-ah04-9dff23128f4a',
    date: '2021-01-14T16:30:00-03:00',
    description: 'Cashback',
    amount: '13.27',
  },
];

const TransactionsList: FC = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<ITransaction>();
  const [transactionList, setTransactionList] = useState(MOCK_ITEMS);
  const [selectedDate, setSelectedDate] = useState();
  const [showDatePicker, setShowDatePicker] = useState<boolean>();

  useEffect(() => {
    if (selectedDate) {
      const parsedSelectedDate = parse(
        format(selectedDate, 'dd/MM/yyyy'),
        'dd/MM/yyyy',
        new Date(),
      );

      setTransactionList(
        MOCK_ITEMS.filter((el) => {
          const parsedItemDate = parse(
            format(new Date(el.date), 'dd/MM/yyyy'),
            'dd/MM/yyyy',
            new Date(),
          );

          console.log({parsedSelectedDate}, {parsedItemDate});
          return compareAsc(parsedSelectedDate, parsedItemDate) === 0;
        }),
      );
    } else {
      setTransactionList(MOCK_ITEMS);
    }
  }, [selectedDate]);

  const showTransactionDetails = useCallback((transaction) => {
    setSelectedTransaction(transaction);
  }, []);

  const renderItem = useCallback(
    ({item}: {item: ITransaction}) => {
      return <TransactionListItem item={item} showTransactionDetails={showTransactionDetails} />;
    },
    [showTransactionDetails],
  );

  const ItemSeparatorComponent = useCallback(() => <ItemSeparator />, []);
  const ListFooterComponent = useCallback(
    () => (
      <ListFooterContainer>
        <StyledTouchable onPress={() => console.log('Ver mais')}>
          <StyledTouchableTextContainer>
            <StyledTouchableText>VER MAIS</StyledTouchableText>
          </StyledTouchableTextContainer>
        </StyledTouchable>
      </ListFooterContainer>
    ),
    [],
  );

  const onChangeDate = useCallback(
    (_, date) => {
      const currentDate = date || selectedDate;
      setSelectedDate(currentDate);
      setShowDatePicker(Platform.OS === 'ios');
    },
    [selectedDate],
  );

  return (
    <>
      <Container>
        <Title>Histórico de transações</Title>
        <View>
          <DateFilterTextContainer>
            {!selectedDate ? (
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <DateFilterTouchableText>Escolha uma data para filtrar</DateFilterTouchableText>
              </TouchableOpacity>
            ) : (
              <>
                <DateFilterText>
                  Transações do dia {format(selectedDate, 'dd/MM/yyyy')}
                </DateFilterText>
                <TouchableOpacity onPress={() => setSelectedDate(undefined)}>
                  <DateFilterTouchableText>Limpar filtro</DateFilterTouchableText>
                </TouchableOpacity>
              </>
            )}
          </DateFilterTextContainer>
        </View>

        <FlatList
          data={transactionList}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.toString() + index.toString()}
          contentContainerStyle={{paddingBottom: 16}}
          ItemSeparatorComponent={ItemSeparatorComponent}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={ListFooterComponent}
        />
      </Container>
      <TransactionDetailsModal
        transaction={selectedTransaction}
        onRequestClose={() => setSelectedTransaction(undefined)}
      />
      {showDatePicker && (
        <DateTimePicker value={selectedDate ?? new Date()} onChange={onChangeDate} />
      )}
    </>
  );
};

export default TransactionsList;
