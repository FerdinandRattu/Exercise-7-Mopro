import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';
import Masukan from '../../atom/Masukan';
import Button from '../../atom/Button';
import Gap from '../../atom/Gap';
import User from '../../molekul/Users';

const AddUser = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const data = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      avatar: 'https://source.unsplash.com/random',
    };
    Axios.post('http://10.0.2.2:3004/users', data);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add User</Text>

        <Gap height={40} />
        <Masukan
          value={firstname}
          label="First Name"
          placeholder="Masukkan Nama Depan Anda"
          onChangeText={e => setFirstname(e)}
        />
        <Gap height={20} />
        <Masukan
          value={lastname}
          label="Last Name"
          placeholder="Masukkan Nama Belakang Anda"
          onChangeText={e => setLastname(e)}
        />
        <Gap height={20} />
        <Masukan
          value={email}
          label="Email"
          placeholder="Masukkan Email Anda"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={20} />
        <Button label="Add User" onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    marginHorizontal: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
