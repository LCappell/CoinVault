import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import CoinPie from './CoinPie';
import Header from './Header';
import UserInput from './UserInputArea/UserInput';
import UserInputNav from './UserInputArea/UserInputNav';

import TabIcon from '../TabIcons/TabIcon';
import TabIcon5 from '../TabIcons/TabIcon5';

import Icons from '../../constants/Icons';
import TabIcon3 from '../TabIcons/TabIcon3';
import Assets from './Assets/Assets';

const Main = () => {
  const [coinValues, setCoinValues] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [isClicked, setisClicked] = useState(false);
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
          <UserInputNav coinValues={coinValues} />

          {/* <TouchableOpacity
            style={styles.addPosition}
            onPress={() => {
              setShowInput(!showInput);
              setisClicked(!isClicked);
            }}
          >
            {isClicked ? (
              <View style={styles.row}>
                <Text style={styles.addText}>Add Coins</Text>
                <TabIcon3 icon={Icons.addCoin} />
              </View>
            ) : (
              <View style={styles.row}>
                <Text style={styles.asset}>Transactions</Text>
                <TabIcon3 icon={Icons.money} />
              </View>
            )}
          </TouchableOpacity>
          {!showInput ? <UserInput coinValues={coinValues} /> : <Assets />} */}
        </SafeAreaView>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.signOutArea} onPress={handleSignOut}>
        <TabIcon5 icon={Icons.logoutcolor} />
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
  addPosition: { position: 'absolute', top: 420, right: 20 },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#000',
  },
  row: { flexDirection: 'row' },

  addText: {
    color: '#fff',
    paddingTop: 10,
    fontFamily: 'Chivo_400Regular',
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.7,
    marginTop: 45,
    paddingLeft: 10,
    marginRight: 10,
  },

  asset: {
    color: '#fff',
    paddingTop: 10,
    fontFamily: 'Chivo_400Regular',
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.5,
    marginTop: 45,
    marginRight: 10,
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
