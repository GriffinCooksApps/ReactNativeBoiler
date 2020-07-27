import React from 'react';

import { View, Text } from 'react-native';

import VideoPlayer from 'react-native-video-controls';


export default class VimeoPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      vimeoID: this.parseURL(props.url),
      videoUrl: this.props.VIDURL, 
    }
  }

  componentDidMount() {
    //I mis having redux.
    // this.setState.bind(this);
    // fetch(`https://player.vimeo.com/video/${this.state.vimeoID}/config`)
    //   .then(res => res.json())
    //   .them(res => this.setState({
    //     thumbnailUrl: res.video.thumbs['640'],
    //     videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
    //     video: res.video,
    //   }));
  }

  render() {
    if (this.props.play && this.state.videoUrl != null) {
      return (
        <View style={{ flex: 1, backgroundColor: '#888888', alignItems: 'center', alignContent: 'center' }}>
          <VideoPlayer
            
            source={{ uri: this.state.videoUrl }}
            navigator={this.props.navigator}
            style={{ width: 400, height: 400 }}
          />
        </View>
      )
    }
    else {
      return <Text>Waiting to be told to play.</Text>
    }
  }

  parseURL(url) {
    const [, id] = url.split(/vimeo.com\//);
    if (id == null) return null;
    return id;
  }
}
