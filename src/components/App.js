
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

import styles from './styles/Styles';

import SessionScreen from './components/SessionScreen';
import RouteAddScreen from './components/RouteAddScreen';

const Root = StackNavigator(
  {
    SessionScreen:{
      screen: SessionScreen,
      navigationOptions: {
        title: 'Your Session'
      }
    },
    RouteAddScreen: {
      screen: RouteAddScreen,
      navigationOptions: {
        title: 'Add a route'
      }
    }
  },
  {
    initialRouteName: 'SessionScreen',
    mode: 'modal',
  }
)

export default class App extends Component {
  render() {
    return (
      <Root/>
    );
  }
}
