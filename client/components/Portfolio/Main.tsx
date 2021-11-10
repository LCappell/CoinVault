import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import CoinPie from './CoinPie';
import Header from './Header';

const Main = () => {
  // Username for header
  const formatEmail = auth.currentUser?.email.split('@')[0];

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header formatEmail={formatEmail} />
      <CoinPie />
      <TouchableOpacity style={styles.signOutArea} onPress={handleSignOut}>
        <Text style={styles.text}>Sign out</Text>
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

  title: {
    fontSize: 24,
    margin: 10,
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  signOutArea: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 100,
    right: 10,
    borderRadius: 20,
  },
});
