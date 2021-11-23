import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../hooks/useAuth';


export default function LoginScreen() {
    const { user} = useAuth();
    console.log(user)
    return (
        <View>
            <Text>Login Screen</Text>
        </View>
    )
}
