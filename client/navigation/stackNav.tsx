import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Market from '../screens/Market';
import CoinDetail from '../screens/CoinDetail';

const Stack = createStackNavigator();

const CoinStackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Market' component={Market} />
        <Stack.Screen name='coinDetail' component={CoinDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CoinStackNav;
