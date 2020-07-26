import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export default class Home extends React.Component {

  render() {
    return (

      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>Welcome</Text>
        </View>


      </SafeAreaProvider>
    );
  }

}