import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import AppButton from './src/common/AppButton';
import AppInput from './src/common/AppInput';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';

import {primary} from './src/config/colors';
import AuthNavigation from './src/Navigation/AuthNavigation';

export default function App() {
  return (
    // <View style={styles.screen}>
    //   <Text>Hello World</Text>
    //   <AppButton title="my Pressable button" />
    //   <AppInput />
    // </View>
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
