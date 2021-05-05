import 'react-native-gesture-handler';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';

import {primary} from './src/config/colors';
import AuthNavigation from './src/Navigation/AuthNavigation';
import ProductsScreen from './src/Screens/ProductsScreen';
import ProductDetailScreen from './src/Screens/ProductDetailScree';

export default function App() {
  return (
    // <View style={styles.screen}>
    //   <Text>Hello World</Text>
    // </View>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
    // <ProductDetailScreen />
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
