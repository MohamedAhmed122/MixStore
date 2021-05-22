import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {primary} from '../config/colors';
import AdminMenuScreen from '../Screens/AdminMenuScreen';
import AdminViewProducts from '../Screens/AdminViewProducts';
import AdminCreateNew from '../Screens/AdminCreateNew';
import AdminViewOrders from '../Screens/AdminViewOrders';
import AdminViewUsers from '../Screens/AdminViewUsers';

const Stack = createStackNavigator();

export default function AdminNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerTintColor: primary}}>
        <Stack.Screen
          name="Admin"
          options={{headerShown: false}}
          component={AdminMenuScreen}
        />
        <Stack.Screen name="View Drinks" component={AdminViewProducts} />
        <Stack.Screen name="View Users" component={AdminViewUsers} />
        <Stack.Screen name="View Orders" component={AdminViewOrders} />
        <Stack.Screen name="Create Product" component={AdminCreateNew} />
      </Stack.Navigator>
    )
}
