import { StyleSheet, } from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';
import { AppConfigContext } from '../../AppConfig';

const styles = StyleSheet.create({
  logo: {
    width: 250,
    backgroundColor: "rgba(150,190,250,30)",
  }
});

export default class Logo extends React.Component {

  // static context = AppConfigContext;

  render() {
    return (
      <WebView style={[styles.logo, this.props.style]} source={{ uri: "http://harpertasks.com/logo.svg" }} />
    );
  }

}
