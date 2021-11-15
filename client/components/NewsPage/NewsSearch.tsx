import React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

const NewsSearch = ({ input, filterNews }) => {
  return (
    <SafeAreaView style={styles.searchContainer}>
      <TextInput
        value={input}
        onChangeText={filterNews}
        placeholder='Search...'
        placeholderTextColor='#fff'
        style={styles.input}
        keyboardAppearance='dark'
      />
    </SafeAreaView>
  );
};

export default NewsSearch;

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
