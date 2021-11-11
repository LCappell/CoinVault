import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

import { saveAmount } from '../../redux/CoinInputData';
import { RootState } from '../../redux/Store';
import { useSelector, useDispatch } from 'react-redux';

const UserInput = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [userAmount, setuserAmount] = useState('');
  // const [userCoin, setuserCoin] = useState('');

  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );
  const coinDate = useSelector((state: RootState) => state.CoinInputData.date);
  const coinType = useSelector((state: RootState) => state.CoinInputData.coin);

  const addCoinData = () => {
    dispatch(
      saveAmount({
        amount: coinAmount,
      })
    );
    console.log(coinAmount);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // A(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder='Input a coin...'
        placeholderTextColor='#fff'
        value={userAmount}
        style={styles.selector}
        onChangeText={(val) => setuserAmount(val)}
        keyboardAppearance='dark'
      />

      <View style={styles.row}>
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={onChange}
          style={styles.datepicker}
          themeVariant='light'
        />
        <TextInput
          placeholder='Amount...'
          placeholderTextColor='#fff'
          value={userAmount}
          style={styles.input}
          onChangeText={(val) => setuserAmount(val)}
          keyboardAppearance='dark'
        />
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={addCoinData} style={styles.button}>
            <Text style={styles.btntext}>Add Data</Text>
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

  selector: {
    width: 300,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff',
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
    backgroundColor: '#fff',
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
    color: '#000',
  },
  row: {
    width: 300,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  datepicker: {
    borderWidth: 2,
    borderColor: '#fff',
    marginVertical: 20,
    borderRadius: 15,
    color: '#fff',
    backgroundColor: '#fff',
    overflow: 'hidden',
    width: 120,
    marginRight: 20,
  },

  text: {
    textAlign: 'center',
    letterSpacing: 1,
    paddingTop: 5,
    color: '#fff',
  },

  input: {
    width: 120,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff',
    paddingRight: 30,
    marginVertical: 15,
  },
});
