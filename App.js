// Importing Native components for proper functioning of the app
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing app screens
import Main from './app/screens/Main'
import Blitz from './app/screens/Blitz'
import Clonagem from './app/screens/Clonagem'

// Simplified paging
const Stack = createStackNavigator();

// Defining which pages will exist in the app, the first one being the first the user sees, options: hide page's title
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Blitz" component={Blitz} options={{ headerShown: false }} />
        <Stack.Screen name="Clonagem" component={Clonagem} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}