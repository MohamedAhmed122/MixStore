import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {primary} from '../../config/colors';

export default function ShippingInfo({address}) {
  return (
    <View>
      <View style={styles.flex}>
        <Text style={styles.mainText}>Phone Number</Text>
        <Text style={styles.wubText}> {address.phoneNumber}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.mainText}>Address</Text>
        <Text style={styles.wubText}>{address.address}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.mainText}>City</Text>
        <Text style={styles.wubText}>{address.city}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.mainText}>ZipCode</Text>
        <Text style={styles.wubText}> {address.zipCode}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: 19,
    color: primary,
  },
  subText: {
    fontSize: 19,
  },
});
