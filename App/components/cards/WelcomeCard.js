import React from 'react';
import {Text, StyleSheet, } from 'react-native';
import { Card } from 'react-native-elements';
import RHLogo from '../../components/images/RHLogo.png';
import GriffinCard from './GriffinCard'; 


const styles = StyleSheet.create({
  mainCard: {
    flex: 1, shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
  },
  cardImage:{ height: 30, resizeMode: 'contain'},
  rhImage: {height: 30, resizeMode: 'contain' },
  textA:{ fontSize: 20},
  textB:{ fontSize: 18}


});


export default class WelcomeCard extends React.Component {

  render() {
    return (
      <Card title='Welcome to Blu. Presented by:' image={RHLogo} imageStyle={styles.cardImage}>
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