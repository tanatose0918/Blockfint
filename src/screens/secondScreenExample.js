import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation'

export default class secondScreen extends Component {
  clickHandler = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'InfoScreen',
      },
      options: {
        topBar: {
          title: {text: 'InfoScreen'},
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList></FlatList>
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
    backgroundColor: 'skyblue',
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
  },
});
