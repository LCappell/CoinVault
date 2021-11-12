import React, { useState, useEffect, FC, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Component Import
import CoinList from '../components/MarketPage/CoinList';
import CoinSearch from '../components/MarketPage/CoinSearch';
import MarketLoading from '../components/MarketPage/MarketLoading';
// Type
import { coinData } from '../types/coinData';

const Market: FC = () => {
  const [coin, setCoin] = useState([]);
  const [input, setInput] = useState('');
  const [filteredCoin, setFilteredCoin] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);

  /**
   * Search Bar function
   * @param val - Search Bar input value
   * Passed into CoinSearch
   */

  const filterCoins = (val: string) => {
    setInput(val);
    if (val) {
      const filtered = coin.filter((data: coinData) =>
        data.name.toLowerCase().includes(input.toLowerCase())
      );

      setFilteredCoin(filtered);
    }
  };

  const getMarketData = useCallback(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d'
      )
      .then((res) => {
        setisLoaded(true);
        setCoin(res.data);
        setFilteredCoin(res.data);
      });
  }, []);

  useEffect(() => getMarketData(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.marketTitle}>Market</Text>
        <Ionicons
          onPress={() => setShowSearch(!showSearch)}
          style={styles.searchBar}
          name='ios-search'
          size={30}
          color='#fff'
        />
      </View>
      {showSearch ? (
        <CoinSearch filterCoins={filterCoins} input={input} />
      ) : null}

      {isLoaded ? (
        <CoinList
          input={input}
          filteredCoin={filteredCoin}
          filterCoins={filterCoins}
          coinData={coin}
          getMarketData={getMarketData}
        />
      ) : (
        <MarketLoading />
      )}
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    bottom: 20,
    backgroundColor: '#080808',
  },

  searchBar: {
    fontSize: 30,
    color: '#BFD7ED',
  },
  marketTitle: {
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#BFD7ED',
    fontSize: 25,
    fontFamily: 'Chivo_700Bold',
  },

  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#BFD7ED',
    borderBottomWidth: 2,
    padding: 20,
    marginTop: 25,
  },
});
