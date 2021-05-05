import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary, white} from '../../config/colors';

export default function AppButton({title, color = primary}) {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    padding: 13,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

// height = 13 + 13 + 20 + 18 + 10 = 56