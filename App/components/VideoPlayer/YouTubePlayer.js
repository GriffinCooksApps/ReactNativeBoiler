import React from 'react';
import YouTube from 'react-native-youtube';
import { View, Text } from 'react-native';
import App_APIKeys from '../../../APP_APIKeys';
import WebView from 'react-native-webview';


export default class YouTubePlayer extends React.Component {

  constructor(props){
    super(props);

    this.state ={started:false, full: true};

  }
  componentDidUpdate(){
    if(!this.state.started){
      this.setState.bind(this);
      const ref = React.createRef(this.setState);
      
      setTimeout((ref) => {
        ref({fall:false});
      }, 10*1000);
      this.setState({started:true})
    }


    
  }

  render() {
    const { url } = this.props;
    const id = this.parseURL(url);

    if (this.props.play) {
      //   return (
      //     <WebView style={this.props.style}
      //       source={{ uri: `https://www.youtube.com/embed/${id}?controls=0&showinfo=0&autoplay=1` }} />
      //   )
      // }

      return (
        <View style={{ flex: 1, backgroundColor: '#888888', alignItems: 'center', alignContent: 'center' }}>
          <YouTube videoId={id} play fullscreen={this.state.full} loop={true} play={this.props.play}
            onError={e => { }}
            style={{ alignSelf: 'stretch', flex: 1 }}
            apiKey={App_APIKeys.YouTube} />
          <Text>Playing: {url}</Text>
        </View>
      );
    }
    else {
      return <Text>Waiting for instructions to play.</Text>
    }
  }

  parseURL(url) {
    const [, id] = url.split(/watch\?v=/);
    if (id == null) return null;
    return id;
  }


}


