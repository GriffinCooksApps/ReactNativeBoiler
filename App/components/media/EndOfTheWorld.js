import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { AppConfigContext } from '../../AppConfig';
import { StyleSheet, Text, View, Button } from 'react-native';

var styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 20, left: 0, bottom: 0, right: 0,
  },
  msg: { fontSize: 25, padding: 20 },
  button: { width: 100, borderRadius: 10 },


});

export default class EndOfTheWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <View style={{ flex: 1, flexDirection: 'column', alignItems:'flex-end' }}  >

            <VideoPlayer url={value.eotwVideoURL} style={{ height:400, width:400}} play={this.props.play}/>

            <View style={{ flexDirection: 'column', width: '92%', height:'40%', alignItems: 'center', }} >

              <Text style={styles.msg}>I though you may like some levity... However the only way I could get it to play was full screen.</Text>

              <Button title='Play Real Video' onPress={this.props.onClick} style={styles.button} />

            </View>
          </View>
        }
      </AppConfigContext.Consumer>
    )
  }
}
