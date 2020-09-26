import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ImageItem from '../components/imageItem';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {deleteImage} from '../store/actions/actionCreator';

class SecondScreen extends Component {
  deleteImageHandler = (key) => {
    this.props.onDeleteImage(key);
  };

  clickHandler = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'InfoScreen',
      },
      options: {
        topBar: {
          title: {text: 'InformationScreen'},
        },
      },
    });
  };

  renderItem = (data) => {
    return (
      <ImageItem
        key={data.item.key}
        source={data.item.image}
        deleteImage={() => this.deleteImageHandler(data.item.key)}
        InfoScree={() => this.clickHandler(data.item.key)}
      />
    );
  };

  render() {
    let output;

    if (this.props.images == null || this.props.images.length <= 0) {
      output = <Text style={styles.text}></Text>;
    } else
      output = (
        <FlatList data={this.props.images} renderItem={this.renderItem} />
      );

    return <View style={styles.container}>{output}</View>;
  }
}

const mapStateToProps = (state) => ({images: state.imageStore.images});

const mapDispatchToProps = (dispatch) => ({
  onDeleteImage: (key) => dispatch(deleteImage(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
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
