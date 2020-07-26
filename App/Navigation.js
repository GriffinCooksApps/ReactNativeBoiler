
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator backBehavior="initialRoute">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
    </Tab.Navigator>
  );
}

export default Navigation;
