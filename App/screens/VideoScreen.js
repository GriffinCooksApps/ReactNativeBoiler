import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import EndOfTheWorld from '../components/media/EndOfTheWorld';

export default class Video extends React.Component {

  render() {
    return (

      <SafeAreaProvider>

        <View style={{flex:1}}>
          <EndOfTheWorld />
        </View>

      </SafeAreaProvider>
    );
  }

}