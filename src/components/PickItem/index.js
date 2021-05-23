import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import PickerModal from './PickerModal';
import {dark, gray} from '../../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PickItem({value, onChangeText, ...otherProps}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setOpenModal(true)}>
        <FontAwesome
          name="list"
          color="gray"
          size={20}
          style={{marginRight: 10}}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Category"
          onChangeText={onChangeText}
          {...otherProps}
        />
      </TouchableOpacity>
      <PickerModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
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
  },
});
