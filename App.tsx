

import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/screens/RootNavigator';
import { ThemeProvider } from './src/context/ThemeContext';

function App() : React.JSX.Element {

  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
        <Text>Salam</Text>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
