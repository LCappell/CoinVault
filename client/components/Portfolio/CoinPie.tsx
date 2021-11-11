import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryPie
          labelRadius={({ innerRadius }) => innerRadius + 20}
          padAngle={({ datum }) => datum.y * 0.1}
          padding={{ top: 20, bottom: 60 }}
          innerRadius={100}
          cornerRadius={({ datum }) => datum.y * 0.5}
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={[
            { x: 'ADA', y: 40 },
            { x: 'BTC', y: 35 },
            { x: 'ETH', y: 40 },
            { x: 'SOL', y: 85 },
          ]}
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
  }
}
const styles = StyleSheet.create({
  container: { marginBottom: 0 },
});
