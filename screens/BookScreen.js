import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default function BookScreen({route}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: route.params.img}}/>
            <View style={styles.container}>
                <Text style={styles.title}>{route.params.titre}</Text>
                <Text style={styles.description}>{route.params.description}</Text>
                <Text style={styles.author}>Par: {route.params.author}</Text>
                <Text style={styles.publishedDate}>Date de parution: {route.params.pb_date}</Text>
            </View>
            </View>
        </ScrollView>
        )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'darkkhaki',
      height: '100%'
    },
    image: {
        marginLeft: 60,
        marginTop: 20,
        marginBottom: 20,
        width: 250,
        height: 200,
        maxWidth: 250
    },
    title: {
        marginLeft: 40,
        fontSize: 18 ,
        fontWeight: 'bold'
    },
    publishedDate: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 20,
    },
    description: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10
    },
    author: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
    }
  });
  