import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';

import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';

const CoinPie = () => {
  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );

  // let userAmount: string = coinAmount.amount;
  // let userCoin: string = coinAmount.type;
  // console.log(userCoin);

  let myData: any = {};

  for (let data in coinAmount) {
    let userAmount = coinAmount[data].amount;
    let userCoin = coinAmount[data].type;
    myData.x = userCoin;
    myData.y = userAmount;
  }
  console.log(myData);
  let output: {}[] = [];
  output.push(myData);

  return (
    <View style={styles.container}>
      <VictoryPie
        labelRadius={({ innerRadius }) => innerRadius + 20}
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
      />
    </View>
  );
};

export default CoinPie;

const styles = StyleSheet.create({
  container: { marginBottom: 0 },
});
