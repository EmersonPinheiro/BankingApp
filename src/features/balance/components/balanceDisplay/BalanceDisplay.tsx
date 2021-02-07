import React, {FC, useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  BalanceTitle,
  BalanceText,
  BalanceTouchableWrapper,
  HideBalanceView,
  IconContainer,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';

const BalanceDisplay: FC = () => {
  const [showBalance, setShowBalance] = useState<boolean>();

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
    <>
      <BalanceTitle>Meu saldo</BalanceTitle>
      <BalanceTouchableWrapper>
        {showBalance ? <BalanceText numberOfLines={1}>R$34,87</BalanceText> : <HideBalanceView />}
        <TouchableOpacity onPress={toggleBalanceVisibility}>{renderIcon()}</TouchableOpacity>
      </BalanceTouchableWrapper>
    </>
  );
};

export default BalanceDisplay;
