import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Users = ({nama, username, email, alamat, notelepon}) => {
  return (
    <View style={styles.border}>
      <Text style={styles.textTebal}>
        Name:<Text style={styles.textTipis}> {nama}</Text>
      </Text>
      <Text style={styles.textTebal}>
        Username:<Text style={styles.textTipis}> {username}</Text>
      </Text>
      <Text style={styles.textTebal}>
        Email:<Text style={styles.textTipis}> {email}</Text>
      </Text>
      <Text style={styles.textTebal}>
        Address:<Text style={styles.textTipis}> {alamat}</Text>
      </Text>
      <Text style={styles.textTebal}>
        Phone:<Text style={styles.textTipis}> {notelepon}</Text>
      </Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C5C5C5',
    paddingLeft: 26,
    paddingTop: 13,
    paddingBottom: 11,
    marginBottom: 30,
  },
  textTebal: {
    fontWeight: 'bold',
  },
  textTipis: {
    fontWeight: 'normal',
  },
});
