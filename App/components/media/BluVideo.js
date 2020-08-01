import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { AppConfigContext } from '../../AppConfig';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import GoogleCast, { CastButton } from 'react-native-google-cast';
import {parseURL} from '../VideoPlayer/VimeoPlayer';

var styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 20, left: 0, bottom: 0, right: 0,
  },
});

export default class BluVideo extends React.Component {

  startCast(url) {
    //Should move this to a class or something,.
    const id = parseURL(url);
    
    fetch(`https://player.vimeo.com/video/${id}/config`)
      .then(res => res.json())
      .then(res => {
        GoogleCast.castMedia({
          mediaUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          title: 'Welcome to Blu.',
          subtitle: 'Hopefully this is working :D.',
          studio: 'Steve Cook productions',
          streamDuration: 190, // seconds
          contentType: 'video/mp4', // Optional, default is "video/mp4"
        })
      })
    
  }



  render() {

    const { play } = this.props;

    return (
      <AppConfigContext.Consumer>
        {(value) =>
          <>
            <VideoPlayer url={value.bluVideoURL} style={{ height: '40%' }} play={play} />
            <View style={{ padding: 10, flexDirection: 'column', width: '92%', height: '40%', alignItems: 'center', }} >
              <CastButton style={{ width: 24, height: 24 }} onTouchStart={this.startCast} />
              <Button title='Start Cast' onPress={() => this.startCast(value.bluVideoURL)} />
              <ScrollView style={{ borderWidth: 0.5, borderColor: 'darkblue', marginTop: 20, elevation: -2, }}>
                <Text style={{padding: 3}}>
I am a highly skilled and creative software architect with over 20 years of experience in software architecture, development, maintenance, management, and deployment.  I have experience with enterprise shops and small shops, and a variety of teams.  I have an exceptional ability to evaluate connections between systems and foresee potential pitfalls and methods to avoid them. 
              </Text><Text style={{padding: 3}}>
TECHNOLOGY: Languages and Areas of expertise: JavaScript (React, Redux, Node.js), React-native, Java (Core, J2EE, multithreading, Web services, Spring Boot), C/C++/C#, Relational Databases(MySQL, MSSQL, DB2, Oracle), Message Queues, SOA and other N-tier architectures, Build and life cycle tools (Ant, Jenkins, Gradle, Maven), Integration strategies.  In addition, I have experience with several other languages and technologies throughout my career.
 

                </Text>
              </ScrollView>

            </View>
          </>
        }
      </AppConfigContext.Consumer>
    )
  }
}
