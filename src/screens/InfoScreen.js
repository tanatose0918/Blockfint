import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class InfoScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>  </Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: 'red',
  },
});
