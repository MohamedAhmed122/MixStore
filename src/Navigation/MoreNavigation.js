import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {primary} from '../config/colors';
import MoreScreen from '../Screens/MoreScreen';
import MyOrderScreen from '../Screens/MyOrderScreen';

const Stack = createStackNavigator();

export default function MoreNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: primary}}>
      <Stack.Screen
        name="More"
        options={{headerShown: false}}
        component={MoreScreen}
      />
      <Stack.Screen name="My Orders" component={MyOrderScreen} />
    </Stack.Navigator>
  );
}
