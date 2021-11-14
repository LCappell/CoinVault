import React, { useCallback, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';
import DetailsItem from './DetailsItem';
import TabIcon from '../TabIcon';
import Icons from '../../constants/Icons';

const DetailsPage = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const revenue = () => {
    let total = 0;
    const totalSpent = values.map((item) => {
      const firstAmount = item.boughtPrice * item.userAmount;
      total += firstAmount;
    });
    return total;
  };

  const totalRev = revenue();

  const getAllCoinData = async (...userInput) => {
    return await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=5df9ab07ed0bcc926c1db8e9c4320191e6ee60ca&ids=${userInput}&interval=1d`
    )
      .then((res) => res.json())
      .then((output) => {
        setApiData(output);
      });
  };

  const valuesMap: any = values.map((item) => item.userCoin);
  const valuesAmount: any = values.map((item) => item.userAmount);

  const dataNumber = apiData.map((data) => {
    if (valuesMap.includes(data.symbol)) {
      return parseInt(data.price) * parseInt(valuesAmount);
    }
  });

  // const total = dataNumber.reduce((a, b) => a + b);
  const sumofCoins = dataNumber.map((price) => {
    let totalSum = 0;
    if (price !== undefined) {
      totalSum += parseInt(price);
    } else {
      return null;
    }
    return parseInt(totalSum);
  });

  // @ts-ignore:next-line
  const totalAmount = (sumofCoins[0] +=
    // @ts-ignore:next-line
    sumofCoins[1] + sumofCoins[2] + sumofCoins[3]);

  const handleDelete = (id: string) => {
    fetch(`http://10.10.22.28:4000/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setValues((data) => data.filter((item: any) => item._id !== id));
    });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    try {
      getAllCoinData('BTC', 'ETH', 'SOL', 'ADA', 'DOGE', 'XRP', 'SHIB');

      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetch('http://10.10.22.28:4000')
      .then((res) => res.json())
      .then((coinInfo) => {
        getAllCoinData('BTC', 'ETH', 'SOL', 'ADA', 'DOGE', 'XRP', 'SHIB');
        setValues(coinInfo);
      });
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <DetailsItem
        apiData={apiData}
        onDelete={handleDelete}
        item={item}
        getAllCoinData={getAllCoinData}
      />
    ),
    []
  );
  const keyExtractor = useCallback((item) => item._id, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Portfolio Details </Text>
      <Text style={styles.total}> Total: ${totalAmount.toLocaleString()} </Text>
      <Text style={styles.revenue}>
        Revenue:
        <Text style={totalAmount - totalRev > 0 ? styles.green : styles.red}>
          {` $${(totalAmount - totalRev).toLocaleString()}`}
        </Text>
      </Text>

      <TouchableOpacity
        style={styles.goback}
        onPress={() => navigation.goBack()}
      >
        <TabIcon icon={Icons.goBack} />
      </TouchableOpacity>

      <FlatList
        style={styles.flatListItem}
        data={values}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor='#fff'
          />
        }
      />
    </SafeAreaView>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000',
  },

  goback: {
    position: 'absolute',
    color: 'white',
    top: 70,
    left: 20,
    opacity: 0.6,
  },

  green: { color: 'green' },
  red: { color: 'red' },

  header: {
    color: '#fff',
    position: 'absolute',
    top: 70,
    letterSpacing: 2,
    opacity: 0.8,
    fontSize: 20,
  },

  total: {
    color: '#fff',
    position: 'absolute',
    top: 130,
    letterSpacing: 2,
    opacity: 0.8,
    fontSize: 25,
  },

  revenue: {
    color: '#fff',
    position: 'absolute',
    top: 160,
    letterSpacing: 2,
    opacity: 0.8,
    fontSize: 20,
    marginTop: 8,
  },

  text: {
    color: '#a0d8f3',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 15,
    marginRight: 30,
    fontFamily: 'Chivo_400Regular',
    fontSize: 20,
    top: 80,
    letterSpacing: 1,
  },

  flatListItem: {
    fontFamily: 'Chivo_400Regular',
    width: '95%',
    marginTop: 120,
    paddingTop: 0,
    padding: 20,
  },
});
