import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from 'react-native';
import TopNav from './TopNav';
import NewsItem from './NewsItem';
import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';

const NewsList = ({
  cryptoNews,
  input,
  FilteredNews,
  displayNFTData,
  displayCryptoData,
  setCryptoNews,
  displayPersonalNews,
  getData,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(({ item }) => <NewsItem data={item} />, []);
  const keyExtractor = useCallback((item) => item.title, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    try {
      getData();
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  const coinAmount = useSelector(
    (state: RootState) => state.CoinInputData.amount
  );

  

  return (
    <SafeAreaView>
      <TopNav
        displayNFTData={displayNFTData}
        displayCryptoData={displayCryptoData}
        setCryptoNews={setCryptoNews}
        displayPersonalNews={displayPersonalNews}
      />
      <FlatList
        data={input.length > 0 ? FilteredNews : cryptoNews}
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

export default NewsList;

const styles = StyleSheet.create({});
