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

import {Route} from '../models/route_model';
import CustomButton from './CustomButton';

export default class SessionScreen extends Component {
    constructor(props){
        super(props);

        this.routes = [];

        this.routes.push(new Route(1, "Gut puncher", 14))

        this.state = {
            sessionInProgress: false
        }
    }

    componentWillMount(){
  
      if(this.props.navigation.state.params != null){
          console.log(this.props.navigation.state.params);
          var newRoute = [];
          newRoute.push(new Route(this.props.navigation.state.params.routeName, 5));
          this.setState((prevState)=>{return {routes: prevState.routes.concat(newRoute)}});
      }

    }

    addRoute(newRoute){
        this.setState((prevState)=>{return {routes: prevState.routes.concat(newRoute)}});
    }

    _renderItem = ({item}) => {
   
        return (
          <View style={styles.itemContainer}>
            <Text>{item.rating}</Text>
            <Text>{item.name}</Text>
          </View>
        );
    }

    _renderRouteList(){


        if(this.routes.length === 0){
            return (
                <Text>
                    No routes entered. Please enter a route.
                </Text>
            )
        }
        else {
          
            return (
              
                <Flatlist
                    data = {this.routes}
                    renderItem = {this._renderItem}
                    style={{alignSelf: 'stretch'}}                    
                    keyExtractor={(item, index) => item.name}
                />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomButton 
                    pressedButton = {() => {this.props.navigation.navigate("RouteAddScreen")}}
                    text = "Add a route"
                />
            </View>
        );
    }

    

    
}
                //{this._renderRouteList()}                
