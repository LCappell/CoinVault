import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TabIcon = ({ icon }) => {
  return (
    <View>
      <Image
        resizeMode='contain'
        style={{ width: 45, height: 45, }}
        source={icon}
      />
    </View>
  );
};

export default TabIcon;
