import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {secondary, white} from '../../config/colors';

export default function AppBadge({color = secondary, title}) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 7,
  },
  text: {
    fontSize: 15,
    color: white,
    fontWeight: 'bold',
  },
});
