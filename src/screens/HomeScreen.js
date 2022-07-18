import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
       
    }, [])

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


export default HomeScreen;