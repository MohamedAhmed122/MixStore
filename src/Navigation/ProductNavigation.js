import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from '../Screens/ProductsScreen';
import ProductDetailScreen from '../Screens/ProductDetailScree';
import OrderScreen from '../Screens/OrderScreen';

const Stack = createStackNavigator();

export default function ProductNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        options={{headerShown: false}}
        component={ProductsScreen}
      />
      <Stack.Screen name="Product Details" component={ProductDetailScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
    </Stack.Navigator>
  );
}
