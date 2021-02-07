import 'react-native-gesture-handler';
import React, {FC, createContext} from 'react';
import {Text, UIManager, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/features/home/screens';
import {BalanceScreen} from './src/features/balance/screens';
import userData from './userData.json'; //HACK: Just to emulate data already fetched fom DB

export const UserDataContext = createContext(userData);

const StackNavigator = createStackNavigator();

const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator initialRouteName="BalanceScreen">
      <BottomTab.Screen name="BalanceScreen" component={BalanceScreen} />
      <BottomTab.Screen name="PurchasesScreen" component={() => <Text>Purchases</Text>} />
    </BottomTab.Navigator>
  );
}

function RootNavigator() {
  return (
    <StackNavigator.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <StackNavigator.Screen name="BottomTabs" component={BottomTabs} />
    </StackNavigator.Navigator>
  );
}

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
