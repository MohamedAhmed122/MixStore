import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import AppButton from '../../common/AppButton';
import {primary, secondary} from '../../config/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen() {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../../assets/Logo.jpeg')}
        resizeMode="cover"
        style={styles.image}
      />
      {/* <Image source={{ uri: ''}} /> */}
      <View style={styles.btnGroup}>
        <AppButton title="Login" color={primary} />
        <AppButton title="register" color={secondary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: windowWidth / 2 + 50,
    height: windowWidth / 2 + 50,
    alignSelf: 'center',
    marginTop: windowHeight / 4,
  },
  btnGroup: {
    top: windowHeight / 2 - 220,
  },
});
