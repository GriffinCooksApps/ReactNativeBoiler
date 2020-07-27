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

export default class EndOfTheWorld extends React.Component {


  render() {
    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <>
            <View style={{ flex: 1, flexDirection: 'column' }} >
              <VideoPlayer url={value.eotwVideoURL} style={{minHeight:400}}/>
              <View style={{ flexDirection: 'column', width:'92%', alignItems:'center',}} >
                <Text style={{fontSize:25, padding:20}}>I though you may like some livety.  Sorry if taken poorly.</Text>
                <Button title='Play Real Video' onClick={this.props.onClick} style={{ width:100, borderRadius: 10 }} />
              </View>
              <View style={{ flex: 0.2 }} />
            </View>
          </>
        }
      </AppConfigContext.Consumer>
    )
  }
}
