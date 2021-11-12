import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import CoinPie from './CoinPie';
import Header from './Header';
import UserInput from './UserInput';

import TabIcon from '../../components/TabIcon';
import Icons from '../../constants/Icons';

const Main = () => {
  const [coinValues, setCoinValues] = useState([]);
  const formatEmail = auth.currentUser?.email.split('@')[0];

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((output) => {
        setCoinValues(output);
      });
  }, []);

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <SafeAreaView style={styles.coinDataArea}>
          <Header formatEmail={formatEmail} />
          <CoinPie coinValues={coinValues} />
          <UserInput coinValues={coinValues} />
        </SafeAreaView>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.signOutArea} onPress={handleSignOut}>
        <TabIcon icon={Icons.logout} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#000',
  },

  coinDataArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  signOutArea: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 100,
    right: 10,
    borderRadius: 20,
  },
});

export default Main;
