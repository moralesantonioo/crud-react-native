import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Login from '../screens/Login'
import  Home from '../screens/Home'

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
                    name = 'Login'
                    component = { Login }
                />

                <Stack.Screen
                    name = 'Home'
                    component = { Home }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;