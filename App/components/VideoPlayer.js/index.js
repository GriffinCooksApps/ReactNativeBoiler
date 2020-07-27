import React from 'react';
import { AppConfigContext } from '../../AppConfig';
import { StyleSheet } from 'react-native';
import YouTubePlayer from './YouTubePlayer';
import VimeoPlayer from './VimeoPlayer';
import DefaultVideoPlayer from './DefaultVideoPlayer'; 


export default class VideoPlayer extends React.Component {

  render(){
    const {type, url} = this.props;
    
    const PlayerType = type || this.getType(url);

    return (
      <PlayerType {...props} />
    )

  }

  getType(url){
    if(url == null) {
      throw new Error('No video specified for the player');
    }
    if(url.toUpperCase().contains('YOUTUBE.COM')){
      return YouTubePlayer;
    }
    else if(url.toUpperCase().contains('VIMEO.COM')){
      return VimeoPlayer;
    }
    else return DefaultVideoPlayer;
  }

}
