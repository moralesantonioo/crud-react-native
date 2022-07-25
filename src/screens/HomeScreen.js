import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import CustomCarrusel from '../components/CustomCarrusel'
import { Categories } from '../data/Categories'
import { Data } from '../data/data'

const HomeScreen = ({ navigation}) => {

    useEffect(() => {

    }, [])

    const dataArray = (data) => {
        console.log(data)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Bienvenido
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
                        {Categories.map((item) => (
                            <View style={styles.card}>
                                <Image style={{ width: '70%', height: '70%' }} source={item.url} />
                                <Text>{item.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.popular}>
                    <Text style={styles.textPopular}>Popular</Text>
                    <ScrollView horizontal>
                        {Data.map((item) => (
                            <View style={styles.cardPopular}>
                                <Text style={styles.textName}>{item.name}</Text>
                                <Image style={{ width: '80%', height: '80%' }} source={item.url} />
                                <Text style={styles.textPrice}>{item.price}</Text>
                                <TouchableOpacity style={styles.button} onPress={() => dataArray(item)}>
                                    <Text style={styles.textButton}>Details</Text>
                                </TouchableOpacity>
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
        height: 140
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
        marginHorizontal: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    popular: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    textPopular: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardPopular: {
        width: 170,
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingVertical: 50,
        paddingHorizontal: 10
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    textPrice: {
        marginVertical: 5,
        fontSize: 16,
    },
    button: {
        width: 60,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#308F5A',
        borderRadius: 12,
        marginTop: 5,
    },
    textButton: {
        color: '#fff'
    }
});


export default HomeScreen;