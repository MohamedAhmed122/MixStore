import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../components/Card';
import {lightBlue, white} from '../../config/colors';
import items from '../../data/items';

export default function ProductScreen() {
  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <FlatList
        data={items}
        keyExtractor={items => items.id}
        renderItem={({item}) => <Card item={item} />}
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
