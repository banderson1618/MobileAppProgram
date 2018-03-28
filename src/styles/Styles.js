import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    button: {        
      color: 'white',
      backgroundColor: 'green',
      borderRadius: 10,
      padding: 0,
      width: 300,
      fontSize: 50,
      fontWeight: "300",
      height: 100,
      margin: 0,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    itemContainer: {
      height: 50,
      width: 100
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });