import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/Navigation/AuthNavigation';
import AppNavigation from './src/Navigation/AppNavigation';
import {useSelector} from 'react-redux';

export default function App() {
  const {isAuthenticated} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
