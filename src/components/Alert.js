import React from "react"
import { Alert } from 'react-native';

const CreateButtonAlert = () => {
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
    )
}

export default CreateButtonAlert;