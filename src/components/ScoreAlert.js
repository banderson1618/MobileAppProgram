import React, { Component } from 'react';
import {
  Flatlist,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import styles from '../styles/Styles'

export default function ScoreAlert() {
  Alert.alert(
    'Your Session Score',
    'You finished your session with a score of: ',
    [text: 'OK', style: 'cancel']
  );
}
