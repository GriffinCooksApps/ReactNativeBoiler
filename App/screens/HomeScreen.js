import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import Logo from '../components/images/Logo';
import WelcomeCard from '../components/cards/WelcomeCard';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#6AF6FF88',
    padding: 5,
    paddingTop: 10,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: 'black'
  },

});

export default class Home extends React.Component {

  render() {
    return (
      <SafeAreaProvider style={styles.mainView}>
        <View style={{ height: 260 }} >
          <Logo style={{ flex: 1 }} />
        </View>
        <WelcomeCard />
      </SafeAreaProvider>
    );
  }

}