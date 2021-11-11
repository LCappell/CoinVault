import React, { useRef } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Button,
  TextInput,
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
  const progress = useRef(new Animated.Value(0)).current;
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
      <KeyboardAvoidingView behavior='padding'>
        <SafeAreaView style={styles.coinDataArea}>
          <Header formatEmail={formatEmail} />
          <CoinPie />
          <UserInput />
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
    marginBottom: 20,
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
