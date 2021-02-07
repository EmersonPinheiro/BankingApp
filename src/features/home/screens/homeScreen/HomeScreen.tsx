import React, {FC} from 'react';
import {View} from 'react-native';
import {Button} from '../../../../components';
import {Container, ButtonContainer} from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: FC = () => {
  /**
   * TODO:
   * [] Background
   * [x] Botão para navegar pro balance
   *** [] Animação pro botão
   *** [] Loading pro botão
   */

  const {navigate} = useNavigation();

  return (
    <Container>
      {/**FIXME: PROVISÓRIO */}
      <View style={{flex: 8, backgroundColor: 'black'}} />
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
