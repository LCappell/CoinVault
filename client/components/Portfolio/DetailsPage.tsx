import React, { useCallback } from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';
import DetailsItem from './DetailsItem';
import TabIcon from '../TabIcon';
import Icons from '../../constants/Icons';

const DetailsPage = () => {
  const navigation = useNavigation();
  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );

  console.log(coinAmount);
  const renderItem = useCallback(({ item }) => <DetailsItem item={item} />, []);
  const keyExtractor = useCallback((item) => item.amount.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Portfolio Details </Text>
      <TouchableOpacity
        style={styles.goback}
        onPress={() => navigation.goBack()}
      >
        <TabIcon icon={Icons.goBack} />
      </TouchableOpacity>

      <FlatList
        style={styles.flatListItem}
        data={coinAmount}
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

  text: { color: 'white' },

  flatListItem: {
    fontFamily: 'Chivo_400Regular',
    width: '90%',
    marginTop: 120,
    paddingTop: 0,
    padding: 20,
  },
});
