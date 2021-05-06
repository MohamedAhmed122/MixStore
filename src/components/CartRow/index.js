import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {gray} from '../../config/colors';

export default function CartRow({count, setCount}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{
            uri:
              'https://www.mealgarden.com/media/recipe/2020/09/bigstock-Glass-Of-Fresh-Strawberry-Milk-344767756.jpeg',
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Drink Name</Text>
      </View>
      <View style={styles.row}>
        <AntDesign
          name="pluscircleo"
          color="gray"
          size={30}
          onPress={() => {
            setCount(count + 1);
          }}
        />
        <Text style={styles.number}>{count}</Text>
        <AntDesign
          name="minuscircleo"
          color="gray"
          size={30}
          onPress={() => {
            if (count <= 1) return;
            setCount(count - 1);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    paddingBottom: 15,
    borderBottomColor: gray,
    borderBottomWidth: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  number: {
    margin: 10,
    fontSize: 18,
  },
});
