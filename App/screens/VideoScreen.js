import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export default class Video extends React.Component {

  render() {
    return (

      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text>Lets watch a video</Text>
        </View>


      </SafeAreaProvider>
    );
  }

}