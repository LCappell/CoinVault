import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, ScrollView, RefreshControl, Text } from 'react-native';
import { VictoryPie } from 'victory-native';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';

const CoinPie = ({ coinValues }) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [allData, setAllData] = useState([]);
  // console.log(allData);

  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );

  // DONT DELETE
  // const getCurrentCoinData = (userInput) => {
  //   return coinValues.map((item) => {
  //     let correctAmount;
  //     const coinSymbols = item.symbol.toUpperCase().toString();
  //     let coinCurrentPrices: any = +item.current_price;
  //     if (userInput == coinSymbols) {
  //       correctAmount = coinCurrentPrices;
  //       return correctAmount;
  //     }
  //     console.log(correctAmount);
  //   });
  // };
  // getCurrentCoinData('ETH');

  const getCoinItemData = (userInput) => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${userInput}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
      .then((res) => res.json())
      .then((output) => {
        let price = output.market_data.current_price.usd;
        console.log(price);
      });
  };
  getCoinItemData('ethereum');

  let output: {}[] = [];
  let myData: any = {};

  const populateGraph = (coinArgs) => {
    coinArgs.forEach((item) => {
      let userAmount = item.userAmount;
      let userCoin = item.userCoin;

      myData = {};
      myData.x = userCoin;

      myData.y = parseInt(userAmount);

      output.push(myData);
    });
  };

  useEffect(() => {
    fetch('http://10.10.22.28:4000')
      .then((res) => res.json())
      .then((coinInfo) => {
        populateGraph(coinInfo);
      });
  }, [populateGraph]);

  const getData = () => {
    fetch('http://10.10.22.28:4000')
      .then((res) => res.json())
      .then((coinInfo) => {
        setAllData(coinInfo);
        populateGraph(allData);
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    try {
      getData();
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ScrollView
      style={styles.pieContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor='#cdebf9'
        />
      }
    >
      <Text style={styles.text}> Click on wheel to expand... </Text>

      <VictoryPie
        labelRadius={({ innerRadius }) => +innerRadius + 20}
        padAngle={({ datum }) => datum.y * 0.6}
        padding={{ top: 10, bottom: 60 }}
        innerRadius={100}
        cornerRadius={({ datum }) => datum.y * 0.1}
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        data={output}
        animate={{
          duration: 2000,
        }}
        style={{
          data: {
            fillOpacity: 0.9,
            stroke: '#fff',
            strokeWidth: 3,
          },
          labels: {
            fontSize: 17,
            fill: '#fff',
          },
        }}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPressIn: () => {
                navigation.navigate('Details');
              },
            },
          },
        ]}
      />
    </ScrollView>
  );
};

export default CoinPie;

const styles = StyleSheet.create({
  container: {},
  pieContainer: { marginTop: 10 },

  text: { color: '#fff', textAlign: 'center', opacity: 0.4, marginBottom: 20 },
});
