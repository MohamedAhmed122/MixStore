import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from './src/common/AppButton';
import AppInput from './src/common/AppInput';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text>Hello World</Text>
      <AppButton title="my Pressable button" />
      <AppInput />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
