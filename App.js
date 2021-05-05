import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text>Hello World</Text>
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
