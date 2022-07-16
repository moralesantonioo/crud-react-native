import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Esto es el Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default Home;