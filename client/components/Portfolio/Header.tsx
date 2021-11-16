import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

const Header = ({ formatEmail }) => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          position: 'absolute',
          left: -70,
          top: 10,
        }}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1358860486914236416/xt-FYxGU_400x400.png',
        }}
      />
      <Text style={styles.username}>{formatEmail}'s portfolio</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {},
  username: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    letterSpacing: 2,
    fontFamily: 'Chivo_300Light',
    fontWeight: 'bold',
  },
});
