import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {danger, gray, white} from '../../config/colors';
import Feather from 'react-native-vector-icons/Feather';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch} from 'react-redux';
import {removeItemFromCart} from '../../redux/cart/CartActions';
export default function CartRow({item}) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <Swipeable
      // style={styles.container}
      renderRightActions={() => (
        <TouchableOpacity style={styles.swipe} onPress={handleDelete}>
          <Feather name="trash-2" color={white} size={30} />
        </TouchableOpacity>
      )}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{item.name}</Text>
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
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  swipe: {
    backgroundColor: 'red',
    width: 80,
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    fontSize: 16,
  },
  number: {
    margin: 10,
    fontSize: 18,
  },
});
