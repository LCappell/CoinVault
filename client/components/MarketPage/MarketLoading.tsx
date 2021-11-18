import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MarketLoading = () => {
  return (
    <View style={styles.container}>
      <Text>Market Data Loading...</Text>
    </View>
  );
};

export default MarketLoading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});
