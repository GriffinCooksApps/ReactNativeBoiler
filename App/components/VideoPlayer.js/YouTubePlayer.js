import React from 'react';
import YouTube from 'react-native-youtube';



export default class YouTubePlayer extends React.Component{

  //onReady={e => this.setState({ isReady: true })} 

  render(){
    const {url} = this.props;
    const id = this.parseURL(url);

    return(
      <YouTube videoId={id} play fullscreen={false} loop={true} style={{ alignSelf: 'stretch', height: 400 }}    />
    );
  }

  parseURL(url){
    const [,key] = url.split(/watch\?/);
    return key;
  }


}


