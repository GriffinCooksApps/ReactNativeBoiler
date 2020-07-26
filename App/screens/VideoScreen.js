import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export const VideoNavTab = (route) => {
  return (
    <View
      style={{
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'rgba (255,255,255,0.1)',
        borderRadius: 6,
        width: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      key={`tab-${route.name}`}>${route.name}</View>
  )
}


export default class Video extends React.Component {

  render() {
    return (

      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>Lets watch a video</Text>
        </View>


      </SafeAreaProvider>
    );
  }

}