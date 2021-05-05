import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {dark, gray} from '../../config/colors';

export default function AppInput({placeholder, inputValue, setInputValue}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    margin: 'auto',
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
    marginLeft: 10,
    color: dark,
    fontSize: 17,
    flex: 1,
  },
});
