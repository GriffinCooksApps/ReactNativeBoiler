import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import theme from './theme';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { act } from 'react-test-renderer';

const Tab = createMaterialTopTabNavigator();



const Navigation = () => {

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      swipeVelocityImpact={0.4}
      timingConfig={{duration: 0.5}}
      tabBarOptions={{
        activeTintColor: theme.colors.accent,
        inactiveTintColor: theme.colors.primary,
        showIcon: true,
        showLabel: false,
        tabStyle: {
          // backgroundColor: 'powderblue',
          borderWidth:0.1, borderColor:'blue', borderBottomEndRadius:20, borderStartWidth:0, elevation:3
        }
      
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color}) => { return (<Icon color={color} name='home' size={focused? 24: 20}/>)},
          }}
      />
      <Tab.Screen 
        name="Video" 
        component={VideoScreen}
        options={{
            tabBarLabel: 'Video',
            tabBarIcon: ({focused, color}) => {return (<Icon color={ color } name='videocam' size={focused? 24: 20}/>)},
          }} />

    </Tab.Navigator>
  );
}

export default Navigation;
