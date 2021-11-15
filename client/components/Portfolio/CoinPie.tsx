import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import { VictoryPie } from 'victory-native';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';

const db_url = 'http://10.10.22.28:4000';

const CoinPie = ({ coinValues }) => {
  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );
  console.log(coinAmount);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [allData, setAllData] = useState([]);
  const [apiData, setApiData] = useState([]);

  let output: {}[] = [];
  let myData: any = {};

  const populateGraph = (coinArgs) => {
    coinArgs.forEach((item) => {
      let userAmount = item.userAmount;
      let userCoin = item.userCoin;

      const timesBy =
        userCoin === 'BTC'
          ? 14
          : userCoin === 'ETH'
          ? 4
          : userCoin === 'SOL'
          ? 2
          : userCoin === 'DOGE'
          ? 0.14
          : userCoin === 'ADA'
          ? 1.5
          : 1;

      myData = {};
      myData.x = userCoin;

      myData.y = parseInt(userAmount) * timesBy;

      output.push(myData);
    });
  };

  useEffect(() => {
    fetch(db_url)
      .then((res) => res.json())
      .then((coinInfo) => {
        populateGraph(coinInfo);
      });
  }, [populateGraph]);

  const getData = () => {
    fetch(db_url)
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
      <Text style={styles.text}>Click on wheel to expand...</Text>

      <VictoryPie
        labelRadius={({ innerRadius }) => +innerRadius + 20}
        padAngle={({ datum }) => datum.y * 0.7}
        padding={{ top: 10, bottom: 60 }}
        innerRadius={100}
        cornerRadius={({ datum }) => datum.y * 0.4}
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
            fontSize: 14,
            textAlign: 'center',
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
  container: { backgroundColor: '#080808' },
  pieContainer: { marginTop: 10 },

  text: { color: '#fff', textAlign: 'center', opacity: 0.4, marginBottom: 20 },
});
