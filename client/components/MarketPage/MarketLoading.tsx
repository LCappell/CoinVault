import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
    backgroundColor: 'blue',
    flex: 1,
  },
});
