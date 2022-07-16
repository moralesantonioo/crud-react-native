import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);


    useEffect(() => {

    }, [])

    const onPressLogin = () => {
        if (email == 'antoniomal2399@gmail.com' && password == 'antonio12345') {
            setLoading(true)
            setTimeout(() => {
                navigation.navigate('Home')
                setLoading(false)
            }, 2000)
            console.log('login')
        } else {
            console.log('error')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Image style={{ width: 450, height: 450 }} source={require('../../assets/login.jpg')} />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Correo electrónico"
             
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Contraseña"
                
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPressLogin}
            >
                { loading ?  <Text>Cargando...</Text> : <Text>Login</Text>}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    button: {
        width: 150,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#82FE7C',
        color: "black",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    login: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 50,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#6CCD68',
        borderRadius: 6,
    }
});


export default Login;