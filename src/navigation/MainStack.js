import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View, Image } from 'react-native';
//Screen
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'

//Screen names
const loginName = 'Login'
const registerName = 'Register'
const homeName = 'Home'
const profileName = 'Profile'
const settingName = 'Setting'

const Tab = createBottomTabNavigator()

const MainStack = () => {
    const [isShow,] = useState(false)
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                tabBarOptions={{
                    showLabel: false,
                    style:{ 
                        backgroundColor: 'red'
                    }
                }}
            >
                {isShow && <Tab.Screen name={loginName} component={LoginScreen} />}
                {isShow && <Tab.Screen name={registerName} component={RegisterScreen} />}
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
                <Tab.Screen name={homeName} component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    top: -20,
                                    backgroundColor: '#fff',
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%'
                                }}>
                                <View style={{
                                    //backgroundColor: focused ? '#fff' : null,
                                   //borderRadius: focused && '50%',
                                   // position: focused && 'relative',
                                    //top: focused && -10,
                                    //padding: focused ? 8 : 0,
                                    //borderWidth: focused ? 1 : 0,
                                    //borderColor: focused ? '#000' : '#748c94',
                                }}>
                                    <Image
                                        style={{
                                            tintColor: focused ? '#2F9C5F' : '#748c94',
                                            width: 45,
                                            height: 45,
                                        }}
                                        source={require('../../assets/icon-home.png')}
                                    />
                                </View>
                            </View>
                        ),
                    }}
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