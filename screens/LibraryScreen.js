import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, Button, TextInput, ScrollView, FlatList, Image} from 'react-native';
import { ListItem } from 'react-native-elements';


export default function LibraryScreen({navigation}) {

    const [books , setBooks] = useState([])
    const [value , setValue] = useState("")
    function search(){
        console.log(axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyCLFnUWgxZWXbpEyudcqfmt3NZd6_a_nBs`)
        .then(response => {
            setBooks(response.data.items);
        }))
    }

    // function goToBook(books) {
    //     navigation.navigate('Détails du livre');
    // }

    function goToDetails(item) {
        navigation.navigate('Détails du livre', {
                description:item.volumeInfo.description,
                titre: item.volumeInfo.title,
                author: item.volumeInfo.authors[0],
                img: item.volumeInfo.imageLinks.thumbnail,
                pb_date: item.volumeInfo.publishedDate
        })
    }
        return (
            <ScrollView style={styles.container}>
            <TextInput placeholder="Entrer le titre d'un livre" 
            onChangeText={(content) => {setValue(content)}}>
            </TextInput>
            <Button style={styles.button} title="Rechercher" onPress={search}></Button>
                <FlatList
                    data={books}
                    renderItem={({item}) => (
                        <ListItem bottomDivider onPress={() => goToDetails(item)} >
                        <ListItem.Swipeable
                                containerStyle= {styles.background}
                                leftContent={<Button
                                title = "Détails"
                                icon = {{ name: 'info', color: 'white' }}
                                buttonStyle = {{ minHeight: '100%', backgroundColor: '#FE6D73' }}
                                onPress={() => goToDetails(item)}
                                />}
                                rightContent={<Button
                                title = "Delete"
                                icon = {{ name: 'delete', color: 'white' }}
                                buttonStyle = {{ minHeight: '100%', backgroundColor: '#FE6D73' }}
                                />}>
                        <ListItem.Content >
                        <View style={styles.content}>
                            <Image style={styles.img} source={{uri: "imageLinks" in item.volumeInfo ? item.volumeInfo.imageLinks.thumbnail: 'https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found-300x225.jpg' }} />
                            <ListItem.Title style={styles.title}>{item.volumeInfo.title}</ListItem.Title>
                        </View>
                        </ListItem.Content>
                        </ListItem.Swipeable>
                        </ListItem>)
                    }
                    keyExtractor={item => item.id.toString()}/>
            </ScrollView>
        )}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'darkkhaki',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      maxHeight: 150,
    },
    img: {
        width: 50,
        height: 100,
        marginRight: 20
    },
    button: {
        backgroundColor: 'darkkhaki'
    },
    title: {
        fontSize: 16,
        width: 250,
        maxWidth: 250,
    }
  });
   
  