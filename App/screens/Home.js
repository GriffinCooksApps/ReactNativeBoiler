import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

function App() {

  return (

    <SafeAreaProvider>
      <View style={{flex:1, backgroundColor:'blue'}}>
        <Text>Welcome</Text>
      </View>


    </SafeAreaProvider>
  );

}