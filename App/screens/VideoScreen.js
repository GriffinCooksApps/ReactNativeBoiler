import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EndOfTheWorld from '../components/media/EndOfTheWorld';
import BluVideo from '../components/media/BluVideo';

export default class Video extends React.Component {

  constructor(props) {
    super(props);
    //Quick hack
    this.state = { video: EndOfTheWorld, nextBtn:false }; //Too many issues with YouTube

  }


  onClick(e) {
    this.setState({ video: BluVideo, nextBtn:false });
  }


  render() {
    const {nextBtn, video} = this.state;
    
    const VideoRes = this.state.nextBtn 
      ? (<EndOfTheWorld onClick={this.onClick.bind(this)} play={this.props.navigation.isFocused}/>)
      : (<BluVideo play={this.props.navigation.isFocused}/>);    

    return (

      <SafeAreaProvider style={{ backgroundColor: '#CCCCCC', padding: 5, alignContent: 'center', alignItems: 'center' }}>
          {VideoRes}
      </SafeAreaProvider>
    );
  }

}