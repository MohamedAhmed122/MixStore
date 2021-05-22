import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Card from '../../components/Card';
import AppLoading from '../../common/AppLoading';


import {getProducts} from '../../requests/products';


export default function AdminViewProducts() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts()
      .then(res => setItems(res.products))
      .catch(err => console.log(err));
  }, []);

  if (items?.length < 1) return <AppLoading />;
  return (
    <View>
       <FlatList
        data={items}
        keyExtractor={items => items._id}
        renderItem={({item}) => (
          <Card
            item={item}
            // onPress={() => navigation.navigate('Drink Details', item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
