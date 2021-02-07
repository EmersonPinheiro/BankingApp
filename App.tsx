import 'react-native-gesture-handler';
import React, {FC, createContext} from 'react';
import {UIManager, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import userData from './userData.json'; //HACK: Just to emulate data already fetched fom DB
import {RootNavigator} from './src/navigation/RootNavigator';

export const UserDataContext = createContext(userData);

const App: FC = () => {
  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <NavigationContainer>
      <UserDataContext.Provider value={userData}>
        <RootNavigator />
      </UserDataContext.Provider>
    </NavigationContainer>
  );
};

export default App;
