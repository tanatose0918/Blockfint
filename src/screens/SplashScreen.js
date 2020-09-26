import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Button, Alert} from 'react-native';

import mainTab from './MainTab';
const zelda = require('../assets/ProfilePlaceholder.png');

export default class SplashScreen extends Component {
  clickHandler = () => {
    // Alert.alert('Clicked');
    mainTab();
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={zelda} style={styles.image} />
        <Text style={styles.text}> My Application </Text>
        <Button title="Start App" onPress={this.clickHandler} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
});
