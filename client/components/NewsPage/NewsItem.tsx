import React from 'react';
import { CoinNews } from '../../types/CoinNews';
const moment = require('moment');
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

const NewsItem = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newsArticle}>
        <Text style={styles.text}>{data.title}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`${data.news_url}`)}>
          <View style={styles.imgArea}>
            <Image source={{ uri: data.image_url }} style={styles.image} />
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.source}>Source: {data.source_name}</Text>
        </View>
        <View>
          <Text style={styles.date}>
            {moment(data.date).format('MMMM Do YYYY')}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {},

  text: { color: '#fff', margin: 10, fontSize: 20, fontWeight: 'bold' },

  source: { color: '#fff', marginLeft: 10, fontSize: 15, letterSpacing: 0.3 },

  newsArticle: {
    margin: 20,
    padding: 20,
    width: '90%',
    // height: 200,
    borderRadius: 20,
    backgroundColor: '#181818',
    borderColor: '#BFD7ED',
    borderWidth: 2,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  date: { color: '#fff', margin: 10, fontSize: 15, letterSpacing: 0.3 },
  imgArea: {
    margin: 10,
  },

  image: { width: 250, height: 100, borderRadius: 20 },
});
