import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

export default function BookScreen(route) {
    const [count, setCount] = useState(0)
    function callMe() {
        console.log("Coucou");
        setCount(count + 1)
    }
    return (
      <View style={styles.container}>
          <Text>Bonjour toi</Text>
          <TouchableOpacity onPress={callMe}>
              <View>
                  <Text>Clique ici {count}</Text>
              </View>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkkhaki',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  