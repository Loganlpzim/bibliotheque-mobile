import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, TextInput, View} from 'react-native';


export default function LibraryScreen(navigation) {

        return (
            <View>
            <TextInput placeholder="Entrer le titre d'un livre"></TextInput>
            <Button title="Rechercher"></Button>
            </View>
        )}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkkhaki',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  
  