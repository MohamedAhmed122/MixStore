import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import AppButton from '../../common/AppButton';
import {primary, secondary, white} from '../../config/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../../assets/Logo.jpeg')}
        resizeMode="cover"
        style={styles.image}
      />
      {/* <Image source={{ uri: ''}} /> */}
      <View style={styles.btnGroup}>
        <AppButton
          title="Login"
          color={primary}
          onPress={() => navigation.navigate('Login')}
        />
        <AppButton
          title="register"
          color={secondary}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: white,
  },
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
