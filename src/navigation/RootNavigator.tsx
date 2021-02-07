import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../src/features/home/screens';
import {BalanceScreen} from '../../src/features/balance/screens';
import Icon from 'react-native-vector-icons/Feather';
import {IconLabel, UnderConstruction} from '../../src/components';

const StackNavigator = createStackNavigator();

const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator initialRouteName="BalanceScreen">
      <BottomTab.Screen
        name="BalanceScreen"
        component={BalanceScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={20} color={focused ? '#EC008C' : '#333333'} />
          ),
          tabBarLabel: ({focused}) => <IconLabel text="Início" focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="PurchasesScreen"
        component={UnderConstruction}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="shopping-bag" size={20} color={focused ? '#EC008C' : '#333333'} />
          ),
          tabBarLabel: ({focused}) => <IconLabel text="Compras" focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="PaymentsScreen"
        component={UnderConstruction}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="dollar-sign" size={20} color={focused ? '#EC008C' : '#333333'} />
          ),
          tabBarLabel: ({focused}) => <IconLabel text="Pagamentos" focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="CardsScreen"
        component={UnderConstruction}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="credit-card" size={20} color={focused ? '#EC008C' : '#333333'} />
          ),
          tabBarLabel: ({focused}) => <IconLabel text="Cartões" focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="InvoicesScreen"
        component={UnderConstruction}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="file-text" size={20} color={focused ? '#EC008C' : '#333333'} />
          ),
          tabBarLabel: ({focused}) => <IconLabel text="Carnês" focused={focused} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <StackNavigator.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <StackNavigator.Screen name="BottomTabs" component={BottomTabs} />
    </StackNavigator.Navigator>
  );
}
