import {Navigation} from 'react-native-navigation';
// import SplashScreen from './SplashScreen';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import InfoScreen from './InfoScreen';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import React from 'react';
import MainTab from './MainTab'

const store = configureStore();

// Screen ที่มีการ registery เท่านั้น ถึงจะนำมาแสดงผลได้

Navigation.registerComponent('MainTab', () => MainTab);
Navigation.registerComponent('FirstScreen', () => FirstScreen);
Navigation.registerComponent('SecondScreen', () => SecondScreen);
// Navigation.registerComponent('ThirdScreen', () => ThirdScreen);
Navigation.registerComponent(
  'SecondScreen',

  () => (props) => (
    <Provider store={store}>
      <SecondScreen {...props} />
    </Provider>
  ),
  () => SecondScreen,
);
Navigation.registerComponent('InfoScreen', () => InfoScreen);
Navigation.registerComponent(
  'FirstScreen',

  () => (props) => (
    <Provider store={store}>
      <FirstScreen {...props} />
    </Provider>
  ),
  () => FirstScreen,
);

Navigation.events().registerAppLaunchedListener(async () => {

 MainTab();
});
