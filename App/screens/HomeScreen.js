import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Logo from '../components/images/Logo';
import { Card } from 'react-native-elements';


const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#6AF6FF88', 
    padding: 5, 
    paddingTop: 10, 
    width:'100%', 
    height:'100%', 
    alignContent:'flex-start', 
    flexDirection:'column', 
    borderColor: 'black'
  },

});

export default class Home extends React.Component {

  render() {
    return (

      <View style={styles.mainView}>
        <Cards style={{flex:1}} />
        {/* <Card style={{flex:1}}> */}
          {/* <Logo style={{flex:1}}/> */}
          <View style={{flex:1}} />
        {/* </Card> */}
        {/* <card style={{flex:1}} /> */}
      </View>
    );
  }

}