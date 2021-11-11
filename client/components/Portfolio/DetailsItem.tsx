import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const DetailsItem = ({ item }) => {
  console.log(item.amount);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coinItem}>
        <Text style={styles.coinText}>Coin: {item.type}</Text>
        <Text style={styles.coinText}>Amount Bought: {item.amount}</Text>
        <Text style={styles.coinText}>Bought at price: {item.coinPrice}</Text>
        <Text style={styles.coinText}>Current Price: ...</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: '100%',
    margin: 20,
  },

  coinText: {
    color: '#fff',
    margin: 2,
    fontFamily: 'Chivo_400Regular',
    letterSpacing: 1.5,
  },

  coinItem: {
    padding: 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
