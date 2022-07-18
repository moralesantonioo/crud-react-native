import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Keyboard, Alert} from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const RegisterScreen = ({navigation}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      "Registro existoso",
      "inicia sesión",
      [
          { text: "Login", onPress: () => navigation.navigate('Login') },
          { text: "Registrar otro usuario", onPress: () => {
              setName('')
              setLastName('')
              setEmail('')
              setPassword('')
          } }
      ]
    );

  const onPressRegister = () => {
    const data = {
      name: name,
      lastName: lastName,
      email: email,
      password: password
    }

    if(name.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0){
      createTwoButtonAlert()
      console.log(data, 'data users')
    }else{
      console.log('complete los datos')
    }
  }

  return (
    <View style={styles.container}>
      {
        !keyboardStatus ?
          <Image style={{ width: 350, height: 350 }} source={require('../../assets/register.png')} /> :
          <Image style={{ width: 350, height: 350, position: 'absolute', flex: 1, top: 50, opacity: 0.1 }} source={require('../../assets/register.png')} />
      }
      {!keyboardStatus ? <Text style={styles.title}>Registrate ya!</Text> : <Text style={styles.titleSecondary}>Registrate ya!</Text>}
      <View>
        <CustomInput style={styles.input} placeholder="Nombres" onChangeText={setName} value={name}/>
        <CustomInput style={styles.input} placeholder="Apellidos" onChangeText={setLastName} value={lastName}/>
        <CustomInput style={styles.input} placeholder="Correo electrónico" onChangeText={setEmail} value={email}/>
        <CustomInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} onChangeText={setPassword} value={password}/>
      </View>
      <CustomButton style={styles.button} title="Registrarse" onPress={onPressRegister} />
    </View>
  )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  titleSecondary: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: -300
  },
  form: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 300,
    height: 50,
    marginBottom: 5,
    marginRight: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#6CCD68',
    borderRadius: 6,
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
    marginTop: 12,
  },
})

export default RegisterScreen;
