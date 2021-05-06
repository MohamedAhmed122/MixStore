import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {danger, lightGray, primary} from '../../config/colors';

export default function List({Icon, title, ...props}) {
  return (
    <TouchableOpacity style={styles.list}>
      <View style={styles.row}>
        <Icon {...props} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    height: 50,
    backgroundColor: lightGray,
    marginBottom: 3,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  text: {
    fontSize: 17,
    marginLeft: 20,
  },
});
