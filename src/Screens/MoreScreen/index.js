import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {danger, lightGray, primary} from '../../config/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import List from '../../components/List';
import {useSelector} from 'react-redux';

export default function MoreScreen() {
  const {user} = useSelector(state => state.auth);
  console.log(user);

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.main}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/me.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.name}>{user.email}</Text>
        </View>
      </View>
      <List
        title="History"
        Icon={() => (
          <FontAwesome5 name="swatchbook" color={primary} size={20} />
        )}
      />
      <List
        title="Orders"
        Icon={() => <AntDesign name="appstore1" color={primary} size={20} />}
      />
      <List
        title="Settings"
        Icon={() => <AntDesign name="setting" color={primary} size={20} />}
      />
      <List
        title="Logout"
        Icon={() => <AntDesign name="logout" color={danger} size={20} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
  },
  main: {
    width: '100%',
    height: 90,
    backgroundColor: lightGray,
    marginBottom: 70,
  },
});
