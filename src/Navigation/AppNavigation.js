import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoreScreen from '../Screens/MoreScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import ProductNavigation from './ProductNavigation';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ProductNavigation} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}
