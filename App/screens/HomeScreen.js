import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';


// ({ focused, color, size, route }) => {
//   return {
  // tabBarAccessibilityLabel
//   }
//   return focused ? <Ionicons name='home' size={size} color='black' /> :
//     <View style={{ width: 24, height: 24, margin: 5 }}>
//       <Ionicons name='home' size={size} color='red' />
//       {route > 0 && (
//         <View
//           style={{
//             // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
//             position: 'absolute',
//             right: -6,
//             top: -3,
//             backgroundColor: 'red',
//             borderRadius: 6,
//             width: 12,
//             height: 12,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
          
//         </View>
//       )}
//     </View>
  
// };




export default class Home extends React.Component {

  render() {
    return (

      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: 'white', borderColor: 'white' }}>
          <Text>Welcome</Text>
        </View>


      </SafeAreaProvider>
    );
  }

}