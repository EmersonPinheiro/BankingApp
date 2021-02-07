import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {UIManager, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import UserDataContextProvider from './src/api/DataContextProvider';

const App: FC = () => {
  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <NavigationContainer>
      <UserDataContextProvider>
        <RootNavigator />
      </UserDataContextProvider>
    </NavigationContainer>
  );
};

export default App;
