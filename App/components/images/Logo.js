import { StyleSheet, Text} from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';
import { AppConfigContext } from '../../AppConfig';

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    backgroundColor: "rgba(0,0,0,0)",
    shadowColor: '#555555'
  }
});

export default class Logo extends React.Component {

  render() {
    const {style} = this.props;
    return (
        <AppConfigContext.Consumer>
          {value => (
            <WebView style={[styles.logo, style]} source={{ uri: value.logoURL }} />
          )}
      </AppConfigContext.Consumer>
    );
  }

}
