import React, {Component} from 'react';
import { View, StyleSheet, Button,Image, TextInput, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
const Profile = require('../assets/ProfilePlaceholder.png');
import {addImage} from '../store/actions/actionCreator';


class FirstScreen extends Component {
  state = {
    image: null,
    firstname: null,
    lastname: null,
    email: null,
    age: null,
    
  };

  selectHandler = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (result) => {
      if (result.didCancel) {
        console.log('User cancelled image picking');
      } else if (result.error) {
        console.log('Image picker error', result.error);
      } else {
        console.log('Image has picked')
        this.setState({
          image: {uri: result.uri},
        });
      }
    });
  };

  addImageHandler = () => {
    if (this.state.image == null || this.state.firstname == null || this.state.lastname == null || this.state.email == null || this.state.age == null) {
      return;
    }

    this.props.onAddImage({
      image: this.state.image,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      age: this.state.age,
    });

    this.cancelHandler();
  };

  cancelHandler = () => {
    Navigation.pop(this.props.componentId);
  };

  textFChangeHandler = (text) => {

    this.setState({firstname: text});
  };

  textLChangeHandler = (text) => {

    this.setState({lastname: text});
  };

  textEChangeHandler = (text) => {

    this.setState({email: text});
  };

  textAChangeHandler = (text) => {

    this.setState({age: text});
  };
  componentDidMount() {
    // WillUnmount คือ ก่อนออกจะทำ function นี้
    this.setState({image: null, firstname: null,lastname: null,email: null,age: null});
  }
  render() {
    
    let imageSource;
    if (this.state.image != null) {
      imageSource = this.state.image;
    } else {
      imageSource = Profile;
    }
    
    return (
      
      <ScrollView>
        <View style={styles.container}>
        
        <Image source={imageSource} style={styles.image} />
        <TextInput style={styles.textinput} placeholder={'First Name'} onChangeText={this.textFChangeHandler} />
        <TextInput style={styles.textinput} placeholder={'Last Name'} onChangeText={this.textLChangeHandler} />
        <TextInput style={styles.textinput} placeholder={'Email'} onChangeText={this.textEChangeHandler} /> 
        <TextInput style={styles.textinput} placeholder={'Age'} onChangeText={this.textAChangeHandler} /> 
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title={'OK'} onPress={this.addImageHandler} />
            <Button style={styles.button} title={'Photo'} onPress={this.selectHandler} />
            <Button style={styles.button} title={'Cancel'} onPress={this.cancelHandler} />
          </View>
        </View>
      </ScrollView>
      
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAddImage: (image) => dispatch(addImage(image)),
  };
};

export default connect(null, mapDispatchToProps)(FirstScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  textinput:{
    margin:2,
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray'
  },
  buttonContainer: {
    justifyContent: 'space-around',
  },
  button: {
    textAlign: 'center',
    color: 'red',
    margin: 4,
  },
});


