/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Image, Button} from 'react-native';
const One = require('../assets/ProfilePlaceholder.png');
import {Navigation} from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addImage} from '../store/actions/actionCreator';

class ImagePickerScreen extends Component {
  state = {
    image: null,
    description: null,
  };

  componentWillUnmount() {
    // WillUnmount คือ ก่อนออกจะทำ function นี้
    this.setState({image: null, description: null});
  }

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
    if (this.state.image == null || this.state.description == null) {
      return;
    }

    this.props.onAddImage({
      image: this.state.image,
      description: this.state.description,
    });

    this.cancelHandler();
  };

  cancelHandler = () => {
    Navigation.pop(this.props.componentId);
  };

  textChangeHandler = (text) => {
    console.log(text);
    this.setState({description: text});
  };

  render() {
    let imageSource;
    if (this.state.image != null) {
      imageSource = this.state.image;
    } else {
      imageSource = One;
    }
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
          <TextInput
            style={styles.textInput}
            onChangeText={this.textChangeHandler}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Select Image" onPress={this.selectHandler} />
          <Button title="Add Image" onPress={this.addImageHandler} />
          <Button title="Cancel Image" onPress={this.cancelHandler} />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddImage: (image) => dispatch(addImage(image)),
  };
};

export default connect(null, mapDispatchToProps)(ImagePickerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  textInput: {
    marginTop: 20,
    width: '80%',
    borderColor: 'brown',
    borderWidth: 1,
    height: 40,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
