import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EndOfTheWorld from '../components/media/EndOfTheWorld';
import BluVideo from '../components/media/BluVideo';
import { Text } from 'react-native';

export default class Video extends React.Component {

  constructor(props) {
    super(props);
    //Quick hack
    this.state = { video: EndOfTheWorld, nextBtn: true }; //Too many issues with YouTube

  }

  onClick(e) {
    this.setState({ video: BluVideo, nextBtn: false });
  }


  render() {
    const { nextBtn, video } = this.state;
    const play = true;// his.props.navigation.isFocused();

    const VideoRes = this.state.nextBtn
      ? (<EndOfTheWorld onClick={this.onClick.bind(this)} play={play} />)
      : (<BluVideo play={play} />);

    // if ( this.props.navigation.isFocused()  == true ) {
      return (

        <SafeAreaProvider style={{ backgroundColor: '#CCCCCC', padding: 5, alignContent: 'center', alignItems: 'center', width:'100%' }}>
          {VideoRes}
        </SafeAreaProvider>
      );
    // }
    // else {
    //   return <Text>Waiting for focus: </Text>
    // }
  }

}