import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';

export default function SplashScreen({navigation}) {
  function goToLibrary() {
    navigation.navigate("Mes livres");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.splashImg} source={require('../assets/img/splashimg.png')}></Image>
      <Text style={styles.splashText}>Book'App</Text>

    <TouchableOpacity onPress={goToLibrary}>
      <Text style={styles.startBtn}>Commencer</Text>
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
    width: 250,
    height: 250,
    marginBottom: 20,
  }
});
