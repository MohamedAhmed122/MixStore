import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../Screens/FavoriteScreen';
import ProductNavigation from './ProductNavigation';
import {primary} from '../config/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartNavigation from './CartNavigation';
import MoreNavigation from './MoreNavigation';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Drinks"
        component={ProductNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="drink" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreNavigation}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="slack-square" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
