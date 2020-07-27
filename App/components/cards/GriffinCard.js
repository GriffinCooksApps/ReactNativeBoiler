import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';


const styles = StyleSheet.create({
  boxStyle: {
    flexDirection: 'column', alignItems: 'center', alignItems: 'center', backgroundColor: 'white',
    padding: 10, marginTop: 10, margin: 5,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,
    elevation: 5, borderWidth: 0.3, borderColor: 'black'
  },
  linkText: { textDecorationLine: 'underline', color: '#995555' }

});

export default class GriffinCard extends React.Component {

  render() {
    return (
      <View style={styles.boxStyle}>
        <Text> Also, if you like hot sauce please visit: </Text>
        <Text onPress={() => Linking.openURL('http://www.griffinsauce.com')} style={styles.linkText}>
          http://www.griffinsauce.com
        </Text>
      </View>
    );
  }
}