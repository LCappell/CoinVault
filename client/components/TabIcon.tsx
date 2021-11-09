import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TabIcon = ({ icon }) => {
  return (
    <View>
      <Image
        resizeMode='contain'
        style={{ width: 30, height: 30, tintColor: '#fff' }}
        source={icon}
      />
    </View>
  );
};

export default TabIcon;
