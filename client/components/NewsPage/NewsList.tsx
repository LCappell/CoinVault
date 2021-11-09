import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from 'react-native';
import TopNav from './TopNav';
import NewsItem from './NewsItem';

const NewsList = ({
  cryptoNews,
  input,
  FilteredNews,
  displayNFTData,
  displayCryptoData,
  setCryptoNews,
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

  return (
    <SafeAreaView>
      <TopNav
        displayNFTData={displayNFTData}
        displayCryptoData={displayCryptoData}
        setCryptoNews={setCryptoNews}
      />
      <FlatList
        data={input.length > 0 ? FilteredNews : cryptoNews}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            style={styles.loader}
            title='Loading News...'
          />
        }
      />
    </SafeAreaView>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  loader: {
    backgroundColor: '#BFD7ED',
  },
});
