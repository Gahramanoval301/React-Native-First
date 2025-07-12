

import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/screens/RootNavigator';

function App() {

  return (
    <NavigationContainer>
      <RootNavigator />
      <Text>Salam</Text>
    </NavigationContainer>
  );
}

export default App;
