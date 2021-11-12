import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import TabIcon from '../../components/TabIcon';
import Icons from '../../constants/Icons';

const DetailsItem = ({ item, onDelete }) => {
  const formatDate = moment(item.openData).format('L');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.coinItem}>
        <Text style={styles.coinType}>Coin: {item.userCoin}</Text>
        <Text style={styles.coinText}>Amount Bought: {item.userAmount}</Text>
        <Text style={styles.coinText}>Bought at price: {item.userCoin}</Text>
        <Text style={styles.coinText}>Bought at price: {formatDate}</Text>
        <Text style={styles.coinText}>Current Price: ...</Text>

        <TouchableOpacity
          style={styles.deleteItem}
          onPress={() => onDelete(item._id)}
        >
          <TabIcon icon={Icons.removeItem} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#89cff0',
    borderRadius: 10,
    width: '100%',
    margin: 20,
  },

  deleteItem: { position: 'absolute', right: 20, bottom: 20 },

  coinType: {
    textAlign: 'center',
    color: '#cdebf9',
    marginBottom: 5,
    fontFamily: 'Chivo_400Regular',
    letterSpacing: 1.5,
    fontSize: 20,
  },

  coinText: {
    color: '#cdebf9',
    margin: 5,
    fontFamily: 'Chivo_400Regular',
    letterSpacing: 1.5,
    fontSize: 17,
  },

  coinItem: {
    padding: 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
