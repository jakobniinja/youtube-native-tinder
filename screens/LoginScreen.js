import React from 'react'
import { View, Text, Button } from 'react-native'
import useAuth from "../hooks/useAuth"

export default function LoginScreen() {
    const {signInWithGoogle } = useAuth();
    return (
        <View>
            <Text>Login please</Text>
            <Button title="Google" color="#8a2be2" onPress={signInWithGoogle} ></Button>
        </View>
    )
}
