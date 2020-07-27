import React from 'react';
import YouTube from 'react-native-youtube';
import { View, Text } from 'react-native';



export default class YouTubePlayer extends React.Component{

  //onReady={e => this.setState({ isReady: true })} 

  render(){
    const {url} = this.props;
    const id = this.parseURL(url);

    return(
      <View style={{flex:1, backgroundColor:'#888888', alignItems:'center', alignContent:'center'}}>
        <YouTube videoId={id} play fullscreen={false} loop={true} style={{ alignSelf: 'stretch', height: 400, width:400 }} 
        apiKey='USE YOUR OWN KEY'  />
        <Text>Playing: {url} as {id}</Text>
      </View>
    );
  }

  parseURL(url){
    const [,id] = url.split(/watch\?v=/);
    if(id == null) return null;
    return id;
  }


}


