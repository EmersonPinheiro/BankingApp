import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/features/home/screens';
import {BalanceScreen} from './src/features/balance/screens';

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

const App: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
        <StackNavigator.Screen name="BottomTabs" component={BottomTabs} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
