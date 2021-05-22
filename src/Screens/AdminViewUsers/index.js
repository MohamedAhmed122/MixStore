import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import UserRow from '../../components/UserRow';
import AppLading from '../../common/AppLoading';
import {white} from '../../config/colors';
import {editUser, getAllUsers} from '../../requests/users';

export default function AdminViewUsers() {
  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState(false);
  const {currentUser} = useSelector(state => state.auth);

  useEffect(() => {
    getAllUsers(currentUser.token)
      .then(res => setUsers(res))
      .catch(err => console.log(err));
    if (updatedUser) {
      setTimeout(() => {
        setUpdatedUser(false);
      }, 100);
    }
  }, [updatedUser]);

  const handleAdminUser = (id, obj) => {
    editUser(currentUser.token, id, obj)
      .then(() => setUpdatedUser(true))
      .catch(err => console.log(err));
  };

  if (users.length < 1) return <AppLading />;
  return (
    <View style={styles.screen}>
      <FlatList
        data={users}
        keyExtractor={users => users._id}
        renderItem={({item}) => <UserRow user={item} handleAdminUser={handleAdminUser} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: white,
    height: '100%',
    width: '100%',
  },
});
