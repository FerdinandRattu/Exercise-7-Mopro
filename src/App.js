import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Register from './components/screens/Register';
import UserList from './components/screens/UserList';
import AddUser from './components/screens/AddUser';
import HomeScreen from './components/screens/HomeScreen';

const App = () => {
  return (
    <>
      {/* <Register/> */}
      <UserList />
      {/* <AddUser/> */}
      {/* <HomeScreen/> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
