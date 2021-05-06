import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/Navigation/AuthNavigation';
import AppNavigation from './src/Navigation/AppNavigation';

export default function App() {
  const {
    auth: {isAuthenticated},
  } = store.getState();

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </Provider>
  );
}
