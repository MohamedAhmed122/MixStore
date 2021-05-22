import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Menu from '../../components/Menu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {blue, danger, secondary, white} from '../../config/colors';

export default function AdminMenuScreen() {
  return (
    <View>
      <SafeAreaView />
      <View style={{flexDirection: 'row'}}>
        <Menu
          text="Users"
          Icon={() => (
            <FontAwesome name="user-circle-o" color={white} size={40} />
          )}
        />
        <Menu
          text="Orders"
          color={secondary}
          Icon={() => (
            <FontAwesome name="chain" color={white} size={40} />
          )}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Menu
          text="Products"
          color={danger}
          Icon={() => (
            <FontAwesome name="shopping-basket" color={white} size={40} />
          )}
        />
        <Menu
          text="Create Product"
          color={blue}
          Icon={() => (
            <FontAwesome name="plus-circle" color={white} size={40} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
