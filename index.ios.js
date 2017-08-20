/**
 * Enfose React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
  AppRegistry,
  
} from 'react-native';

import MainHomeScreen from './components/Home/';
import MainStoreScreen from './components/Store/';
import MainSocialScreen from './components/Social/';
import MainAccountScreen from './components/Account/';



//AppRegistry
const EnfoseApp = TabNavigator({
  Homes: { screen: MainHomeScreen},
  Stores: { screen: MainStoreScreen},
  Socials: { screen: MainSocialScreen},
  Accounts: { screen: MainAccountScreen},
},{
  tabBarOptions: {
    activeTintColor: '#e91e63',
    activeBackgroundColor: '#FADEC1',
    labelStyle: {
      fontSize: 12,
    },
  },
});



AppRegistry.registerComponent('EnfoseApp', () => EnfoseApp);
