import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from './src/common/AppButton';
import AppInput from './src/common/AppInput';
import LoginScreen from './src/Screens/LoginScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';

export default function App() {
  return (
    // <View style={styles.screen}>
    //   <Text>Hello World</Text>
    //   <AppButton title="my Pressable button" />
    //   <AppInput />
    // </View>
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
