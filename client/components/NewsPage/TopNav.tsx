import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const TopNav = ({
  displayNFTData,
  displayCryptoData,

  setCryptoNews,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={displayCryptoData}>
        <Text style={styles.NavItem}>Crypto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={displayNFTData}>
        <Text style={styles.NavItem}>NFT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  NavItem: {
    padding: 12,
    backgroundColor: '#60A3D9',
    color: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    width: 150,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 15,

    fontFamily: 'Chivo_700Bold',
    letterSpacing: 1,
  },
});
