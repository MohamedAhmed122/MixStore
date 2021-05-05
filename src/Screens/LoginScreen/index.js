import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppButton from '../../common/AppButton';
import AppInput from '../../common/AppInput';
import {dark, gray} from '../../config/colors';

export default function LoginScreen() {
  return (
    <View>
      <View style={styles.container}>
        <AppInput
          placeholder="Email"
          Icon={() => (
            <FontAwesome5
              name="user-alt"
              size={22}
              color="gray"
              style={{paddingRight: 5}}
            />
          )}
        />
        <AppInput
          placeholder="Password"
          Icon={() => (
            <FontAwesome5
              name="lock"
              size={22}
              color="gray"
              style={{paddingRight: 5}}
            />
          )}
        />
        <AppButton title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
