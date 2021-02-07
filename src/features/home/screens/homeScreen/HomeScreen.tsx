import React, {FC, useContext} from 'react';
import {Button} from '../../../../components';
import {
  Container,
  ButtonContainer,
  InfoContainer,
  Title,
  Subtitle,
  PersonalDataContainer,
  Text,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {UserDataContext} from '../../../../api/DataContextProvider';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation();
  const {name} = useContext(UserDataContext);

  return (
    <Container>
      <InfoContainer>
        <Subtitle>meu</Subtitle>
        <Title>banQi</Title>
        <PersonalDataContainer>
          <Text>Bem-vindo(a) de volta, {name}!</Text>
        </PersonalDataContainer>
      </InfoContainer>
      <ButtonContainer>
        <Button
          title="Acessar"
          onPress={() => {
            navigate('BottomTabs');
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default HomeScreen;
