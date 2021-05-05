import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  danger,
  dark,
  lightBlue,
  lightGray,
  primary,
  secondary,
  white,
} from '../../config/colors';
import items from '../../data/items';

const windowWidth = Dimensions.get('window').width;

export default function Card({item}) {
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <Feather
        name="shopping-cart"
        color={clicked ? danger : white}
        size={25}
        style={styles.icon}
        onPress={() => setClicked(true)}
      />
      <View style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: windowWidth - 40,
    marginHorizontal: 20,
    height: 300,
    backgroundColor: lightGray,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 230,
  },
  icon: {
    position: 'absolute',
    marginTop: 20,
    right: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  name: {
    color: primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: danger,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
