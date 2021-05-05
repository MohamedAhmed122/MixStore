import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from '../Screens/ProductsScreen';
import ProductDetailScreen from '../Screens/ProductDetailScree';
import OrderScreen from '../Screens/OrderScreen';
import {primary} from '../config/colors';

const Stack = createStackNavigator();

export default function ProductNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: primary}}>
      <Stack.Screen
        name="Drinks"
        options={{headerShown: false}}
        component={ProductsScreen}
      />
      <Stack.Screen name="Drink Details" component={ProductDetailScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
    </Stack.Navigator>
  );
}
