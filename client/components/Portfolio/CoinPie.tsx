import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ViewBase,
} from 'react-native';
import { VictoryPie, VictoryChart } from 'victory-native';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';

const CoinPie = () => {
  const navigation = useNavigation();
  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );
  // console.log(coinAmount);

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

  // const populateGraph = () => {
  //   for (let data in coinAmount) {
  //     let userAmount = coinAmount[data].amount;
  //     let userCoin = coinAmount[data].type;
  //     myData = {};
  //     myData.x = userCoin;
  //     myData.y = parseInt(userAmount);
  //     output.push(myData);
  //   }
  // };

  // populateGraph();

  const displayData = () => {
    if (output.length > 0) return output;
    return [{ x: 'No data yet...', y: 1 }];
  };

  // const displayData = () => {
  //   if (output.length > 0) return output;
  //   return [{ x: 'No data yet...', y: 1 }];
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Click on wheel to expand... </Text>
      <VictoryPie
        labelRadius={({ innerRadius }) => +innerRadius + 20}
        padAngle={({ datum }) => datum.y * 0.1}
        padding={{ top: 20, bottom: 60 }}
        innerRadius={100}
        cornerRadius={({ datum }) => datum.y * 0.5}
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
            fontSize: 20,
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
              onPressOut: () => {},
            },
          },
        ]}
      />
    </View>
  );
};

export default CoinPie;

const styles = StyleSheet.create({
  container: { marginBottom: 0 },

  text: { color: '#fff', textAlign: 'center', opacity: 0.4 },
});
