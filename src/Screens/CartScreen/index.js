import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AppButton from '../../common/AppButton';
import CartRow from '../../components/CartRow';
import {white} from '../../config/colors';

export default function CartScreen({navigation}) {
  const {items} = useSelector(state => state.cart);

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      {items.map(item => (
        <CartRow key={item.id} item={item} />
      ))}
      {items.length < 1 ? (
        <View style={styles.container}>
          <Text style={styles.text}>Your Cart is Empty</Text>
        </View>
      ) : (
        <AppButton
          title="Order Now"
          onPress={() => navigation.navigate('Insert Address')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: white,
    height: '100%',
    width: '100%',
  },
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    margin: 20,
  },
});
