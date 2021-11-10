import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Header = ({ formatEmail }) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.username}>{formatEmail}'s portfolio</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 60,
    width: 300,
    borderRadius: 20,
    marginBottom: 0,
  },
  username: {
    color: '#000',
    textAlign: 'center',
    paddingVertical: 15,
    letterSpacing: 2,
    fontFamily: 'Chivo_300Light',
    fontWeight: 'bold',
  },
});
