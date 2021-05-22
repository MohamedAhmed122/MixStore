import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {gray, primary, secondary} from '../../config/colors';

export default function OrderRow({order}) {
  return (
    <View>
      <View style={styles.flex}>
        <Image
          source={{
            uri: order.image,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.name}> {order.name}</Text>
        <Text style={styles.qty}>
          {Math.round(Math.random() * (4 - 1) + 1)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    // borderBottomColor: primary,
    // borderBottomWidth: 1,
    paddingBottom: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
  },
  name: {
    flex: 1,
    fontSize: 19,
  },
  qty: {
    color: secondary,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
