import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {primary} from '../config/colors';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: primary}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
