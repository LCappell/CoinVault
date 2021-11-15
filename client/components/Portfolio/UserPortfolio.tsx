import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const UserPortfolio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: 'white' }}>HEYYY</Text>
    </SafeAreaView>
  );
};

export default UserPortfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    top: 100,
    height: 80,
  },
});
