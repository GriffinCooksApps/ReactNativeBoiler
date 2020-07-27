import React from 'react';

import { View, Text } from 'react-native';

import VideoPlayer from 'react-native-video-controls';

export const parseURL = (url) => {
  const [, id] = url.split(/vimeo.com\//);
  if (id == null) return null;
  return id;
}


export default class VimeoPlayer extends React.Component {

  constructor(props) {
    super(props);

    React.createRef();

    this.state = {
      vimeoID: parseURL(props.url),
      videoUrl: this.props.null,
    }
  }


  componentDidMount() {
    //I mis having redux.
    const that = this;
    fetch(`https://player.vimeo.com/video/${this.state.vimeoID}/config`)
      .then(res => res.json())
      .then(res => that.setState({
        thumbnailUrl: res.video.thumbs['640'],
        videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
        video: res.video,
      }));
  }

  render() {
    if (this.props.play && this.state.videoUrl != null) {
      return (
        <View style={{ flex: 1, backgroundColor: '#888888', alignItems: 'center', alignContent: 'center' }}>
          <VideoPlayer

            source={{ uri: this.state.videoUrl }}
            navigator={this.props.navigator}
            style={{ flex: 1, width: '100%' }}
          />
        </View>
      )
    }
    else {
      return <Text>Waiting to be told to play.</Text>
    }
  }


}
