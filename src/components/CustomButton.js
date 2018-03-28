import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/Styles';

export default class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.pressedButton} >
                <Text style={styles.button}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}