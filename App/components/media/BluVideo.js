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

const VIDURL ='https://52vod-adaptive.akamaized.net/exp=1595836475~acl=%2Fcb91d683-cda6-42fd-b9b9-18182667c5bb%2F%2A~hmac=1659b5a72f58db01aa33f8d5e46725f7916f4694f86bfd7dd32676a68443169a/cb91d683-cda6-42fd-b9b9-18182667c5bb/sep/video/404ecf94,72b3f14c,81d4597c,02c2f496,3a07d38c/master.m3u8';

export default class BluVideo extends React.Component {


  render() {

    const {play} = this.props;

    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <>
            <VideoPlayer url={value.bluVideoURL} style={{ height: '40%' }} play={play} VIDURL={VIDURL}/>
            <View style={{ padding: 10, flexDirection: 'column', width: '92%', height: '40%', alignItems: 'center', }} >
              <Button title='Cast URL' style={{ borderRadius: 10 }} />
            </View>
          </>
        }
      </AppConfigContext.Consumer>
    )
  }
}
