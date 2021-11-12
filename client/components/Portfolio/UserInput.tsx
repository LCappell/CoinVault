import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { saveCoinData } from '../../redux/CoinInputData';
import { RootState } from '../../redux/Store';
import { useDispatch, useSelector } from 'react-redux';

import TabIcon2 from '../../components/TabIcon2';
import Icons from '../../constants/Icons';

const UserInput = ({ coinValues }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [boughtPrice, setBoughtPrice] = useState('');
  const [userAmount, setUserAmount] = useState('');
  const [userCoin, setUserCoin] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const addCoinData = () => {
    console.log(`Adding ${userAmount}`);
    dispatch(
      saveCoinData({
        amount: userAmount,
        type: userCoin,
        coinPrice: boughtPrice,
        openData: date,
      })
    );

    fetch('http://10.10.22.28:4000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, boughtPrice, userAmount, userCoin }),
    });

    setUserAmount('');
    setUserCoin('');
    setDate(new Date());
    setBoughtPrice('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TextInput
          placeholder='Input a coin...'
          placeholderTextColor='#fff'
          value={userCoin}
          style={styles.selector}
          onChangeText={(val) => setUserCoin(val)}
          keyboardAppearance='dark'
        />
        <View style={styles.dateArea}>
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            is24Hour={true}
            mode='date'
            display='default'
            onChange={onChange}
            style={styles.datepicker}
          />
        </View>

        <TextInput
          placeholder='Open price...'
          placeholderTextColor='#fff'
          value={boughtPrice}
          style={styles.input}
          onChangeText={(val) => setBoughtPrice(val)}
          keyboardAppearance='dark'
        />
        <TextInput
          placeholder='Amount...'
          placeholderTextColor='#fff'
          value={userAmount}
          style={styles.input}
          onChangeText={(val) => setUserAmount(val)}
          keyboardAppearance='dark'
        />
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={addCoinData} style={styles.button}>
            <TabIcon2 icon={Icons.add} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  dateArea: {},

  selector: {
    width: 170,
    height: 50,
    fontSize: 18,

    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#cdebf9',
    borderRadius: 8,
    color: '#cdebf9',
    fontFamily: 'Chivo_400Regular',
    paddingRight: 30,
    marginVertical: 15,
  },

  btnArea: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
    width: 100,
    elevation: 3,
    padding: 0,
  },

  btntext: {
    fontSize: 16,
    fontFamily: 'Chivo_400Regular',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#cdebf9',
  },
  row: {
    width: 400,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  datepicker: {
    borderWidth: 2,
    borderColor: '#cdebf9',
    marginVertical: 15,
    borderRadius: 15,

    backgroundColor: 'grey',
    overflow: 'hidden',
    width: 150,
    marginLeft: 20,
    height: 50,
  },

  text: {
    textAlign: 'center',
    letterSpacing: 1,
    paddingTop: 5,
    color: '#cdebf9',
    fontFamily: 'Chivo_400Regular',
  },

  input: {
    width: 170,
    height: 50,
    fontFamily: 'Chivo_400Regular',

    fontSize: 20,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#cdebf9',
    borderRadius: 8,
    color: '#cdebf9',
    paddingRight: 30,
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
