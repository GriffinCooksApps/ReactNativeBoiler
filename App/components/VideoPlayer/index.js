import React from 'react';
import { AppConfigContext } from '../../AppConfig';
import { StyleSheet, View, Text } from 'react-native';
import YouTubePlayer from './YouTubePlayer';
import VimeoPlayer from './VimeoPlayer';
import DefaultVideoPlayer from './DefaultVideoPlayer';


export default class VideoPlayer extends React.Component {

  render() {
    const { type, url } = this.props;

    const PlayerType = type || this.getType(url);

    return (
      <View style={{ flex: 1, width:'100%', backgroundColor: '#666666' }} >
        <PlayerType {...this.props} />
      </View>
    )

  }

  getType(url) {
    if (url == null) {
      throw new Error('No video specified for the player');
    }

    if (url.toUpperCase().includes('YOUTUBE.COM')) {
      return YouTubePlayer;
    }
    else if (url.toUpperCase().includes('VIMEO.COM')) {
      return VimeoPlayer;
    }
    else return DefaultVideoPlayer;
  }

}
