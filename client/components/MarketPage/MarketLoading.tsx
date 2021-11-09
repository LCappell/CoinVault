import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const MarketLoading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Market Data Loading...</Text>
    </SafeAreaView>
  );
};

export default MarketLoading;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
