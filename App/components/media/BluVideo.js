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
            <VideoPlayer url={value.eotwVideoURL} />
            <View style={{flex:6, alignItems:'flex-end' }}>
              <Text>I though you may like some lively.  Sorry if taken poorly.</Text>
              <Button title='Cast' onClick={this.props.onClick} style={{borderRadius:10}} />   
            </View>
          </>
        }
      </AppConfigContext.Consumer>
    )
  }
}
