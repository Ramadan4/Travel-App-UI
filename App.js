/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigations/Navigations';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
