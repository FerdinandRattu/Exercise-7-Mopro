import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../../molekul/Card';
import Axios from 'axios';

const HomeScreen = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    Axios.get('http://10.0.2.2:3004/users').then(res => setUser(res.data));
  }, [user]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {user.map(item => (
          <Card
            key={item.id}
            Name={`${item.first_name} ${item.last_name} `}
            email={item.email}
            imageUrl={item.avatar}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

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
