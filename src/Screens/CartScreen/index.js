import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CartRow from '../../components/CartRow';
import {white} from '../../config/colors';

export default function CartScreen() {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <CartRow count={count} setCount={setCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: white,
    height: '100%',
    width: '100%',
  },
});
