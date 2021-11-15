import React from 'react';
import moment from 'moment';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
  ChartXLabel,
} from '@rainbow-me/animated-charts';

// Format Sparkline

const formatSparkline = (numbers) => {
  const sevenDaysAgo = moment().subtract(7, 'days').unix();
  let formattedSparkline = numbers.map((item, index) => {
    return {
      x: sevenDaysAgo + (index + 1) * 3600,
      y: item,
    };
  });
  return formattedSparkline;
};

export const { width: SIZE } = Dimensions.get('window');

const BottomSheet = ({ selectCoin, sparkLine }) => {
  let price: string = selectCoin.current_price.toLocaleString('USD', {
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  // Formate Date
  const formatDatetime = (value) => {
    'worklet';
    if (value === '') {
      return `${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })}`;
    }
    const date = new Date(Number(value * 1000));
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();
    const d = date.getDate();
    const n = date.getMonth();
    const y = date.getFullYear();
    return `${d}/${n}/${y}`;
  };

  // Format Currency
  const formatUSD = (value) => {
    'worklet';
    if (value === '') {
      return `$${price}`;
    }
    return ` $${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };
  return (
    <ChartPathProvider
      data={{
        points: formatSparkline(sparkLine),
        smoothingStrategy: 'bezier',
      }}
    >
      <SafeAreaView style={styles.bottomSheetContainer}>
        <View style={styles.imgArea}>
          <Image source={{ uri: selectCoin.image }} style={styles.image} />
        </View>
        <View style={styles.coinInfo}>
          <View style={styles.border}>
            <Text style={styles.listItem}>
              Market Cap: ${selectCoin.market_cap.toLocaleString()}
            </Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.listItem}> ATH: ${selectCoin.ath.toLocaleString()} </Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.listItem}>
              ATH Date: {moment(selectCoin.ath_date).format('MMMM Do YYYY')}{' '}
            </Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.listItem}>
              Circulating Supply:{' '}
              {selectCoin.circulating_supply.toLocaleString()}
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.prices}>
        <ChartYLabel style={styles.dynamicData} format={formatUSD} />
        <ChartXLabel style={styles.dynamicData} format={formatDatetime} />
      </View>
      <ChartPath
        height={SIZE / 2}
        stroke={
          selectCoin.price_change_percentage_24h > 0 ? '#34C759' : '#FF3B30'
        }
        strokeWidth='3'
        width={SIZE}
      />

      <ChartDot
        size={9}
        style={{ backgroundColor: '#003B73', marginTop: 400 }}
      />
    </ChartPathProvider>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: '#181818',
    borderRadius: 20,
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
  },

  dynamicData: {
    color: 'white',
    backgroundColor: '#60A3D9',

    borderRadius: 50,
    width: 150,
    textAlign: 'center',
    letterSpacing: 2,
    fontWeight: 'bold',
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 20,
  },

  prices: {
    marginTop: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
  },

  border: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },

  coinInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
    color: '#fff',
    fontFamily: 'Chivo_400Regular',
    letterSpacing: 1,
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 25,
    marginTop: 10,
  },
  imgArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    margin: 15,
    fontFamily: 'Chivo_400Regular',
    letterSpacing: 0.5,
    fontSize: 14,
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: 300,
    textAlign: 'center',
    padding: 8,
    // backgroundColor: '#cdebf9',
    overflow: 'hidden',

  },
});
