import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

import LibraryScreen from './screens/LibraryScreen';
import SplashScreen from './screens/SplashScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: 'darkkhaki',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name=" " component={SplashScreen} />
        <Stack.Screen name="Mes livres" component={LibraryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkkhaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: '#775935',
    fontSize: 20
  },
  startBtn: {
    color: '#dadada',
    borderWidth: 1,
    borderColor: '#775935',
    backgroundColor: '#775935',
    borderRadius: 4,
    padding: 5,
    marginTop: 100,
  },
  splashImg: {
    width: 150,
    height: 150,
    marginBottom: 20,
  }
});
