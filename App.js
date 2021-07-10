import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './screens/SplashScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerStyle: {
          backgroundColor: 'darkkhaki',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Mes livres" component={LibraryScreen} />
        <Stack.Screen name="Détails du livre" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

