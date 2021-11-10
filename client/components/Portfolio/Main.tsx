import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';

const Main = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Portfolio - Main</Text>
      <Text style={styles.text}>Welcome: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.signOutArea} onPress={handleSignOut}>
        <Text style={styles.text}>LOG OUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#000',
    height: '90%',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  signOutArea: { padding: 10, borderWidth: 1, borderColor: '#fff' },
});
