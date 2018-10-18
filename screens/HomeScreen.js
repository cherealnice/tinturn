import React from 'react';
import {
  View,
} from 'react-native';
import {
  Button,
} from 'react-native-material-ui';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Button primary raised text="HI" />
      </View>
    );
  }
};
