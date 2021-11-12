import React, { useCallback, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
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
  const [totalAmount, setTotalAmount] = useState([]);

  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );

  const caluclateTotalPrice = () => {
    let total = 0;
    totalAmount.map((item: any) => {
      total += item.userAmount;
    });
    return total;
  };

  const handleDelete = (id: string) => {
    fetch(`http://10.10.22.28:4000/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setValues((data) => data.filter((item: any) => item._id !== id));
    });
  };

  useEffect(() => {
    fetch('http://10.10.22.28:4000')
      .then((res) => res.json())
      .then((coinInfo) => {
        caluclateTotalPrice();
        setValues(coinInfo);
        setTotalAmount(coinInfo);
      });
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <DetailsItem onDelete={handleDelete} item={item} />
    ),
    []
  );
  const keyExtractor = useCallback((item) => item._id, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Portfolio Details </Text>
      <TouchableOpacity
        style={styles.goback}
        onPress={() => navigation.goBack()}
      >
        <TabIcon icon={Icons.goBack} />
      </TouchableOpacity>
      <Text style={styles.text}>Current amount: ${caluclateTotalPrice()} </Text>

      <FlatList
        style={styles.flatListItem}
        data={values}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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

  header: {
    color: '#fff',
    position: 'absolute',
    top: 70,
    letterSpacing: 2,
    opacity: 0.8,
    fontSize: 25,
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
    width: '90%',
    marginTop: 120,
    paddingTop: 0,
    padding: 20,
  },
});
