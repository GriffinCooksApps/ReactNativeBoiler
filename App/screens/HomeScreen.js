import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import {ThemeContext} from '../Themes';

cosnt Home = (props) => {


  const contextType  = React.useContext(ThemeContext);

  return (

    <SafeAreaProvider>
      <View style={this.context.background}>
        <Text>Welcome</Text>
      </View>


    </SafeAreaProvider>
  );
}

export default Home;