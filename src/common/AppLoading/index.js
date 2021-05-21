
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {primary} from '../../config/colors';

export default function AppLoading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});