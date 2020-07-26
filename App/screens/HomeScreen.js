import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { Menu, Badge } from 'react-native-paper';
export const HomeNavTab = (route) => {
  const badge = route.focused ? <Badge />:'';
  return (
    <>
      <Menu.Item
        style={{
          position: 'absolute',
          right: -6,
          top: -3,
          backgroundColor: 'rgba (255,255,255,0.1)',
          borderRadius: 6,
          width: 12,
          height: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        icon='videocamera'
        key={`HomeScreenNav`}
        title='Home'
      />{badge}
    </>
  )
}

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