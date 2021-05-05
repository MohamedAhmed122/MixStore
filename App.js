import 'react-native-gesture-handler';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {primary} from './src/config/colors';
import AuthNavigation from './src/Navigation/AuthNavigation';
import ProductScreen from './src/Screens/ProductScreen';

export default function App() {
  return (
    // <View style={styles.screen}>
    //   <Text>Hello World</Text>
    // </View>
    // <NavigationContainer>
    //   <AuthNavigation />
    // </NavigationContainer>
    <ProductScreen />
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
