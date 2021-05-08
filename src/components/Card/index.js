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


const windowWidth = Dimensions.get('window').width;

export default function Card({item, onPress}) {
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="cover"
        style={styles.image}
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
