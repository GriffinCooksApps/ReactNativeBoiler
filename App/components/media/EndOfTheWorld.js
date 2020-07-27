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
    const {play} = this.props;

    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <View style={{ flex: 1, width:'100%', flexDirection: 'column', alignItems:'center' }}  >

            <VideoPlayer url={value.eotwVideoURL} play={play} />

            <View style={{ flexDirection: 'column', width: '100%', height:'40%', alignItems: 'center', }} >

              <Text style={styles.msg}>I though you may like some levity...</Text>

              <Button title='Play Real Video' onPress={this.props.onClick} style={styles.button} />

            </View>
          </View>
        }
      </AppConfigContext.Consumer>
    )
  }
}
