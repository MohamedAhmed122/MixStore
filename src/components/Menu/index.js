import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import {primary, white} from '../../config/colors';

const width = Dimensions.get('window').width;

export default function Menu({text, color = primary, Icon, ...props}) {
  return (
    <TouchableOpacity style={[styles.menu, {backgroundColor: color}]}>
      {Icon && <Icon {...props} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: width / 2 - 20,
    height: 150,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    color: white,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    textTransform: 'uppercase',
  },
});
