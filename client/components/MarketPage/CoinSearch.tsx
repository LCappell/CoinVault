import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';

const CoinSearch = ({ input, filterCoins }) => {
  return (
    <SafeAreaView style={styles.searchContainer}>
      <TextInput
        value={input}
        onChangeText={filterCoins}
        placeholder='Search...'
        placeholderTextColor='#fff'
        style={styles.input}
      />
    </SafeAreaView>
  );
};

export default CoinSearch;

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,

    marginTop: 30,
  },

  input: {
    borderColor: '#BFD7ED',
    borderWidth: 2,
    fontWeight: 'bold',
    letterSpacing: 1,

    color: '#fff',
    padding: 15,
    borderRadius: 30,
    paddingLeft: 20,
    width: '70%',
  },
});
