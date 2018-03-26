/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Flatlist,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles/Styles'


export default class SessionScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            routes: [],
            sessionInProgress: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Flatlist
                    data = {this.routes}
                    renderItem = {this._renderItem}
                    style={{alignSelf: 'stretch'}}                    
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }

    _renderItem = ({item}) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.textItem}>{item.id}</Text>
            <Text style={styles.textItem}>{item.name}</Text>
          </View>
        );
      }
}
