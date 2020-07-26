import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { enableScreens } from 'react-native-screens';

import { Provider as PaperProvider } from 'react-native-paper';

import Navigation from './Navigation';

import theme from './theme';

enableScreens();

export default class App extends React.Component {


  render() {
    return (

      <NavigationContainer theme={theme}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </NavigationContainer>

    );
  }
}