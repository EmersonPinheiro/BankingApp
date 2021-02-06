import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const StackNavigator = createStackNavigator();

const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="BalanceScreen" component={() => <Text>Balance</Text>} />
    </BottomTab.Navigator>
  );
}

const App: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="HomeScreen" component={() => <Text>HOME</Text>} />
        <StackNavigator.Screen name="BalanceScreen" component={BottomTabs} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
