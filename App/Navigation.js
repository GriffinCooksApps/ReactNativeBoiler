import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import theme from './theme';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();



const Navigation = () => {

  return (
    <Tab.Navigator
      backBehavior="initialRoute"

      tabBarOptions={{
        activeTintColor: theme.colors.accent,
        inactiveTintColor: theme.colors.primary,
        showIcon: true,
        showLabel: false,
        tabStyle: {
          borderWidth:1, borderBottomEndRadius:15, backgroundColor:'powderblue'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: (focus, color, size) => { return (<Icon color={ focus ? 'blue': 'red'} name='home' size={20}/>)},
          }}
      />
      <Tab.Screen 
        name="Video" 
        component={VideoScreen}
        options={{
            tabBarLabel: 'Video',
            tabBarIcon: (focus, color, size) => { return (<Icon color={ focus ? 'blue': 'red'} name='videocam' size={20}/>)},
          }} />

    </Tab.Navigator>
  );
}

export default Navigation;
