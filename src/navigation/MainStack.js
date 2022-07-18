import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    //oculta el header de las rutas
                    //headerShown: false,
                }}
            >
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                />

                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                />

                <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                />{/*  */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;