import React from 'react';
import {Text, StyleSheet, } from 'react-native';
import { Card } from 'react-native-elements';
import RHLogo from '../images/RHLogo.png';
import GriffinCard from './GriffinCard'; 


const styles = StyleSheet.create({
  mainCard: {
    shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, borderRadius: 20
  },
  cardImage:{ height: 30, resizeMode: 'contain', borderRadius: 20},
  rhImage: {height: 30, resizeMode: 'contain' },
  textA:{ fontSize: 20},
  textB:{ fontSize: 18}


});


export default class WelcomeCard extends React.Component {

  render() {
    return (
      <Card title='Welcome to Blu. Presented by:' containerStyle={styles.mainCard} image={RHLogo} imageStyle={styles.cardImage}>
        <Text style={styles.textA}>Your next team member.</Text>
        <Text style={styles.textB}>
          Or perhaps it will be that Steve Cook guy from nashville. &nbsp;
          I hope things are well out there in Florida.  &nbsp;
        </Text>
        <Text style={styles.textB}>Please select the Video Icon at the top or slide left to watch a video.</Text>
        <GriffinCard />
      </Card>);
  }
}