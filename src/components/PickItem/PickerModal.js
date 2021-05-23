import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../common/AppButton';
import Feather from 'react-native-vector-icons/Feather';
import {blue, white} from '../../config/colors';

export default function PickerModal({openModal, setOpenModal}) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Modal visible={openModal} style={styles.container}>
      <SafeAreaView />
      {ingredients.map(item => (
        <TouchableOpacity
          onPress={() => setIsPressed(true)}
          key={item}
          style={styles.flex}>
          <Text style={styles.text}>{item} </Text>
          {isPressed && <Feather name="check" color={blue} size={17} />}
        </TouchableOpacity>
      ))}
      <AppButton
        title="Submit"
        onPress={() => {
          setOpenModal(false);
        }}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: white,
  },
  flex: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 19,
  },
});

const ingredients = [
  'sugar',
  'banana',
  'orange',
  'milk',
  'mint',
  'strawberry',
  'mongo',
];
