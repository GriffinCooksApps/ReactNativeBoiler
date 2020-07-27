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

const VIDURL = 'https://134vod-adaptive.akamaized.net/exp=1595837377~acl=%2Fa9e03c15-0771-45e2-9f8f-54d238347aad%2F%2A~hmac=3a164541e6bd3da0966a53172ce1d9f59b5df41d83dc49396fa3e73102b0139e/a9e03c15-0771-45e2-9f8f-54d238347aad/sep/video/ba2d75b1,db21517c,e842d260,fbeb5296/master.m3u8';

export default class EndOfTheWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {play} = this.props;
    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <View style={{ flex: 1, flexDirection: 'column', alignItems:'flex-end' }}  >

            <VideoPlayer url={value.eotwVideoURL} style={{ height:400, width:400}} play={play} VIDURL={VIDURL}/>

            <View style={{ flexDirection: 'column', width: '92%', height:'40%', alignItems: 'center', }} >

              <Text style={styles.msg}>I though you may like some levity...</Text>

              <Button title='Play Real Video' onPress={this.props.onClick} style={styles.button} />

            </View>
          </View>
        }
      </AppConfigContext.Consumer>
    )
  }
}
