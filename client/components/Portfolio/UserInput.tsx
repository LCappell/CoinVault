import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

import { RootState } from '../../redux/Store';
import { useSelector, useDispatch } from 'react-redux';

const UserInput = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.formArea}>
        <Text style={styles.text}>Add to your Portfolio here...</Text>
        <RNPickerSelect
          placeholder={{ label: 'Select a coin...', value: null }}
          onValueChange={(value) => console.log(value)}
          items={[{ label: 'JavaScript', value: 'JavaScript' }]}
          style={pickerStyles}
        />

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
          style={styles.input}
        />
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Add Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  btnArea: { justifyContent: 'center', alignItems: 'center' },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 100,
    elevation: 3,
  },
  btntext: {
    fontSize: 16,
    fontFamily: 'Chivo_700Bold',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },

  datepicker: {
    borderWidth: 2,
    borderColor: '#fff',
    marginVertical: 20,
    borderRadius: 15,
    color: '#fff',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  formArea: {},

  text: {
    textAlign: 'center',
    letterSpacing: 1,
    paddingTop: 5,
    color: '#fff',
  },

  input: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff',
    paddingRight: 30, //
    marginVertical: 15,
  },
});

// STYLING FOR DATES
const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 2,

    borderColor: '#fff',
    borderRadius: 8,
    color: '#fff',
    marginTop: 20,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    color: '#fff',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
