import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../common/AppButton';
import CartRow from '../../components/CartRow';
import {white} from '../../config/colors';

export default function CartScreen() {
  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <CartRow />
      <CartRow />
      <AppButton title='Order Now'/>
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
