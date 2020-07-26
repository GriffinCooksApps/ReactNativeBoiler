import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import theme from './theme';
import { View } from 'react-native';

import HomeScreen, {HomeNavTab} from './screens/HomeScreen';
import VideoScreen, {VideoNavTab} from './screens/VideoScreen';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator 
    backBehavior="initialRoute"
    screenOptions={({route}) =>{
        const tab = TablOptions[route.name] || TabOptions.defaultTab;
        return tab(route);
      }}
    tabBarOptions={{
      activeTintColor: theme.colors.accent,
      inactiveTintColor: theme.colors.primary,
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
    </Tab.Navigator>
  );
}

export default Navigation;

const TabOptions ={
  Home:HomeNavTab,
  Video: VideoNavTab,
  defaultTab: defaultNavTab
}


const defaultNavTab = (route) => {
  return (
    <View 
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
      key={`tab-${route.name}`}>${route.name}</View>
  )
}
