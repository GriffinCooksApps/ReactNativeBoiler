import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { enableScreens } from 'react-native-screens';

import Navigation from './Navigation';

import theme from './theme';

import { AppConfiguration } from './AppConfig';

import { ThemeProvider } from 'react-native-elements';

enableScreens();

export default class App extends React.Component {


  render() {
    return (
      <AppConfiguration>
        <ThemeProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <Navigation />
          </NavigationContainer>
        </ThemeProvider>
      </AppConfiguration>

    );
  }
}