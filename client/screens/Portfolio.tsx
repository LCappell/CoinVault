import React, { FC } from 'react';
import { globalStyles } from '../styles/globalStyle';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './Login';
import DetailsPage from '../components/Portfolio/DetailsPage';

import { createStackNavigator } from '@react-navigation/stack';
import Main from '../components/Portfolio/Main';

const Stack = createStackNavigator();

const Portfolio: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='PortfolioMain' component={Main} />
      <Stack.Screen name='Details' component={DetailsPage} />

      {/* <Stack.Screen name='Settings' component={Settings} /> */}
    </Stack.Navigator>
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
