import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { AppConfigContext } from '../../AppConfig';
import { StyleSheet, Text, View, Button } from 'react-native';

var styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 20, left: 0, bottom: 0, right: 0,
  },
});

export default class BluVideo extends React.Component {


  render() {
    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <>
            <VideoPlayer url={value.bluVideoURL} style={{ height: '40%' }} play={this.props.play} />
            <View style={{ flexDirection: 'column', width: '92%', height: '40%', alignItems: 'center', }} >
              <Button title='Cast URL' style={{ borderRadius: 10 }} />
            </View>
          </>
        }
      </AppConfigContext.Consumer>
    )
  }
}
