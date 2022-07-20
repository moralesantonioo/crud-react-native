import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import CustomCarrusel from '../components/CustomCarrusel'
import { Categories } from '../data/Categories'

const HomeScreen = ({ navigation }) => {

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Hola Antonio
                    </Text>
                    <Text style={styles.subTitle}>
                        Ordena y come
                    </Text>
                </View>
                <View>
                    <CustomCarrusel />
                </View>
                <View style={styles.categories}>
                    <Text style={styles.textCategories}>Categories</Text>
                    <ScrollView horizontal>
                        {Categories.map((category) => (
                            <View style={styles.card}>
                                <Image style={{ width: '70%', height: '70%' }} source={category.url} />
                                <Text>{category.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 25,
        color: '#2F9C5F',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 15,
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 25
    },
    categories: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    textCategories: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    }
});


export default HomeScreen;