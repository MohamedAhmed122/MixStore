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


export default function FavoriteScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <FlatList
        data={items}
        keyExtractor={items => items.id}
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


const items = [
  {
    id: '5',
    name: 'Cherry Chocolate Floats',
    price: 190,
    liked: 246,
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aliquid excepturi repellendus ut corrupti blanditiis quisquam fuga qui enim distinctio perferendis dignissimos quae officia, quis id in illo cupiditate veniam',
    image:
      'https://i.pinimg.com/originals/06/c9/81/06c981b294b0250cb1253fcd62068f32.jpg',
    cal: 189,
    ingredients: ['chocolate', 'suger', 'banana', 'lemon', 'milk'],
  },

  {
    id: '2',
    name: 'strawberry juice',
    price: 420,
    liked: 270,
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aliquid excepturi repellendus ut corrupti blanditiis quisquam fuga qui enim distinctio perferendis dignissimos quae officia, quis id in illo cupiditate veniam',
    image:
      'https://www.mealgarden.com/media/recipe/2020/09/bigstock-Glass-Of-Fresh-Strawberry-Milk-344767756.jpeg',
    cal: 230,
    ingredients: ['banana', 'orange', 'milk', 'mint', 'strawberry'],
  },
];
