import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

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
    // position: 'absolute',
    // top: 10,
    // width: 250,
    // borderRadius: 40,
    // backgroundColor: 'blue',
  },
  username: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    letterSpacing: 2,
    fontFamily: 'Chivo_300Light',
    fontWeight: 'bold',
  },
});
