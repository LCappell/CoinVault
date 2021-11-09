import React, { FC } from 'react';
import { globalStyles } from '../styles/globalStyle';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Portfolio: FC = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={styles.textTitle}>PORTFOLIO</Text>
      <Text style={styles.textT}>TESTING</Text>
    </SafeAreaView>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  textTitle: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Chivo_400Regular',
  },
  textT: {
    fontFamily: 'Chivo_700Bold',
    color: '#fff',
  },
});
