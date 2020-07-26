import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import {ThemeContext} from '../Themes';

export default class Home extends React.Component {

  static contextType  = ThemeContext;

  render() {
    return (

      <SafeAreaProvider>
        <View style={this.context.background}>
          <Text>Welcome</Text>
        </View>


      </SafeAreaProvider>
    );
  }

}