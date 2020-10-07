import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Places from '../screens/places';
 
const Stack = createStackNavigator();
const screenOptionStyle = {
  // the header were the name of page
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Places" component={Places} />
     </Stack.Navigator>
  );
};

export default HomeStackNavigator;
