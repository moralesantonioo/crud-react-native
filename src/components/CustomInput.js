import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ value , onChangeText, placeholder, secureTextEntry, style}) => {
    return (
        <View>
            <TextInput
                style={style}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                //keyboardType="numeric"
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default CustomInput