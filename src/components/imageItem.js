import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';


const ImageItem = (props) => {
  return (
      <View style={styles.container}>
        <Image source={props.source} style={styles.image} />
        <Text style={styles.text}>{props.firstname}</Text>
        <Text> </Text>
        <Text style={styles.text}>{props.lastname}</Text>

        <TouchableNativeFeedback onPress={props.InfoScreen}>
          {/* <Icon name={'information-circle-outline'}  /> */}
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={props.deleteItem}>
        {/* <Icon name={'trash-bin-outline'} /> */}
        </TouchableNativeFeedback>
      </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 5,
    borderWidth: 1,
    borderColor: 'cyan',
  },
  text: {
    color: 'black',
    fontWeight: 'bold'},
  image: {
    width: 86,
    height: 86, 
    resizeMode: 'contain', 
    marginRight: 20},
});

export default ImageItem;