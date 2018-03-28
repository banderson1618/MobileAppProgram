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

import route_model from '../models/route_model';
import CustomButton from './CustomButton';

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
                <CustomButton 
                    pressedButton = {() => this.addRoute()}
                    text = "Add a route"
                    />
                {this._renderRouteList()}                
            </View>
        );
    }

    addRoute(){
        console.log("Navigating...")
        this.props.navigation.navigate("RouteAddScreen");
    }

    _renderRouteList(){
        if(this.state.routes.length === 0){
            return (
                <Text>
                    No routes entered. Please enter a route.
                </Text>
            )
        }
        else {
            return (
                <Flatlist
                    data = {this.state.routes}
                    renderItem = {this._renderItem}
                    style={{alignSelf: 'stretch'}}                    
                    keyExtractor={(item, index) => item.id}
                />
            )
        }
    }

    _renderItem = ({item}) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.textItem}>{item.key}</Text>
            <Text style={styles.textItem}>{item.name}</Text>
          </View>
        );
      }
}
