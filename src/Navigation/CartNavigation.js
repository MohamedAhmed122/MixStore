import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../Screens/CartScreen';
import {primary} from '../config/colors';
import AddressScreen from '../Screens/AddressScreen';

const Stack = createStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: primary}}>
      <Stack.Screen
        name="Cart"
        options={{headerShown: false}}
        component={CartScreen}
      />
      <Stack.Screen name="Insert Address" component={AddressScreen} />
    </Stack.Navigator>
  );
}
