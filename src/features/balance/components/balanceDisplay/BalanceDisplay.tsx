import React, {FC, useCallback, useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  BalanceTitle,
  BalanceText,
  BalanceTouchableWrapper,
  HideBalanceView,
  IconContainer,
  Container,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {BRLCurrencyFormat} from '../../../../utils/mixins';
import {UserDataContext} from '../../../../api/DataContextProvider';

const BalanceDisplay: FC = () => {
  const [showBalance, setShowBalance] = useState<boolean>();

  const userDataContext = useContext(UserDataContext);

  const toggleBalanceVisibility = useCallback(() => {
    setShowBalance(!showBalance);
  }, [showBalance]);

  const renderIcon = useCallback(() => {
    const iconName = showBalance ? 'eye-off' : 'eye';

    return (
      <IconContainer>
        <Icon name={iconName} size={24} color="#333333" />
      </IconContainer>
    );
  }, [showBalance]);

  return (
    <Container>
      <BalanceTitle>Meu saldo</BalanceTitle>
      <BalanceTouchableWrapper>
        {showBalance ? (
          <BalanceText numberOfLines={1}>{BRLCurrencyFormat(userDataContext.balance)}</BalanceText>
        ) : (
          <HideBalanceView />
        )}
        <TouchableOpacity onPress={toggleBalanceVisibility}>{renderIcon()}</TouchableOpacity>
      </BalanceTouchableWrapper>
    </Container>
  );
};

export default BalanceDisplay;
