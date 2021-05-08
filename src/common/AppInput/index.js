import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {dark, gray} from '../../config/colors';

export default function AppInput({
  placeholder,
  value,
  onChangeText,
  Icon,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      {Icon && <Icon {...otherProps} style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: '2.5%',
    backgroundColor: gray,
    height: 50,
    borderRadius: 25,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: '100%',
    marginLeft: 20,
    color: dark,
    fontSize: 18,
    flex: 1,
  },
});
