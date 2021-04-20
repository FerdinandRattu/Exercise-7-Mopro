import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Gap from '../../atom/Gap';
import Masukan from '../../atom/Masukan';
import Button from '../../atom/Button';

const Register = () => {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [notelepon, setNotelepon] = useState('');

  const handleSubmit = () => {
    const data = {
      nama: nama,
      username: username,
      email: email,
      alamat: alamat,
      notelepon: notelepon,
    };
    console.log(data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <Gap height={40} />
        <Masukan
          value={nama}
          label="Name"
          placeholder="Masukan Nama Lengkap Anda"
          onChangeText={e => setNama(e)}
        />
        <Gap height={20} />
        <Masukan
          value={username}
          label="Username"
          placeholder="Masukan Username Anda"
          onChangeText={e => setUsername(e)}
        />
        <Gap height={20} />
        <Masukan
          value={email}
          label="Email"
          placeholder="Masukan Email Anda"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={20} />
        <Masukan
          value={alamat}
          label="Address"
          placeholder="Masukan Address Anda"
          onChangeText={e => setAlamat(e)}
        />
        <Gap height={20} />
        <Masukan
          keyboardType="numeric"
          value={notelepon}
          label="Phone Number"
          placeholder="Masukan Phone Number Anda"
          onChangeText={e => setNotelepon(e)}
        />
        <Gap height={29} />
        <Button textButton="Register" onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default Register;

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
