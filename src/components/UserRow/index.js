import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-image-avatars';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {danger, gray, primary} from '../../config/colors';

export default function UserRow({user, handleAdminUser}) {
  console.log('----------', user);
  return (
    <View style={styles.flex}>
      <View>
        <Avatar
          type="text"
          text={user.name}
          size="x-small"
          borderColor="#f2f2f2"
          textBackgroundFill="#fff"
          shadow
        />
      </View>

      <Text style={styles.text}>{user.email}</Text>
      {user.isAdmin === 'true' ? (
        <AntDesign
          color={primary}
          name="checkcircle"
          size={30}
          onPress={() =>
            handleAdminUser(user._id, {
              name: user.name,
              email: user.email,
              isAdmin: false,
            })
          }
        />
      ) : (
        <Entypo
          color={danger}
          name="circle"
          size={30}
          onPress={() =>
            handleAdminUser(user._id, {
              name: user.name,
              email: user.email,
              isAdmin: true,
            })
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: gray,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    left: -20,
    fontSize: 17,
  },
});
