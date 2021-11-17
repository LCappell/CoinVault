import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TabIcon = ({ icon }) => {
  return (
    <View>
      <Image
        resizeMode='contain'
        style={{ width: 55, height: 50, tintColor: '#89cff0' }}
        source={icon}
      />
    </View>
  );
};

export default TabIcon;
