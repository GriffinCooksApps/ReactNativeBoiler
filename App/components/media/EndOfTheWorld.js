import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { AppConfigContext } from '../../AppConfig';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 20, left: 0, bottom: 0, right: 0,
  },
});

export default class EndOfTheWorld extends React.Component {


  render() {
    return (
      <AppConfigContext.Consumer>
        {(value) => {
          <VideoPlayer source={{ uri: value.eotwVideoURL }} />
        }}
      </AppConfigContext.Consumer>
    )
  }
}
