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
import CoinPie from './CoinPie';
import Header from './Header';
import UserInput from './UserInput';

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
      <View style={styles.coinDataArea}>
        <CoinPie />
        <UserInput />
      </View>
      <TouchableOpacity style={styles.signOutArea} onPress={handleSignOut}>
        <Text style={styles.text}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#000',
  },
  coinDataArea: { top: 80 },

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
