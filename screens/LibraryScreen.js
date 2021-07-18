import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, TextInput, ScrollView} from 'react-native';


export default function LibraryScreen(navigation) {
    const [books , setBooks] = useState([])
    const [value , setValue] = useState("")
    function search(){
        console.log(axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyCLFnUWgxZWXbpEyudcqfmt3NZd6_a_nBs`)
        .then(response => {
            setBooks(response.books.data);
        }))
    }
        return (
            <ScrollView>
            <TextInput placeholder="Entrer le titre d'un livre"></TextInput>
            <Button title="Rechercher" onPress={search}></Button>
            </ScrollView>
        )}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkkhaki',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  
  