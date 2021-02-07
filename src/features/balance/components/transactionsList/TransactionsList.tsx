import React, {FC, useCallback, useContext, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  Platform,
  View,
  ActivityIndicator,
  LayoutAnimation,
  useWindowDimensions,
} from 'react-native';
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
  ActivityIndicatorContainer,
  CollapseListIconContainer,
  EmptyListText,
} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {compareAsc, parse, format} from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';
import {UserDataContext} from '../../../../api/DataContextProvider';

const INITIAL_PAGE_LENGTH = 3;

const TransactionsList: FC = () => {
  const {transactions} = useContext(UserDataContext) as {transactions: ITransaction[]};
  const [selectedTransaction, setSelectedTransaction] = useState<ITransaction>();
  const [transactionList, setTransactionList] = useState<ITransaction[]>();
  const [selectedDate, setSelectedDate] = useState();
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [expandedList, setExpandedList] = useState<boolean>(false);

  const dimensions = useWindowDimensions();

  // All the fetching logic could be made using a Redux like solution (ex. Context, Redux...), but here, I'll just emulate it with loadings inside the screen (which isn't good ;/ )
  // Also, the date filter may contain some workarounds, in order to work with the emulated requests functions created.
  const [loadingList, setLoadingList] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [showingAllTransactions, setShowingAllTransactions] = useState<boolean>(false);
  const fetchTransactions = useCallback(
    (pageLength?: number) => {
      return new Promise<ITransaction[]>((resolve, reject) => {
        try {
          let items: ITransaction[] = [];

          setTimeout(() => {
            items = transactions.slice(0, pageLength);
            resolve(items);
          }, 1500);
        } catch (error) {
          reject();
        }
      });
    },
    [transactions],
  );

  const getTransactions = useCallback(async () => {
    if (!loadingList && !transactionList) {
      setLoadingList(true);
      const items = await fetchTransactions(INITIAL_PAGE_LENGTH);

      setTransactionList(items);
      setLoadingList(false);
    }
  }, [fetchTransactions, loadingList, transactionList]);

  const getAllTransactions = useCallback(async () => {
    if (!showingAllTransactions) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setExpandedList(true);
      setLoadingMore(true);
      const items = await fetchTransactions();
      setTransactionList(items);
      setLoadingMore(false);
      setShowingAllTransactions(true);
    }
  }, [fetchTransactions, showingAllTransactions]);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const previousSelectedDateRef = useRef<Date>();
  useEffect(() => {
    previousSelectedDateRef.current = selectedDate;
  }, [selectedDate]);
  const previousSelectedDate = previousSelectedDateRef.current;

  useEffect(() => {
    if (selectedDate && transactionList && selectedDate !== previousSelectedDate) {
      const parsedSelectedDate = parse(
        format(selectedDate, 'dd/MM/yyyy'),
        'dd/MM/yyyy',
        new Date(),
      );

      setTransactionList((tl) =>
        tl.filter((el) => {
          const parsedItemDate = parse(
            format(new Date(el.date), 'dd/MM/yyyy'),
            'dd/MM/yyyy',
            new Date(),
          );

          return compareAsc(parsedSelectedDate, parsedItemDate) === 0;
        }),
      );
    } else if (selectedDate === undefined) {
      if (!loadingList) {
        if (!showingAllTransactions) {
          getTransactions();
        } else {
          getAllTransactions();
        }
      }
    }
  }, [
    getAllTransactions,
    getTransactions,
    loadingList,
    previousSelectedDate,
    selectedDate,
    showingAllTransactions,
    transactionList,
    transactions,
  ]);

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
  const ListFooterComponent = useCallback(() => {
    if (showingAllTransactions || !transactionList?.length || selectedDate) {
      return null;
    }

    return (
      <>
        {loadingMore ? (
          <ActivityIndicatorContainer>
            <ActivityIndicator color="#EC008C" />
          </ActivityIndicatorContainer>
        ) : (
          <ListFooterContainer>
            <StyledTouchable onPress={getAllTransactions}>
              <StyledTouchableTextContainer>
                <StyledTouchableText>VER MAIS</StyledTouchableText>
              </StyledTouchableTextContainer>
            </StyledTouchable>
          </ListFooterContainer>
        )}
      </>
    );
  }, [
    getAllTransactions,
    loadingMore,
    selectedDate,
    showingAllTransactions,
    transactionList?.length,
  ]);

  const ListEmptyComponent = useCallback(
    () => (
      <EmptyListText>
        Não há nenhuma transação para esse dia. Que tal filtrar por uma nova data? ;)
      </EmptyListText>
    ),
    [],
  );

  const onChangeDate = useCallback(
    (_, date) => {
      const currentDate = date || selectedDate;

      setShowDatePicker(Platform.OS === 'ios');
      setSelectedDate(currentDate);
    },
    [selectedDate],
  );

  const onPressClean = useCallback(() => {
    setTransactionList(undefined);
    setSelectedDate(undefined);
    setShowingAllTransactions(false);
  }, []);

  const collapseListIcon = useCallback(() => {
    const iconName = expandedList ? 'chevron-down' : 'chevron-up';

    if (!showingAllTransactions) {
      return null;
    }

    return (
      <CollapseListIconContainer>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            setExpandedList(!expandedList);
          }}>
          <Icon name={iconName} size={24} color="#00aeef" />
        </TouchableOpacity>
      </CollapseListIconContainer>
    );
  }, [expandedList, showingAllTransactions]);

  return (
    <>
      <Container style={{marginTop: expandedList ? -dimensions.height * 0.3 : 0}}>
        <Title>Histórico de transações</Title>
        {collapseListIcon()}
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
                <TouchableOpacity onPress={onPressClean}>
                  <DateFilterTouchableText>Limpar filtro</DateFilterTouchableText>
                </TouchableOpacity>
              </>
            )}
          </DateFilterTextContainer>
        </View>
        {loadingList ? (
          <ActivityIndicatorContainer>
            <ActivityIndicator color="#EC008C" size="large" />
          </ActivityIndicatorContainer>
        ) : (
          <FlatList
            data={transactionList}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.toString() + index.toString()}
            contentContainerStyle={{paddingBottom: 16}}
            ItemSeparatorComponent={ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={ListFooterComponent}
            ListEmptyComponent={ListEmptyComponent}
          />
        )}
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
