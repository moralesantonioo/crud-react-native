import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, Keyboard, Dimensions } from 'react-native';
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    const user = {
        name: 'Antonio',
        lastName: 'Morales',
        email: 'antoniomal2399@gmail.com',
        password: 'antonio12345'
    }

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [])

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Error de autentificación",
            "Ingrese datos correctos",
            /* [
                {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ] */
        );



    const onPressLogin = async () => {
        await AsyncStorage.setItem('email', email)
        if (email == user.email && password == user.password) {
            setLoading(true)
            setTimeout(() => {
                //navigation.dispatch(StackActions.replace('Home'))
                navigation.navigate('Home')
                setLoading(false)
                setEmail('')
                setPassword('')
            }, 2000)
        } else {
            createTwoButtonAlert()
        }

        /*  const data = {
             email,
             password
         }
         const newUser = new CreatedUsers();
         newUser.registerUser(data) */

    }

    const onPressRegister = () => {
        navigation.navigate('Register')
    }

    const onPressLoginGoogle = () => {
        console.log('login google')
    }

    return (
        <View style={styles.container}>
            {!keyboardStatus ?
                <View style={styles.login}>
                    <Image style={{ width: 400, height: 400 }} source={require('../../assets/login-sin-fondo.png')} />
                </View> :
                <View style={styles.loginSecondary}>
                    <Image style={{ width: 350, height: 350 }} source={require('../../assets/login-sin-fondo.png')} />
                </View>
            }
            {!keyboardStatus ?
                <View>
                    <CustomInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Correo electrónico" />
                    <CustomInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Contraseña" secureTextEntry={true} />
                </View> :
                <View>
                    <CustomInput style={styles.inputSecondary} value={email} onChangeText={setEmail} placeholder="Correo electrónico" />
                    <CustomInput style={styles.inputSecondary} value={password} onChangeText={setPassword} placeholder="Contraseña" secureTextEntry={true} />
                </View>
            }
            {loading ?
                <Text>Cargando...</Text> :
                <CustomButton style={styles.button} title="Login" onPress={onPressLogin} />
            }
            <TouchableOpacity
                style={styles.btnGoogle}
                onPress={onPressLoginGoogle}
            >
                <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require('../../assets/icon-google.png')} />
                <Text>Google</Text>
            </TouchableOpacity>
            <View style={styles.newAccounts}>
                <Text>Registra tu cuenta <Text onPress={onPressRegister} style={styles.here}>Aquí!</Text></Text>
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
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
    btnGoogle: {
        width: 150,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#82FE7C',
        color: "black",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginTop: 5,
    },
    login: {
        width: width,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSecondary: {
        width: width,
        height: 300,
        marginTop: -250,
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
    },
    inputSecondary: {
        width: 300,
        height: 50,
        marginBottom: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#6CCD68',
        borderRadius: 6,
    },
    newAccounts: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    here: {
        color: 'blue',
    }
});


export default LoginScreen;