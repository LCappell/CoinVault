import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TabIcon3 = ({ icon }) => {
  return (
    <View>
      <Image
        resizeMode='contain'
        style={{
          width: 30,
          height: 30,
          tintColor: '#89cff0',
          opacity: 0.8,
          position: 'absolute',
          bottom: 0,
          left: 20
        }}
        source={icon}
      />
    </View>
  );
};

export default TabIcon3;
