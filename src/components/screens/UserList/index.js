import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Gap from '../../atom/Gap';
import Users from '../../molekul/Users';
import Axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
      setUsers(res.data),
    );
  }, []);

  return (
    <ScrollView>
      <View style={styles.list}>
        <Text style={styles.judul}>Users List</Text>
        <Gap height={31} />
        {users.map(item => (
          <Users
            key={item.id}
            nama={item.name}
            username={item.username}
            email={item.email}
            alamat={`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
            notelepon={item.phone}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default UserList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  judul: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
