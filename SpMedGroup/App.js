import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Está funcionando!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
    bakgroundColor: 'white'

  }
})

