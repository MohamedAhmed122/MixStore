import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Card from '../../components/Card';
import AppLoading from '../../common/AppLoading';
import {white} from '../../config/colors';

import {getProducts} from '../../requests/products';

export default function ProductsScreen({navigation}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts()
      .then(res => setItems(res.products))
      .catch(err => console.log(err));
  }, []);

  if (items?.length < 1) return <AppLoading />;
  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <FlatList
        data={items}
        keyExtractor={items => items._id}
        renderItem={({item}) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('Drink Details', item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: white,
    width: '100%',
    height: '100%',
  },
});
