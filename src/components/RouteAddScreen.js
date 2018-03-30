/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import styles from '../styles/Styles'




export default class RouteAddScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: "",
      rating: ""
    };
  }

  addRoute(){
    var rat = parseInt(this.rating);
    
    if(this.state.name == ""){
      Alert.alert('ERROR:', 'Please enter a name for your route');
    }
    else if(rat < 5 || rat > 15){
      Alert.alert('ERROR', 'Please enter a valid rating (5 -- 15)');
    }
    else{
      
      this.props.navigation.navigate("SessionScreen", {routeName: this.state.name, routeRating: this.state.rat});

    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'lightblue'}}>
        <View style = {{flex:4, justifyContent:'center'}}>

          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Text style = {{fontSize: 30, color: 'black', paddingLeft:10}}>Name:  </Text>
            <TextInput
                style = {{borderWidth: 5, width: 280, fontSize: 25, paddingLeft: 10}}
                value = {this.state.name}
                onChangeText={(val) => this.setState({name: val})}
              
            />
          </View>

          <View style = {{flexDirection: 'row', alignItems: 'center', paddingTop: 40}}>
            <Text style={{fontSize: 30, color: 'black', paddingLeft: 11}}>Rating: 5.</Text>
            <TextInput
                style = {{borderWidth: 5, width: 60, fontSize: 30, paddingLeft: 10}}
                value = {this.state.rating}
                onChangeText={(val) => this.setState({rating: val})}
                keyboardType = 'numeric'
              
            />
            <Text style = {{fontSize: 20}}>  (5 -- 15)</Text>
          </View>


        </View>
        <View style = {{flex: 1, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress = {()=>{this.addRoute()}}>
            <Text style = {{fontSize:30, color: 'black'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


}
