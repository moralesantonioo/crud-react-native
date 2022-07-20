import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View, Image, TouchableOpacity } from 'react-native';

//Screen
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import CardScreen from '../screens/CardScreen'
import FavoriteScreen from '../screens/FavoriteScreen'

//Screen names
const loginName = 'Login'
const registerName = 'Register'
const homeName = 'Home'
const profileName = 'Profile'
const settingName = 'Setting'
const cardName = 'My Card'
const favoriteName = 'Favorite'

const Tab = createBottomTabNavigator()

const MainStack = () => {
    const [isShow,] = useState(false)
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                tabBarOptions={{
                    showLabel: false,
                }}
            >
                {isShow && <Tab.Screen name={loginName} component={LoginScreen} />}
                {isShow && <Tab.Screen name={registerName} component={RegisterScreen} />}
                <Tab.Screen name={homeName} component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#2F9C5F' : '#748c94',
                                    }}
                                    source={require('../../assets/icon-home.png')}
                                />
                                <Text
                                    style={{
                                        color: focused ? '#2F9C5F' : '#748c94',
                                        fontSize: 10
                                    }}
                                >Home</Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen name={profileName} component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#2F9C5F' : '#748c94',
                                    }}
                                    source={require('../../assets/icon-profile.png')}
                                />
                                <Text
                                    style={{
                                        color: focused ? '#2F9C5F' : '#748c94',
                                        fontSize: 10
                                    }}
                                >Profile</Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen name={cardName} component={CardScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    top: -20,
                                    backgroundColor: '#2F9C5F',
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    shadowColor: '#171717',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.6,
                                }}>

                                <View>
                                    <Image
                                        style={{
                                            tintColor: focused ? '#fff' : '#fff',
                                            width: 45,
                                            height: 45,
                                        }}
                                        source={require('../../assets/icon-carrito.png')}
                                    />
                                </View>

                            </View>
                        ),
                        presentation: 'modal'
                    }}
                />
                <Tab.Screen
                    name={favoriteName}
                    component={FavoriteScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#2F9C5F' : '#748c94'
                                    }}
                                    source={require('../../assets/icon-favorito.png')}
                                />
                                <Text
                                    style={{
                                        color: focused ? '#2F9C5F' : '#748c94',
                                        fontSize: 10
                                    }}
                                >Favorite</Text>
                            </View>
                        ),
                    }}
                //options={{ presentation: 'modal' }}
                />
                <Tab.Screen
                    name={settingName}
                    component={SettingScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: focused ? '#2F9C5F' : '#748c94'
                                    }}
                                    source={require('../../assets/icon-setting.png')}
                                />
                                <Text
                                    style={{
                                        color: focused ? '#2F9C5F' : '#748c94',
                                        fontSize: 10
                                    }}
                                >Setting</Text>
                            </View>
                        ),
                    }}
                //options={{ presentation: 'modal' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;